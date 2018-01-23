---
title: Mocking the Operating System
permalink: designs/osmock.html
authors: iphydf
first_proposed: 2018-01-22
last_revision: 2018-01-22
state: DRAFT
---

Creating a mock/fake implementation of the operating system functions to run
simulations and repeat recorded execution traces in toxcore.

# Objective

This design proposes to create a layer below toxcore containing mock versions
of all system calls used by toxcore. Doing this gives us two advantages:

1.  The operating system specific code is factored out, and none of the
    implementation files `#include`s system headers other than libc and
    library dependencies (opus, vpx).
2.  None of the toxcore code performs any system calls directly, without going
    through this layer.

The first advantage allows us to test the OS-specific code independently from
the portable code. Once we validated that the I/O code does I/O the right way,
we can assume correctness and no longer need to test it through toxcore as
thoroughly as before. We'll still want integration tests that test toxcore's
integration with this layer, but most functional tests can become pure non-I/O
tests. This will give an immense speedup of tests, improving developer
velocity.

The second point allows us to record exactly what system calls toxcore makes,
together with the system's responses, in an execution trace. We can then later
replay this trace to reproduce bugs. We can also use stored execution traces
to ensure that toxcore behaves the same for the same input.

Not only can we reproduce the exact same code execution, but we can also
modify it slightly. This allows us to simulate arbitrary error conditions.
Perhaps most interestingly, since `malloc` is potentially a system call, we
will include it in the mock layer, allowing us to repeatedly execute the same
trace, each time with an increasing number of successful mallocs. This allows
us to test a large number of possible allocation failure handling paths, much
more precisely than we would by just setting process resource limits.

# Requirements

Requirements for the solution:

*   It should include *all* potential system calls, including libsodium/nacl
    random functions such as key generation.
*   It should not add more than 50ns of latency to actual system calls when
    not recording or replaying a trace. The `gettimeofday` system call on
    Linux takes about 50ns, so we take that as a benchmark.
*   Recording a trace should be sufficiently low overhead such that we can
    record the trace of a multimedia (A/V) call without noticable delay.
*   It should be able to record toxcore API calls, so that we can replay the
    activity of any API user without having to manually reproduce the API
    calls that led to the execution.
*   The remainder of the code, i.e. everything except the OS layer, should no
    longer contain any platform-specific code. This includes LAN discovery
    code.

Specifically the LAN discovery code contains larger platform-specific
functions that will need to move into the platform module.

This proposal makes toxcore itself deterministic. The crypto library we use is
deterministic apart from random number generation, which we will include in
the platform interface. However, for A/V calls, we use non-deterministic
libraries such as libvpx, which observes timing of its own execution to
influence its internal decisions. E.g. if encoding a frame takes too long, it
will reduce video quality. This poses a challenge for this proposal. For this
reason, we will defer toxav to a later stage and focus on toxcore only at this
point. There is a rough plan for toxav to be built purely on top of the core
API in the future, instead of using toxcore internals. If we make that happen,
we may never need to instrument toxav code.

# Design Ideas

All functions in toxcore that allocate memory or otherwise perform system
calls will be changed to receive as first parameter `const Env *env`. This
environment pointer contains pointers to system functions such as `malloc`.
The API of these functions may differ slightly from the actual platform calls,
as they need to be abstract enough to support all current platforms.

The new `env.c` module contains static `env_$name` functions for each of the
`$name` members of the `Env` struct, i.e.:

```c
typedef struct Env {
  void *(*malloc)(size_t size);
  ...
} Env;

static void *env_malloc(size_t size) {
  return malloc(size);
}

const Env env_default = {
  env_malloc,
};

Env *env_new(void) {
  Env *env = (Env *)malloc(sizeof(Env));
  if (env != NULL) *env = env_default;
  return env;
}
```

The env object can record the execution trace and be able to replay it. To
avoid mixing the platform code with trace code, we will create a separate
module called `trace.c` that wraps an env in tracing code. This also avoids
the overhead of checking a "tracing" flag on every call. The only overhead
remaining is that of an indirect call. This brings the maximum overhead to
100ns in case of a cache miss, but in reality these functions will be cached
most of the time, making the overhead per call less than 10ns on `x86_64`.

Since toxav uses toxcore internals, it will pass `&env_default` as the env
parameter. This means calls originating from toxav will not be traced for the
time being, making a trace including toxav activity of limited use. This is
acceptable as long as we ensure that an inactive toxav does not interfere with
toxcore in any externally observable way, i.e. it does not cause allocations
or network I/O unless asked to by either toxcore or the client code.

## Fuzzing

Making toxcore a pure function of its input, i.e. the execution trace, enables
fuzzing inputs. We can make use of instrumentation fuzzers such as afl-fuzz to
find bugs in branches taken rarely.

## SpecTest

As part of extending the hstox reference implementation, we will generate
simulation input from hstox. This operates at a slightly higher level and
doesn't need to mock malloc and random number generators, but injects
hstox-generated network messages into the receive queue of the system under
test (i.e. toxcore). Using QuickCheck, we can explore properties of the entire
system, checked against the Haskell reference implementation.

# Alternatives Considered

## Doing nothing

If we don't do this, we will continue having flaky tests that need to execute
2-3 times before they pass, and debugging crashes remains hard, since we need
to manually reproduce the environment they were observed in.

## Env library

Instead of adding parameters to all functions, we could also create an `env`
library containing `env_malloc` as a global function. The advantage is
implementation simplicity: we don't need to change the signature of just about
every function in toxcore. The disadvantage is that it will need to use global
mutable state to record the trace, making thread-safety an issue. To
distinguish env calls from two different Tox instances, we need to assign the
instances unique identifiers. Doing this in a thread-safe way requires global
locks and more platform-specific code.

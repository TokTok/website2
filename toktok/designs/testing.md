---
title: Tox Core Test Framework
permalink: designs/testing.html
---

Language independent fuzzing and unit testing for Tox implementations

# Objective

The goal of this project is to create a language-neutral test framework to
validate any [Tox Core Protocol](../spec.html) implementation, including the C
reference implementation [libtoxcore](https://github.com/toktok/c-toxcore).
We aim to create an exhaustive test suite using this framework to ensure
compatibility and correctness of all protocol implementations. The test suite
aims to provide validation, not verification, meaning we do not aim to prove
any properties of the specification or implementations. We aim to supplement
the implementation-specific test suite, not to replace it. Unit tests inside
the implementation test suite are still important. The framework and test
suite implemented here enables some form of test-driven development. We target
the functional subset of implementations and do not test I/O, so integration
tests validating the networking part of a protocol implementation will remain
vital to its confidence in correctness. A secondary goal is to improve the
protocol specification with findings from its model implementation.

# Background

The C implementation has a suite of unit tests and some integration tests. The
unit tests are non-exhaustive and the integration tests too high-level.
Finding specific bugs or regressions is currently difficult. The tests were
also written by the same person who wrote the tested code. This tends to lead
to implementation-guided tests, which easily omits some corner cases.

Testing new implementations such as [Zetox](https://github.com/zetok/tox) and
[HsTox](https://github.com/TokTok/hs-toxcore) involves implementing networking
and having it communicate with an existing Tox node running the C reference
implementation. Doing automated tests of this kind is costly, as it requires
running a Tox node and establishing a connection to it.  These tests are also
necessarily stateful and non-deterministic, because they run in a Tox network.
Hermetic tests are therefore difficult to achieve.

# Requirements

The test framework must be language-independent and easy to adopt. We do not
aim to provide any support libraries, so the API must be straightforward to
implement without additional dependencies.

A combination of [property-based
tests](https://en.wikipedia.org/wiki/QuickCheck) and example-based tests
(classical unit tests) helps ensuring that known corner cases are caught and
previously unknown cases are identified. It also helps solidifying the Tox
Protocol Specification.

We require 100% functional test coverage for the model implementation,
exempting unreachable code caused by weaknesses in the implementation language
or libraries used.

We aim for close to 100% functional test coverage of libtoxcore achieved
purely using our test suite, ignoring the libtoxcore test suite itself.
Achieving this gives us reasonable confidence that all cases are covered in
the test suite and helps future alternative implementations achieve feature
parity. Exemptions are functions performing I/O.

All tests in the suite must be linked back to a paragraph in the protocol
specification. If a test is required has no clear reason in the specification,
that means the protocol is underspecified and the specification must be
improved.

Tests must be skippable as “Not Implemented” so that a partial implementation
can use the test suite as validation in its continuous implementation/test
cycle. Unimplemented parts should not count as failures.

Tests should run in a reasonable amount of time (seconds, or up to a minute).
All tests are purely computational, so they can run fast. Fast tests allow for
continuous testing during implementation.

All test results must be completely deterministic and defined purely as a
function of their inputs. This means that any code that relies on I/O will
remain untested and must be tested in the implementation-specific test suite.
This includes networking, but also any functionality that relies on
randomness.  Notably this includes generating key pairs and nonces. Tests that
involve cryptography must therefore supply known and deterministic keys and
nonces.

# Design Ideas

The test framework consists of a model implementation and a test runner both
written in Haskell. A “system under test” (SUT) is a protocol implementation
that is tested by the test runner. The SUT is presented to the test runner as
a standalone executable that communicates with it using pipes.

Haskell was chosen as an implementation language due to its strong compile
time guarantees and its ability to succinctly express run time behaviour. Most
importantly, none of the model functions are allowed to be in the IO or any
concurrency monad, ensuring their purity and therefore determinism.

## Test kinds

As part of a test run, the model implementation itself is validated against
properties, and the system under test is validated against the model’s test
results.

[Hspec](https://hspec.github.io/) will be used to write the test
specification.  Every Haskell module `M` will have an associated `${M}Spec`
module that by itself achieves 100% expression coverage for that particular
module. Top level declaration coverage will be relaxed, as we can assume that
“deriving” does the right thing. For each Haskell module `M` that supports
testing the SUT, a module `${M}ExtSpec` contains the tests that run against
SUTs.

[QuickCheck](https://hackage.haskell.org/package/QuickCheck) will be used for
the property-based tests. The base of the Tox protocol is the data structures
representing packet contents. Reading and writing functions will be tested in
terms of each other (`read(write(x)) == x`), and all reading functions will be
tested with arbitrary byte arrays as input to increase confidence in their
reliability. I.e. if the model implementation rejects a byte array, then the
SUT’s implementation must also reject it. We intentionally reject the
[Robustness principle](https://en.wikipedia.org/wiki/Robustness_principle)
here and require strict conformance from the SUT.

## Execution

The test runner automatically discovers SUT executables in the “test”
subdirectory. Each test execution will be run on all SUTs found there in
sequence. The test runner considers a test successful if and only if all SUTs
return the same (correct) result.

Each test launches a new instance of the SUT executable in a separate process.
Standard input and output are used to communicate with it. The test runner
provides test data on the process’ standard input and reads the test results
from its standard output. Running one instance of the executable per test
helps ensure hermetic testing, as the implementation can’t keep state (other
than by performing I/O, which is highly discouraged in tests).

## Test protocol

All integers are represented in Big Endian. The test protocol is specified as
follows:

### Test Data (SUT’s stdin)

The test input is a length-prefixed test name and an arbitrary piece of data.
The meaning of that data depends on the test name.

Field     | Type     | Length
--------- | -------- | ------
length    | `Int`    | 8 bytes
test name | `String` | `$length` bytes
test data | `Bytes`  | Depends on test name

### Test Result (SUT’s stdout)

In case of error, a `Failure` message is returned:

Field            | Type     | Length
---------------- | -------- | ------
0x00 (`Failure`) | `Tag`    | 1 byte
length           | `Int`    | 8 bytes
error message    | `String` | `$length` bytes

In case of success, an arbitrary piece of data is returned, depending on the
test name in the input.

Field            | Type     | Length
---------------- | -------- | ------
0x01 (`Success`) | `Tag`    | 1 byte
result data      | `Bytes`  | Depends on test name

Tests can be skipped by sending a `Skipped` result. These tests will be
ignored and reported as successful.

Field            | Type     | Length
---------------- | -------- | ------
0x02 (`Skipped`) | `Tag`    | 1 byte

## Reference cross-validation

The tests implemented here have little confidence in correctness unless they
are themselves validated against the reference implementation in libtoxcore.
Part of ensuring that the tests themselves conform to the specification
involves implementing the test protocol in terms of libtoxcore.

# Alternatives Considered

TODO (none yet).

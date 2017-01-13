---
title: Plan
permalink: plan.html
menu_index: 3
---

# Objective

Following a step plan will involve making compromises. People understandably
want to work on exciting new features much more than on making a stable basis
for future development. It is now time to pay our technical debt and clean
things up. After paying this price, we will be able to move forward more
quickly, and to attract more contributors.

## Goals

-   Focus: avoid thinly spreading our scarce human resources, focus on a
    single goal and put all the resources behind that.
-   Step plan: avoid getting distracted by future plans and focus on what’s
    directly ahead of us. Write down thoughts about future plans, but don’t
    execute until we reach their time.
-   We want to push the development of a single client for a while, to get
    that client to a state where its code can be considered high quality and
    its user experience is satisfactory.

## Non-goals

-   Rewrite toxcore. We don’t have the resources to do this project at this
    time. It is not off the map, but won’t be a focus point.
-   Discontinue all clients except one. Pushing a single client does not mean
    abandoning all others, but their development will be reduced temporarily.

# Phases

The project plan is split into phases. In each phase, we follow a slightly
different development process, adjusted to the available tools and resources.

## Common

The following guidelines are the same in all phases:

-   Team members make pull requests (PRs) early in their development process.
    This signals to others that they are working on something. It also runs
    the Travis CI on every change, so development can go paired with
    continuous testing.
-   Once the author feels their PR is ready for review, they assign it to a
    reviewer of their choice.
-   The number of lines changed in a PR should not exceed 300. If it is a
    larger change, it should be broken into separate PRs. It won’t be possible
    to guarantee that every PR adds direct value, but in general, they should.
-   Each PR should be few commits, ideally one, so it can easily be rolled
    back if necessary.
-   The commit message should be descriptive of what the change is trying to
    achieve. Mention Github issue numbers if they are related.
-   Every PR to the core and client repositories must have at least one
    reviewer that is not the PR author.
-   HEAD of master should always be a signed commit.

## Phase 1: Establishing a basis

In phase 1, we assume a young team of people who haven’t worked together much
before.

-   Each repository has only a master branch.
-   The repository has exactly one owner who can push to the master branch to
    merge PRs. The owner can not push unreviewed changes. No team members
    except the owner can merge PRs.
-   The hstox repository contains the specification source in LaTeX (literate
    Haskell) format. Text reviews are done on the spec repository.

### Tasks for phase 1

-   toxcore
    -   (P1) Fix the current test failures and enable continuous testing on
        Travis.
    -   (P2) Fetch the test suite from git as of 4 weeks ago and build/run
        against the current code to ensure support horizon compliance.
    -   (P2) Fetch hstox master, build it against toxcore, and run its test
        suite.
    -   (P3) Fetch client master, build it against toxcore, and run its test
        suite.
-   client
    -   (P1) Split out logic and data models from the UI code.
    -   (P1) Write unit tests against logic code.
    -   (P2) Expose msgpack-rpc interface for logic code to allow testing
        through the hstox test suite.
    -   (P2) Add automated GUI tests using a user interface testing framework
        (e.g. dogtail).
-   hstox
    -   (P1) Design and implement testing interfaces.
    -   (P1) Testing interfaces in C, backed by the C toxcore implementation.
    -   (P2) Improve the afl-fuzz integration.
-   spec
    -   (P1) Rewrite the specification as tests are added.
    -   (P3) Generate parts of the spec from code to ensure up-to-dateness.

## Phase 2: Stabilising the protocol

After we have tests in place, we will improve the Tox protocol bit by bit. If
possible, we will do this while observing the support horizon. If it turns out
the protocol must break, we will do it exactly once, and in a major way, to
make the protocol backwards and forwards compatible from then on.

As the team grows more mature, some guidelines can loosen up. As the code
becomes more stable and tested, we can tighten or introduce other guidelines.

-   The number of owners increases, making it possible for the one owner to
    take vacation or be absent sometimes. Owners are trusted team members who
    bear the responsibility for keeping up the standards.
-   In phase 2, the four projects evolve in lockstep.

### Tasks for phase 2

-   toxcore & spec
    -   (P1) Identify issues with the current protocol.
    -   (P1) Incrementally improve the protocol.
    -   (P1) Re-evaluate target use cases and possibly redesign parts of the
        protocol to support them.

## Phase 3: Release cycles and features

By now, we will have a strong testing infrastructure and a 4-week support
horizon. This allows us to make releases, meaning:

-   Each minor release gets a tag and a branch.
-   Each patch release gets a tag.
-   Security patches are backported to the last major release.
-   The support horizon goes away, and instead we support the two latest major
    releases.
-   From now on, we can plan for features and start supporting additional
    platforms.
-   Any features that have not reached maturity in grayhatter’s feature
    development fork now need to be pushed to maturity and be merged into the
    stable branch. From this moment, collaborative feature development can
    occur in branches on the main repository.
-   Before a release, we will run afl-fuzz on the test suite, appropriately
    seeded with test inputs. This should be able to achieve near 100% coverage
    on non-IO code. A complete afl-fuzz is expected to take about 1-3 days,
    making that the lower bound of release frequency.

---
layout: default
title: Development process
permalink: development.html
menu_index: 9
---

Tox and TokTok are software projects with very high security and stability
requirements. It will potentially be used by hundreds of millions of people
around the world. A security issue could have catastrophic consequences.
Slightly less critical, but still very important, is stability. If the library
underlying our chat clients is unstable, it's annoying in the mildest case, and
can be catastrophic to a single person (imagine the code arbitrarily deleting
chat histories).

Therefore, toktok-team operates in a slightly different way from most open
source projects. We have strict design and code review processes that no
contributor, including the project owners, can violate. Github branch
protection ensures that the review process is followed.

For any non-trivial development, we follow a rigorous design process. This
process ensures that every decision is founded in reason and that at least some
alternatives for the decisions have been considered. We split the design into
two stages with a document accompanying each stage.

# Goals, requirements, overview

The first stage is the design overview. This document contains the high level
overview of a design. It starts by answering the following questions:

-   What is the current state of the world? We describe a problem and outline
    a solution with the currently available technology. This establishes the
    background for our design.
-   What do we want the world to look like? This part describes at a high
    level what the new technology is intended to do, what problems it solves,
    and in particular, how the problem described in the previous section will
    be solved in a better way using this new technology.
-   What are the goals of this design?
-   Where does the scope of our design end? What is *not* a goal of this
    design?

Next comes a list of requirements. For example:

-   What kind of data sizes does our system operate on?
-   How reliable does it need to be?
-   How general or how specific does it need to be?
-   How extensible does it need to be?

The largest section of this document is the high level design overview. Here we
describe, without going into implementation details, what components the
solution will be comprised of, how they interact, and how they depend on each
other. For tooling, this may include usage examples. For code, this won't
necessarily include API definitions. This part may discuss storage choices,
protocol choices, and other high level design ideas.

Finally, the document includes a section discussing alternative approaches. The
discussion gives a short description of a technology that solves a similar
problem to ours, provides a link to the documentation of that technology, and
points out reasons for not choosing it.

This document forms the basis for discussion, and we require at least one
reviewer (if possible, two reviewers) to sign off on the idea. Ideally, we have
many more people commenting and suggesting on the document.

You can use our [design overview template](design/template.html) or write your
own. If you are unsure which direction you want to go in, writing small
prototypes is a good way of exploring the space you are designing your project
in. A prototype typically takes about a day to implement. If you take
significantly more time, it will turn into a full implementation. Prototypes
should be code you can throw away easily.

# Detailed technical design

After going through several iterations of discussion and improvement, the rough
design is expanded to become a full technical design. This is a separate
document, which may initially be a copy of the above document. It specifies the
APIs in detail, with message types, effects, and result types. These can be
language-specific or language-agnostic such as web or RPC APIs. The evolution
of this document usually goes hand in hand with the actual implementation.

# Writing code

In many open source projects, the people with write access to the source code
repository will submit code frequently and break things in the process. The
breakage is then hopefully resolved. In contrast, toktok-team does not allow a
single line of code (or documentation) to enter the master branch of the main
repositories without being reviewed by at least one member that did not write
the code. This means that even toktok-team members cannot push arbitrary
unreviewed code to the repository.

If you want to contribute code or documentation, you will go through the normal
Github process of forking the repository and opening a pull request. One or
more reviewers from toktok-team will read and comment on your submission. You
will most likely receive actionable feedback, which you can discuss on the
review. You can then add more commits to the review by pushing them to the pull
request branch.

A continuous integration system will build the code for all supported platforms
and run an exhaustive testsuite on the x86\_64 platform to increase confidence
in the changes. We require close to 100% test coverage. The only exceptions are
some cases of trivial generated code (Haskell `deriving`) and unreachable code
caused by unavoidable weaknesses in the type system.

# Requirements

-   Code review
    -   [Reviewable](https://reviewable.io) for code reviews.
    -   Every PR is required to go through review, no commits can be made
        directly to the master branch without review (Github branch
        protection).
    -   No branches other than master on the main repositories; contributors
        work on their own forks.
-   Testing
    -   [Travis](https://travis-ci.org) for continuous integration.
    -   [Coveralls](https://coveralls.io) for test coverage recording.
    -   Github branch protection requires CI tests to pass and coverage to not
        decrease before merge.
    -   If multiple repositories: core CI must run client tests.
-   Repository: we use multiple repos instead of one large one
    -   Separation of Github issue trackers.
    -   Separate permissions (alleviated a bit by strict code review).
    -   Git submodules could be used to track and cross test client and
        toxcore to verify that each compile with each other.
-   Release plan
    -   Rolling release (everybody develops on HEAD).
    -   Support horizon: 4 weeks of backwards compatibility, ensured using the
        test suite from 4 weeks ago.
    -   No public releases (for now) to encourage focus within the project.

# Standards

We will hold ourselves and our contributors to high standards. Therefore, we
require:

-   Every function, macro, global constant, type, and aggregate member should
    be documented. Documentation may be omitted if
    -   the entity is not part of the module's public API,
    -   the entity is trivial, and
    -   the context sufficiently explains the purpose.
-   Commits should explain what their purpose is. Don't just say what you're
    doing, but also why.
-   Every function must have 100% branch coverage in tests. This is a superset
    of line coverage where every condition must have been both true and false
    within the test run. In Haskell, 100% expression coverage is required,
    meaning every sub-expression must have been fully evaluated at one point.
    HPC (Haskell Program Coverage) under-reports coverage, so the 100% won't
    be automatically measurable. In C, expression coverage is not measurable.

As always, every standard is subject to personal judgement, so if a rule does
not make sense in a certain situation, you're free to ignore it, so long as
you're able to justify your reasoning.

# Repositories

We have three main repositories:

-   [c-toxcore](https://github.com/TokTok/c-toxcore) is the stable C toxcore
    implementation we maintain. This repository applies strict contribution
    rules and new features cannot enter unless they comply with the standards.
-   [hs-toxcore](https://github.com/TokTok/hs-toxcore) is the Haskell test
    framework used to validate the C toxcore implementation. This validation
    involves implementing most of the protocol specification, so by the end
    this will be for the most part a reference implementation. This repository
    also contains the specification itself.
-   [spec](https://github.com/TokTok/spec) contains a non-golden Markdown
    version of the specification. Contributors may make PRs to this
    repository, which will then be ported back into the hstox repository.

# Stepwise howto for a contribution

-   Fork the repository you want to contribute to on Github.
-   Make a new branch in their own repository, named as you like (usually
    according to the topic you are working on).
-   Push a commit to your new branch.
-   PGP signed commits are strongly suggested, but not required.
-   Make a PR (pull request) on Github.
-   Amend your commit with changes as you go along.
-   When you feel you're ready, ask for a review, @mentioning the person you'd
    like as a reviewer.
-   The reviewer will take up to 72 hours to reply. This reply may consist of
    "I'm reviewing it" or similar, if they think it takes more time to go
    through everything.
-   If a review goes stale, comment on the PR and/or come talk on IRC in
    #toktok or #tox-dev.

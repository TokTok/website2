---
layout: default
title: Roadmap
permalink: roadmap.html
menu_index: 4
---

This is a timeless roadmap for current and upcoming TokTok projects. It is
ordered by time and priority, but no times are assigned. Some of these projects
are part of the [startup phases](plan.html). The more advanced milestones will
be started after the project has achieved some stability.

A concrete roadmap built from GitHub issues and pull requests can be found here:

-   [c-toxcore](roadmap/c-toxcore.html)

The milestones presented here are flexible. Priorities might change in the
future as the landscape shifts and our target audience requires features at
different times.

# Basic functionality

-   Complete [Tox protocol specification](https://github.com/TokTok/spec).
-   Write a Haskell [model
    implementation](https://github.com/TokTok/hs-toxcore) of the Tox protocol
    and [tests](designs/testing.html) for other implementations.
-   Write a Rust [implementation](https://github.com/zetok/tox) of the Tox
    protocol.

# Feature parity with toxcore

-   Create a toxcore-compatible layer for C on top of either the Haskell or
    the Rust implementation.
-   Create a very simple client directly on top of the protocol implementation
    (not on the C wrapper).

# Basic mobile support

-   Rewrite or merge [TokTok](https://github.com/TokTok/toktok-android) and
    [Antox](https://github.com/Antox/Antox) Android clients.
-   Adopt [Antidote](https://github.com/Antidote-for-Tox/Antidote) and use it
    with our Tox implementations.

# Optimisations for mobile

-   Implement simple multi-client profile and message log synchronisation.
-   Implement simple offline messaging using Freenet or federated servers.
-   Optimise network traffic usage.

# High level Tox protocol

-   Create a specification and model implementation for the Middle Level Tox
    Protocol with support for:
    -   Prioritisation (and
        [ToS](https://en.wikipedia.org/wiki/Type_of_service))
    -   Streaming (like TCP)
    -   Reliable (for messaging), unreliable (for audio), and mixed (for
        video: reliable key frames, unreliable rest) data transmission
-   Create application protocols on top of the MLTP for messaging, file
    transfers, audio/video, etc.
-   Write a Haskell model implementation and extend the test framework to
    include MLTP and the application protocols.
-   Implement the protocols in Rust.

# Shift to HLAPI

HLAPI: High Level API for Tox.

-   Rewrite common logic from Antox and Antidote in an implementation directly
    above the protocol implementation.
-   Adapt TokTok or Antox to use the HLAPI.
-   Adapt Antidote to use the HLAPI.

# Desktop support

-   Build a new desktop client or adopt an existing one and adapt it to use
    the HLAPI.

# Additional features

-   Add support for stickers, location sharing, etc. to reach feature parity
    with popular instant messengers.

# Distributed file system

-   Build a distributed file system (or more abstractly, a data store) on top
    of Tox friend connections and multi-device support. The main challenge
    here is that most nodes are untrusted.
-   Implement improved profile and message log synchronisation and offline
    messaging on top of the distributed data store.

# Distributed computation

-   Build a distributed untrusted computation system using the distributed
    data store as both permanent and temporary storage.
-   Implement message log search in the distributed computation system.

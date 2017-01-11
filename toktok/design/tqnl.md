---
layout: default
title: Tox Quick Name Lookup Spec
authors: grayhatter
first proposed: 2016-10-07
last revision: 2017-01-10
revision: 0
permalink: design/tqnl.html
---

Revision 0.

## Goals

Currently Toxcore supports ToxDNS. This is a service that sits on top of the
historically insecure DNS system. With the idea in mind that Toxcore should be
a ‘security first’ project; using DNS as a back-end/platform/service, is
problematic. That said, while it’s true that knowing, using, and understanding
the intent behind a ToxID will make your use of Tox more secure, the primary
connection to a friend being a ToxID is a non-starter for most users. An easy
and human-readable name-to-ToxID resolution system/service is clearly required
from the Tox Messenger. The primary goal of Tox Quick Name Lookup is replace
ToxDNS with a more secure, and simpler to maintain/implement system. Secondly,
we aim to provide an API that allows clients to quickly, simply, and securely
(without the need to create or manage the security themselves) interface with
servers of their choosing, without the need to use a 3rd party system/API.

## Requirements

1.  The system must be able to resolve any byte-string to a ToxID.
2.  It must be able to connect to, and resolve any ‘name’ without leaking
    information (who’s the real info requester, the name of the ToxID
    searched, or the real ToxID itself).
3.  Under expected/default configuration it must not expose the long term
    public key of the user requesting information.

## Scope

The scope of this document is only to cover the replacement for ToxDNS. Many
other users/developers/supporters have a wish list for what TQNL could become.
But the majority is out of the scope of this revision.

### In scope

1.  Create and expose an API that clients can use for Toxcore to make and
    respond to string-to-ToxID queries.

### Not in scope

1.  Distributed name resolution
2.  Signed name resolution
3.  Verified name resolution
4.  Relayed name resolution
5.  Name Server Lookup (method to find an unknown/new name-server)

## Technical Design

-   TQNL will sit on top of the DHT API, and will use DHT.c functions along
    with the corresponding `net_crypto.c` and `crypto_core.c` to connect to
    servers provided by the user.
-   Users will call the `tox_function()` with the server lookup information
    (IP or hostname, Port, Public Key), and the string to be queried.
-   Servers will be specified by a Domain name, or IP address, a port, and a
    public key.
-   TQNL will connect to the server, deliver the query packet, and then store
    the server + query information in an array.
-   The query packet to the name-server will be encrypted with the DHT key,
    and the server key.
-   The query packet to the name-server includes the DHT public key, the
    string to be queried, and a nonce.

The nonce exists to identify which packet the server is responding to, as well
as prohibit replays, or pre-generation.

-   The server may or may not respond to the query.
-   If the name-server does respond to a query, it’ll respond to the sending
    peer with the nonce, followed by either: a failure code, or a valid ToxID
-   The sending peer will select a timeout to resend query packets, and will
    try to resend the same query with a new nonce after the timeout.
-   The sending peer will select a number of retries, and will send the query
    packet that number of times plus 1 additional for the first attempt.
-   After receiving a valid response to its query, Toxcore will generate a
    callback to the client with either a ToxID, or an error code.
-   At this point Toxcore will drop that pending query from its list of
    pending queries.

## Future Plans

This specification is tentative, and intended to provide the lowest level of
support. Ideally we'll be able to enhance TQNL with additional feature sets
improving usability, and security.

-   Expand API to allow for registrations, editing existing registrations, and
    deleting IDs
-   Add support for name-server lookups. (The implementation for this is
    undecided)
-   Support for high confidence name lookups (Allow tqnl to search for the
    name across many services, if all return the same ID, you have better
    confidence that the ID is trustworthy)
-   Support for restricted domain lookups. (Allow clients to restrict the
    servers queried for certain names. As of r0 the client MUST handle this
    internally)

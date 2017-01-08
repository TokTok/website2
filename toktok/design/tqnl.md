---
layout: default
title: Tox Quick Name Lookup Spec
permalink: design/tqnl.html
---

## Tox-Named

### Goals

Currently toxcore supports ToxDNS. This is a service that sits on top of the historically insecure DNS system. With the idea in mind that toxcore should be a ‘security first’ project; using DNS as a backend/platform/service, is problematic. That said, while it’s true that knowing, using, and understanding the intent behind a ToxID will make your use of tox more secure, the primary connection to a friend being a ToxID is a non-starter for most users. An easy and human-readable name to ToxID resolution system/service is clearly required from the Tox Messenger. The primary goal of Tox-Named is replace ToxDNS with a more secure, and simpler to maintain/implement system. Secondly, we aim to provide an API that allows clients to quickly, simply, and securely (without the need to create or manage the security themselves) interface with servers of their choosing, without the need to use a 3rd party system/api.

### Requirements

1. The system must be able to resolve any byte-string to a ToxID.
2. It must be able to connect to, and resolve any ‘name’ without leaking information (who’s the real info requester, the name of the ToxID searched, or the real ToxID itself).
3. Under expected/default configuration it must not expose the Long Term Key (LTK) of the user requesting information.

### Scope

The scope of this document is only to cover the replacement for ToxDNS. Many other users/developers/supporters have a wishlist for what tox-named could become. But the majority is out of the scope of this revision.



In scope

1. Create and expose an API clients can use for toxcore to make and respond to string-to-ToxID queries.

Not in scope

1. Distributed name resolution
2. Signed name resolution
3. Verified name resolution
4. Relayed name resolution

### Design

- Tox-named will sit on top of the DHT API, and will use DHT.c functions along with the corresponding net_crypto.c and crypto_core.c to connect to servers provided by the user.
- Users will call the tox_function() with the server lookup information, and the string to be queried.
- Servers will be specified by a Domain name, or IP address, a port, and a public key.
- Tox-named will connect to the server, deliver the query packet, and then store the server + query information in an array.
- The query packet to the name-server will be encrypted with the DHT key, and the server key.
- The query packet to the name-server includes the DHT public key, the string to be queried, and a nonce.

The nonce exists to identify which packet the server is responding to, as well as prohibit replays, or pre-generation.

- The server may or may not respond to the query.
- If the name-server does respond to a query, it’ll respond to the sending peer with the nonce, followed by either: a failure code, or a valid ToxID
- The sending peer will select a timeout to resend query packets, and will try to resend the same query with a new nonce after the timeout.
- The sending peer will select a number of retries, and will send the query packet that number of times plus 1 additional for the first attempt.
- After receiving a valid response to its query, toxcore will generate a callback to the client with either a ToxID, or an error code.
- At this point toxcore will drop that pending query from its list of pending queries.

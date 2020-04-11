---
title: Tox now works through Tor (and other proxies)
id: 349
categories:
  - Tox Core
date: 2014-08-15 14:09:02
tags:
---

Toxcore can now function on TCP only as a fall back when UDP can't be used.

There were many people who requested Tor support so I implemented basic SOCKS5 proxy support for toxcore TCP connections.

To use Tox with Tor, set your Tor proxy address in your Tox client proxy settings and disable UDP (UDP connections bypass the proxy and must be disabled if the proxy is used for privacy and not simply for accessing the internet).

This will make toxcore use Tor for all connections.

As of now I'm pretty sure the only possible toxcore leak (if UDP is disabled) would be if a DNS name is passed to the tox_bootstrap_from_address() function it would not be resolved using Tor. (I'm pretty sure all the main clients only pass ip addresses to this function though.)

Clients are not Tor safe yet and bypass the proxy for any non toxcore related network communications (DNS names for example) which means it should not be used in situations that require serious anonymity yet (unless you use something like iptables to plug the leaks).

Happy Anonymous Toxing.

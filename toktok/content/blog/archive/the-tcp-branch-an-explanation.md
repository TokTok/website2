---
title: "The TCP branch: An Explanation"
id: 270
categories:
  - Tox Core
date: 2014-05-20 15:21:56
tags:
---

The TCP branch was merged 2 days ago breaking all compatibility with older clients, yesterday, a major protocol change was introduced, if you run a bootstrap node or a client with a core version older than https://github.com/irungentoo/ProjectTox-Core/commit/e85feb8a3db42a0285b940a090c60102fae50374 then please update it.

So, what does the TCP branch bring to Tox?

Tox now supports using TCP relay nodes to connect to friends meaning those behind unpunchable NATs should now be able to connect.

The protocol has been revamped to be better and safer. Packets are now generally smaller in size and the protocol used to transport the data securely has been redesigned in order to prevent possible evil relays from interfering with the connections between you and your friends. The protocol also now supports padding which can be used to obscure the size of the data transmitted.

Tox can switch between relayed TCP and direct UDP connections seamlessly meaning if you initially connect to a friend with a TCP relay and then for some reason 5 minutes later the hole punching works and the direct UDP starts working Tox will automatically switch from one to the other without the users noticing anything.

This also means that Tox can switch between different relays if one used to connect to the other peer goes offline. Again, without the users noticing anything.

There have also been some fixes and optimizations to increase the initial connection speed meaning you should see your friends come online faster than before.

I will warn you though that group chats and A/V have not yet been updated to work with the TCP so issues with them right now are perfectly normal.

If you try Tox but can't connect to anyone make sure you are using an updated core and bootstrapping into the network with an updated node, (https://wiki.tox.im/Nodes)

In other news Google Summer of Code has officially started which means the amount of work done on Tox will increase.

This update brings us closer to our goal of creating the best skype replacement that works everywhere while being both secure and simple to use.

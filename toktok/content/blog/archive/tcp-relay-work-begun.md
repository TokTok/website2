---
title: TCP Relay Work Begun in Tox Core
id: 77
categories:
  - Tox Core
date: 2014-03-13 11:46:51
tags:
---

irungentoo, our glorious leader, has begun writing the code for the TCP relay servers that will help those who are behind strict NATs and/or poor UDP handling, like those on mobile networks. You can view the commit [here](https://github.com/irungentoo/ProjectTox-Core/commit/2bb5e2c08488d4f43c964fcb92629dca2d294e7a), but as the commit name suggests, it's a work in progress.

To those who have unable to connect to other users, this commit is the beginning of your saving grace. With TCP relay servers, you'll be able to connect to the Tox DHT network without having to mess with port forwarding, or anything else. Stay tuned!

---
title: Toxic and Threads
id: 82
categories:
  - Toxic
date: 2014-03-13 14:38:36
tags:
---

Everybody's favorite CLI client now utilizes threads for both Audio and the separation of Curses and Tox. This means that file transfers will be quicker, CPU usages should go down (after some optimizations), and everything should run smoother.

Before, Curses and Tox were refreshed on every cycle, which was a bit too much for curses. Drawing to the screen takes quite a bit of time, and doesn't need to happen as often as possible.

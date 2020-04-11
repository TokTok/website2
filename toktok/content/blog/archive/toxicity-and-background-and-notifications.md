---
title: Toxicity and background and notifications
id: 179
categories:
  - Toxicity
date: 2014-03-25 23:41:53
tags:
---

A lot of work is being done on Toxicity recently, one of which is [signed commits](https://blog.libtoxcore.so/128/jenkins-ci-and-signed-commits)! There was a small hiccup in getting used to it, but from now on everything should be nice and trustable. There's also a lot of under-the-hood refactoring happening, cleaning up messy code and such, better for developers.

The reason for this post, though, is the addition of background running and notifications. Currently Toxicity is using a max 10 minute timer (by iOS) to allow apps to utilize background threads while the app isn't running in the foreground. This allows the app to not completely shutdown and restart Tox core every time you switch out of the app! Right now tox_do has a bit of a bigger interval in-between, but users should still be warned about battery drainage.

As a result of this background servicing, notifications were possible to add, using simple UILocalNotifications, for incoming messages. It shows the sender, and which groupchat it came from provided it wasn't a friend's message. There's a bit of work to be done still. This mainly includes switching to appropriate chat windows once the user opens the app via notification.

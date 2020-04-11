---
title: "Tox, packaging, and versions"
id: 583
categories:
  - Tox Core
  - Tox Repositories
date: 2014-11-23 21:10:04
tags:
---

As many of you know, Tox follows a pretty fun rolling release style alpha development cycle where a lot of code changes and improves very rapidly without any set pace.
<!-- more -->
Because of the oh so fast pace of this we spent a good deal of time designing a cross-OS compilation system that churns out the latest copy of Tox no more than 5 minutes after a commit was pushed ready to be tested by you, our lovely users.

Because we churned out builds so fast we knew we needed a way to make sure you always ran the latest version of Tox + your favourite client so you could enjoy all the new features and bug fixes as soon as is possible. As such we statically linked and packaged the Linux clients sitting in a repo we run, designed autoupdaters for our Windows clients, and spent a good deal working on efficient ways to update on OS X seamlessly.

While this system works out wonderfully for those users who pull the tox clients from this repo or use our autoupdaters, there still exists the group of users who use distribution created packages. The problem with distro packaging is that for rolling release software it reduces and slows our ability to get the latest features or security fixes directly in to your hands.

Our issue with distro packaging at this stage is simple, we don’t want our users to miss out on features or critical security fixes at the hand of slower packagers or the bureaucratic cycle/freeze model that some Linux distributions implement(looking at you, Debian).

Why is this post happening now of all times? Lemmie tell you a little story.

A few days back a user entered our IRC channel asking for help joining group chats, he explained that he just ran apt-get update/upgrade and installed the latest Tox package and he wasn’t getting invites to the chat at all. After a bit of questioning I realised he used an obscure Ubuntu fork aimed at older systems that shipped a copy of utox that was almost a month old. It turns out he was attempting to join the new audio group chats with a super old client. After he added our up to date and current repositories he had no more issues.

If you don't think this mess is still an issue, [I encourage you to take a look at all the changes that have happened to toxcore alone.](https://github.com/irungentoo/toxcore/compare/master%40%7B30day%7D...master)

About versioning, it won't happen while we're in our rolling release alpha build cycle.

&nbsp;

Happy Toxing, Sean

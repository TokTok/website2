---
title: Toxic release v.0.5.2 (and groupchat issues)
id: 459
categories:
  - Toxic
date: 2014-10-03 01:49:23
tags:
---

Major changes include:

*   Ability to set an avatar. You can set it in the config file (see the [example config file](https://github.com/Tox/toxic/blob/master/misc/toxic.conf.example)) or with the command '/avatar &lt;path&gt;' (Note: This command will only set it temporarily until you restart your client).
*   Previous chat history is now loaded when you open a chat window.
*   Chat log files are now renamed when a contact changes their name instead of creating a new log file and leaving the old one.
*   Resolved a performance issue where idle CPU usage was unacceptably high when compiled with sound notifications.
*   Some small UI changes that need no explanation.
*   Lots of important bug fixes
The currently ongoing toxcore groupchat rewrite broke Toxic's implementation of groupchats. Any version of Toxic older than **c56c6cc2** will behave very strangely with the new groupchats (this may be temporary).

Also, as of writing this GroupBot is up to date with the latest core, so if you can't get an invite from him then you need to update your toxcore.

tldr; update everything

---
title: "μTox updates [0.0.9]"
id: 315
categories:
  - μTox
date: 2014-07-24 13:46:51
tags:
---

I will now be writing a blog post for every weekly μTox update, including a list of new features and bug fixes. This week's update includes:

**New features:**

*   Experimental Android support, includes audio calling. Get the .apk [[here]](https://jenkins.libtoxcore.so/job/uTox_android/lastSuccessfulBuild/artifact/future.apk)
**Bugfixes:**

*   Fixed inline PNGs having red/blue channels swapped when saved
*   Shift+HOME/END in text boxes now behaves correctly
**Other:**

*   The core A/V protocol has changed: A/V is not compatible with older versions of uTox
*   Update 0.0.8 introduced a new major feature, allowing uTox users select a section of their desktop and send it as an inline image
*   Some people have been asking how the μTox updater for Windows works. You can read about how it works [[here]](https://github.com/notsecure/utox-update)
*   Jenkins now builds 32-bit builds of uTox for Linux
*   uTox for Linux no longer relies on Xft, instead it uses Freetype directly
*   uTox for Linux now has a --version command

---
title: "μTox updates [0.1.1]"
id: 339
categories:
  - μTox
date: 2014-08-04 19:11:19
tags:
---

**New features:**

*   Ability to drag and drop files to send them (for Windows, Xlib version already had this)
**Bugfixes:**

*   Fixed lag issue (Xlib)
*   Fix possible file transfer issue ([contribution by doughdemon](https://github.com/notsecure/uTox/pull/189))
*   File transfers are now only marked as complete when the receiver confirms that the file is received completely (fixes possible issue with friend disconnecting as the file transfer nears completion)
*   Some toxcore bug fixes
**Other:**

*   Audio and video are now decoded on a separate thread for each call, fixes an issue with the decoding being slow and causing the main thread to get stuck in its receive loop
*   Set thread stack size (Xlib) - reduces memory usage ([contribution by doughdemon](https://github.com/notsecure/uTox/pull/192))
*   Option to build without DBUS ([contribution by doughdemon](https://github.com/notsecure/uTox/pull/193))
*   Enabled pixel subrendering for text (Xlib)

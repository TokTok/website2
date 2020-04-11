---
title: "μTox updates [0.1.2]"
id: 344
categories:
  - μTox
date: 2014-08-11 16:44:17
tags:
---

**New features:**

*   Pasting inline images from the clipboard (paste an image and it displays in the chat) ([code for Xlib by blucoat](https://github.com/notsecure/uTox/pull/200))
*   Search bar to search friends list ([contribution by CowInAPie](https://github.com/notsecure/uTox/pull/210))
*   Better viewing of large inline images: horizontal scrolling by dragging the image when it is zoomed (unzooming now takes a doubleclick)
*   Xlib: pasting files from a file manager to send them ([code by blucoat](https://github.com/notsecure/uTox/pull/200))
**Bugfixes:**

*   Fixed some clipboard related issues (mostly middle-click issues)
*   Xlib: set WM_CLASS for better behaviour with some window managers
*   Fixed a possible segfault in the DNS code
**Other:**

*   Updated the bootstrap [Nodes](https://wiki.tox.im/Nodes)
*   Changed the font used in the chat (now matches the font used in edit boxes)
*   New updater features (requires redownload), get it [here](https://wiki.tox.im/Binaries)
*   Updater renamed to "runner" so that it does not require admin permissions (...)

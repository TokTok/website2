---
title: "New Milestone Reached: Audio Calling on Windows"
id: 280
categories:
  - Google Summer of Code
  - Tox Core
date: 2014-05-31 15:41:45
tags:
---

Yesterday a new milestone was reached, winTox (Windows only GUI) now supports audio calling. winTox is the first non command line client and the first Windows client to support audio calling.

To try it out just grab one of the latest winTox builds from: https://wiki.tox.im/Binaries

Make sure your friend has a client that supports audio calling (only toxic and winTox do at the moment) then click on your friend and press the call button near the top right corner or accept the incoming call with the same button.

The audio calling part of Tox currently uses the opus codec at 64kbs for 1 channel 48khz audio. It is encrypted exactly the same way as everything else (text, files, etc..) with xsalsa20 + poly1305 and a temporary key but unlike text and audio it is sent as a lossy packet for minimum delay and because some packet loss in audio transmissions is acceptable.

Note that Tox and all its clients are still in alpha state so if you encounter any bugs or issues let us know and we will fix them.

winTox github repo: https://github.com/notsecure/winTox

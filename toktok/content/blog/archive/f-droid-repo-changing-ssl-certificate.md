---
title: F-Droid Repo Changing SSL Certificate
id: 403
categories:
  - Antox
date: 2014-09-20 09:12:09
tags:
---

**Edit:** This certificate was causing some problems as it was intended for a *.tox.im domain but the repo was on my markwinter.me domain. For now, I have reverted the certificate back to the original markwinter.me cert.

Just a quick post to let F-Droid users know that I have changed the SSL certificate. Instead of using my own cert, it will now serve a Tox one. The certificate should match
<!-- more -->
{% limg antox-tox-im-certificate.png %}
Some time next month, the URL will also change to fdroid.tox.im or repo.tox.im but I will write another post when that happens

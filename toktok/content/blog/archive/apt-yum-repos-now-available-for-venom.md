---
title: "Apt & Yum Repos Now Available for Venom"
id: 320
categories:
  - qTox
  - Venom
date: 2014-08-01 03:39:21
tags:
---

It's been a long timesince we've starting packaging Venom builds as .deb and .rpm, but they never made it into their own repository's. Today, that changes. For those of you who've wanted to install and update your Tox clients via your built-in package manager, your dream has come true.

### Apt/Aptitude (Debian, Ubuntu, Mint, etc.) 

If you want to set the repo up under Debian or any of its' derivatives, simply run `wget https://repo.tox.im/tox-apt.sh && sudo chmod +x ./tox-apt.sh && ./tox-apt.sh` in your favorite terminal and then `apt-get install venom`.
If you want to update venom, simply run `apt-get update && apt-get upgrade`

### Yum (Fedora, CentOS, RHEL, etc.) 

Simply add `https://repo.tox.im/tox.repo` to your repo list, and then `yum install venom`

---
title: Antox v0.12 released
id: 371
categories:
  - Antox
date: 2014-08-17 16:11:54
tags:
---

**Edit:** <span style="color: #000000;">There seems to be a problem of crashing when registering (both skipping and not skipping). I'd recommend not upgrading just yet and I'll try and get it fixed by the end of the week. Sorry for the wait</span>

It's been a long time since I've written a blog post for a release of Antox but I felt with the major changes in this version, it would be best if I did.

The major change in this release which may cause confusion is the introduction of an account system. When you create an account, it assigns the account a new tox id as well as its own friends list and chat logs, so that you can easily create and manage multiple identities from the same application. You just logout of one account, and login to another to swap tox id's. No hassle in dragging tox save files about. It also takes the account name and registers it on [https://toxme.se](https://toxme.se) so that others can add you using just the account name. If you don't want to be signed up on toxme, you should tick "skip registration" in the registration screen. I've taken these steps to try and make the application extremely easy to use. Regular users are used to creating accounts and having people add that account name and this is what I'm trying to emulate for tox. Hopefully others like the changes I've made and that other clients follow so that the experience is the same across all platforms.

Some other notable changes are:

*   Nicer looking tabs in the main section
*   You can now accept and reject file transfers
*   File transfer speed is now displayed
*   Better ordering and searching of the contacts list
*   The Tox ID can now be found under the 'Advanced' tab of Settings
We will soon have A/V in antox as well. The functions have already been wrapped in jToxCore and are just being proof-read as we speak to make sure it's correct. Once merged and ready, audio is the first function I want to get into antox.

**Edit: **If you tick "skip registration" an account name is still required so that multiple tox id's can be used. It uses the account name you entered as the file name for the tox save so that when you login, it loads the appropriate tox id

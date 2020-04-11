---
title: Update on the state of Tox
date: 2015-02-18 13:49:11
author: Dubslow, co. Sean
tags:
---

Hello everyone. We realize it's been a while since the last post, but a lot has happened and Tox continues to progress, so there's a lot to talk about.
<!-- more -->

##Tox core

####Core
[toxcore](https://github.com/irungentoo/toxcore) has been largely in maintenance mode, with memory leaks, logic errors and other bugs being fixed every day. Recently work has begun on implementing a [new, cleaner API](https://github.com/irungentoo/toxcore/tree/new_api) written by the [Tox4j](https://github.com/sonOfRa/tox4j) developers.

####Bootstrap daemon
As a small treat, the [boostrap daemon](https://github.com/irungentoo/toxcore/tree/master/other/bootstrap_daemon) now has systemd support, thanks to contributor [ray65536](https://github.com/ray65536). It is also available as the package `tox-bootstrapd` from our Linux repositories.

####New groupchats
Additionally, work is progressing on the complete [groupchat re-design](https://github.com/JFreegman/toxcore) and overhaul, started by [alnf](https://github.com/alnf) and currently being led primarily by [JFreegman](https://github.com/JFreegman). Features include moderation abilities and group chat persistence (!). These group chats are a long way from being ready to merge into master; however, there is now a properly [modified build of Toxic](https://jenkins.libtoxcore.so/job/toxic_linux_beta/lastSuccessfulBuild/artifact/toxic) for Linux available with the changes.

You can also download the modified Toxic by installing `toxic-beta` from our Apt and Yum repos and running ``toxic-beta``. Keep in mind that this copy is totally isolated from your existing Toxic install to prevent issues.

Please be aware that this is experimental testing code that will not work with the regular Tox network until we've finished it and merged it with master. You can follow development on the #tox-groupchats IRC channel on Freenode.

#Audio filtering and echo cancellation

It's been around for a few months now, but [uTox](https://github.com/notsecure/uTox) has had audio filtering, provided by [code](https://github.com/irungentoo/filter_audio) from [WebRTC](https://code.google.com/p/webrtc/). [qTox](https://github.com/tux3/qTox) now supports it as well.

####Experimental echo cancellation
Recently though, [irungentoo](https://github.com/irungentoo) (project founder and lead developer, in case you needed reminding :) ) has created [some patches for OpenAL](https://github.com/irungentoo/openal-soft-tox) that allow for cancelling speaker echoes from your microphone's sound input, a necessary feature for using a microphone without headphones or earbuds. uTox quickly put that to use, and qTox gained the same ability yesterday. Note that, if you compile these clients yourself, you will need to link against the patched version of OpenAL to enjoy echo cancellation. The official builds of both qTox and uTox are both built that way, and if you need to you can try using the [OpenAL builds](https://jenkins.libtoxcore.so/search/?q=openal) on [Jenkins](https://jenkins.libtoxcore.so/) used for qTox and uTox.

Currently echo cancellation is considered experimental, and Tox is seeking testing and feedback from users (on IRC or [reddit](https://reddit.com/r/projecttox), for example) about how effective it is. If testing demonstrates that it is working properly, the patches will be submitted to the [OpenAL upstream](https://github.com/kcat/openal-soft) for merging.

##qTox progress
Besides continual minor improvements, qTox has gained the following major features.

####New chatform
Over the last several months, [krepa098](https://github.com/krepa098) had been working on a complete rewrite of qTox's chat form, and we're happy to say that it was finally merged into master in the last week (over 4000 new lines of code!). Users should see significant reductions in memory and CPU usage (though some problems still exist), as well as being much prettier and easier to use. Copy and pasting in particular had been a big issue that should be pretty much solved, and there are some nice little animations (such as the typing notification).

####Local file encryption
Additionally, a fair bit of work (no where near as much as the new chat form required) was put into fixing the local file encryption and its interface in qTox, and that work was merged roughly two weeks ago. Users can now password protect their profile to safely transfer their profile to other computers, or even public computers. (Be sure to delete your profile when you leave a public computer!)

####Compact contact list
Finally, a lot of people probably love (or perhaps are unaware of) the new [compact contact list](http://i.imgur.com/tmX8z9s.png) option that qTox has, thanks to [lumirayz](https://github.com/lumirayz).

####OS X
A note for Mac OS X users: We pushed a number of major changes that totally reworked how the app works. Because of this, many improvements like Qt 5.3 -> 5.4 mean updating it normally will break. Please be aware that this update includes a new icon that you may not be used to, and has many visual improvements.

In order to update cleanly you'll need to re-download qTox and drag the app in to your applications folder like usual. Your profiles won't be harmed or modified in any way.

##uTox progress
uTox has been slowly receiving incremental improvements, primarily in the interface. For more details, you can check out the [commit log](https://github.com/notsecure/uTox/commits/master) or [irungentoo's Twitter](https://twitter.com/irungentoo).

##Google Summer of Code

Like last year, Tox is applying to be a participating organization in the Google Summer of Code. Check back soon for updates.

##Android

As mentioned above, work continues on Tox4j, the replacement Java wrapper for core, and when that's complete a new Android client will be developed from scratch on top of it. Another vague possibility is that qTox can be ported to Android, since it's written in Qt 5; [tux3](https://github.com/tux3) (qTox's primary author) has recently started the very basic framework of such a port, but it is currently significantly less useful than the old Antox.

A fork of the old Antox is currently being maintained against the Tox4j work in progress. You can download it by joining the Google Play beta or adding our F-Droid repo. Details on this are [here](https://wiki.tox.im/Binaries).


##Website improvements

We've been continuously working to improve and refine the experience for new users by making things simpler and more straightforward. With this, we're currently working on a new site for tox.im and a new downloads page until the site is complete.

You can check out progress on the new site [here](https://beta.tox.im) and check out the progress on the new temporary downloads page [here](https://download.tox.im).

###ToxMe improvements

By popular demand we've added a reverse lookup API to ToxMe. This allows people to look up DNS Discovery names using just a Tox ID as long as the ID they want to lookup isn't marked private. It is documented [here](https://github.com/Tox/toxme.se/blob/master/api.md).

##Repository improvements

If you use our RPM repo you may have suffered some issues downloading Tox due to an old revoked PGP key getting stuck in the signing process. We've gone ahead and fixed all the issues associated with that and ensured that it works perfectly.

Supporting our new downloads page, we've gone ahead and made the qTox packages automatically configure and setup the repo on your system by just installing the deb. This means for normal users all you'll have to do is click download and Ubuntu software center will pop up to automatically set everything up and ensure you always have the latest and greatest copy of qTox. If you had the repo installed before it may cause conflicts in apt. Please remove it by running ``rm /etc/apt/sources.list.d/toxrepo.list`` and it'll take care of itself automatically.





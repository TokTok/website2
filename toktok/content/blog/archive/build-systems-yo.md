---
title: "The joys of build systems, and the future of Toxic"
id: 87
categories:
  - Toxic
date: 2014-03-17 01:19:32
tags:
---

In a time long ago Tox used cmake.

Cmake was first purely because it matched our goals, sort of. It provided a nice run everywhere interface that the average person who compiled the then build only Tox could use without issues. Cmake wasn't all golden though, maintaining it was a sea of unneeded complexities and overkill, too much for the average developer to deal with for the size of Tox. While this wasn't a major issue, one developer took it on himself to switch to autotools, with the promise that he'd maintain it.

 Toxic starts to look all pretty

Our first client, the API test, was nTox. Not long after, Toxic followed. Toxic was pretty client in core, composed of a couple files and real ui, development on it skyrocketed. It wasn't long till Toxic was a fully featured client, almost like the shiny new GUI clients in development. I had a crazy idea that ended up perfect with the timing, moving Toxic from a part of core to its own repo, Tox/toxic. When this happened, autotools were inherited over, as they were an accepted part of core.

That's cool, what about the future of Toxic?

And now, the fun part. A couple days ago IRIXuser and myself were talking about the GSoC project on a replacement build system, we wanted something smooth and easy, without unneeded complexities. (We're a dozen files and headers, after all.) We stumbled upon [BSDBuild](http://hypertriton.com/bsdbuild/ "BSDBuild"), a simple build system based off 4.4BSD make libraries. A bit of look in to it and we discovered that it was easy. Like _very easy_. The entire system for end users was a configure that someone editing it generated and a Makefile made by hand. This was something our iOS developer could understand without a learning curve, with a quick glance.

4.4BSD? iOS? But I use Linux!

Before I go any further, I'll take a moment to explain how the existing build system works, what users see, and how BSDBuild works. GNU autotools is composed of about 7 separate binaries and 8 files, though for this I'll focus on just the ones Toxic used. To compile Toxic, the entire set of autotools binaries is required, along with a GNU make. A user installs all of these and runs autoreconf -i to generate configure. This process takes around 13 seconds. Afterwards the user runs the configure, making the compiled Makefile in the process. This process takes about 12 seconds. Afterwards the user runs make and make install, building the program. BSDBuild is based off 4.4BSD make libraries, built around a standard POSIX bourne shell and makefile. The developers provide the configure and Makefile, who are interpreted, and not system specific. To compile BSDBuild Toxic, a user installs zero extra files, as the configure is provided. a user runs the configure we provide, generating a Makefile.config. This process takes around 4 seconds. Afterwards the user uses make to compile and install like normal.

What could be so wrong with GNU autotools?

The design of autotools is an over complex one, composed of m4, marcos, and dozens of files and commands. This results in a slow and bloated install process for users, along with something that even developers who have been using it _for decades _[still run in to undefined behavior](http://esr.ibiblio.org/?p=1877 "still run in to undefined behavior."). The result of this means that things like --disable-av being [broken](https://github.com/Tox/toxic/pull/100) go unnoticed, without support for things like --enable-debug (A BSDBuild specific flag we implemented with ease). From an end user perspective, this means a configure process that takes 9 times longer and lacks features, requiring more software installed.

But BSDBuild couldn't be perfect, I mean you **did** drop cmake!

One of the major issues with BSDBuild is that support for checks (REQUIRE(toxcore) can't be done without making them first. Thankfully, the design of the pm file used for a check is so simple, we had toxcore, toxav, sodium, and openal done in half an hour. Since configure is provided by us, this means no extra work for the end user. Now, BSDBuild does have some other side effects, developers editing either configure.in or Makefile (The entire BSDBuild) do need to have BSDBuild installed, in order to run the mkconfigure command.

BSDBuild doesn't work on GNU/HURD, right?

Wrong! Something to consider is that while BSD Makefiles run on GNU make, GNU Makefiles may not run on BSD make. While GNU autotools produce GNU Makefiles, the POSIX compliant BSDBuild files are more supported on more platforms than the autotools equivalent, going as far as supporting making Visual Studio and DOS Watcom projects, despite Toxic not running on Windows.

Reactions

Reactions to BSDBuild have been mixed, while the autotools maintainer has made some rather ignorant remarks about the compile process with BSDBuild, stating that perl is required (It is not), we do forgive him, BSDBuild isn't a well known system. A few people have stated that the work was a bit of a waste of time, autotools is working. We disagree with this ideology, something like this might seem trivial in the short term, though the ease of use will aide future Toxic developers and helping them focus on the code, and not the build system.

The last group of people have been supportive, these have generally been users of more popular and more exotic systems, from praising the easy debugging, to the following:

> &lt;rhaps0dy&gt; so, uhm
> 
> &lt;rhaps0dy&gt; where do I get the BSDBuild version of libtoxcore?
> 
> &lt;LordAro&gt; rhaps0dy: there isn't one
> 
> &lt;LordAro&gt; only toxic has a bsdbuild build system so far
> 
> &lt;LordAro&gt; and that's not in master until people can be convinced that it's "a good thing" (tm)
> 
> &lt;rhaps0dy&gt; :/
> 
> &lt;LordAro&gt; (which it is)
> 
> &lt;rhaps0dy&gt; I agree lol

Why isn't this in master yet?

With a couple of the reactions coming from other developers who I do like, I would greatly like them to try the system out, explore it a bit, get some honest feedback. As of now, this has not happened, though I do try to push them whenever I can. As well, being new, the new build system may have a couple of quirks that we would really like to get out first. When the time comes I'll merge the branch in to master, just not right now.

I encourage you to try it now, tell me what works, what doesn't work, and most of all, your thoughts on this pending switch.

Testing it is easy, just do a new clone of Toxic, specifying the bsdmake branch: `git clone https://github.com/Tox/toxic -b bsdmake`

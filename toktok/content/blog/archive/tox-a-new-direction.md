---
title: "Tox: A New Direction"
id: 193
categories:
  - Antox
  - Poison
  - Tox Core
  - Toxic
  - Toxicity
  - Venom
date: 2014-03-31 20:05:26
tags:
---

We realized after many people complained that the way we currently use to develop Tox is wrong. C is the worst language to develop a lightweight skype replacement in. Compared to modern languages like C#, JavaScript and Java, C is an old and deprecated language only used by old men with long beards who refuse to update their old MSDOS machines to the much better and modern Windows 8.1\. In order to become a popular application, Tox must be built with modern tools and not languages like C that belong in a museum.

We have decided to rewrite Tox in JavaScript, this will enable us to make use of advanced web frameworks and base our application on advanced libraries such as WinJS and Node.js in order to create the best user experience possible.

We have listened to those who say we have been re inventing the wheel and pledge to never do it again. As such we will only use proven libraries for the functionality Tox needs.

Tox will now use i2p for the peer finding, this will also enable you to connect anonymously to other peers. For the networking we will use the very popular C++ Boost libraries to boost our application to a next level of performance and portability. Instead of NaCl (a relatively unknown crypto library) Tox will use OpenSSL, the standard library for secure communication on the internet. Instead of stupidly using the audio and video encoders and decoders directly, Tox will now use WebRTC for audio and video communications. Because of this, Tox will now be compatible with web browsers. Instead of the relatively new and untested ECC cryptography, Tox will now use good old RSA and AES for encryption. We will now use 512 bit RSA keys that are much stronger than the weak 256 bit ECC keys Tox uses right now. Tox will now use namecoin so that everyone can have a unique username which will increase ease of use by large amounts and solve one of the biggest issues that people have been having with current Tox.

A huge issue that current Tox has is that it fails to sync conversations across devices, we will solve this by using facebook. Using facebook we can securely store the contents of all conversations and your contacts in a location that can be accessed using an extremely secure https connection from anywhere. This will also prevent murderers, terrorists, racists, pedophiles, privacy activists and other people that could hurt the image of Tox from using it for extended periods of time.

In order to enhance the user interface, the official Tox clients will include buttons so that users can share the contents of their conversations on free social networking websites such as reddit and twitter.

A significant amount of resources will be spent to create a Tox client that works entirely in the cloud. Tox will now be usable by anyone with a web browser and a facebook account. We now truly see that the browser is the future and that applications running natively on the desktop will soon disappear completely. We had previously though web clients could not be secure but realized that we were wrong. Encrypting things browser side with JavaScript served from a central web server is much more safe than using unsafe languages like C.

To finance our operations, some advertisements will be added to every Tox client, the only way to disable them will be to compile Tox manually from source which will be very hard to do because we plan to soon remove the bloated build systems from every client.

I must also warn you that we will not be using git or github to develop this new version of Tox. Git is a creation of Linus Torvalds, a very backwards man who thinks that object oriented programming is very bad and who hates modern safe languages like C++ and Java. Since we don't agree with him, we cannot in good faith use anything he is the CEO of. Therefore and also to promote synergy between our many developers, we have also decided to migrate our version control system to CVS. CVS has the advantage of forcing people to talk more about their pull request, thus streamlining our communications. We are sure this paradigm shift will help us push the envelope on Tox development.

We understand that this is a huge change for Tox however we believe this is for the best.

Thanks again for your continued support,

Project Tox.

**NOTE: This was posted on April 1 and as such should not be taken seriously.**

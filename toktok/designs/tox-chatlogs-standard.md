---
title: Tox Chat Logs Standard Specification
permalink: designs/tox-chatlogs-standard.html
authors: SkyzohKey
first_proposed: 2018-02-01
last_revision: 2018-02-01
state: DRAFT
revision: 13
---

Revision {{ page.revision }}.

# [DRAFT] Tox Chat Logs standard

This whitepaper is about defining a standard for writing/reading a Tox chat logs file. The goal of this whitepaper is to make clients able to share a single log file for each contact, making them **inter-operable**, which seems important to me and I feel this would be better handled as a ToxCore class.

## Cases studies

Here I'm going to compare chat logs files from every Tox client that supports this feature (respectively _qTox_, _uTox_, _Toxygen_, _Toxic_, _IsoToxin_, _Antox_, _Antidote_, _Ricin_ and _The Universal Tox Client (Konv))_ in order to build a real specification that'll arange everyone there.

### qTox

qTox doesn't has a chatlogs format, instead it uses a simple database (sqlite iirc) to store messages with values like sender, recipient, timestamp, etc.

### uTox

uTox doesn't has a chatlogs format readable in plaintext, instead, it uses a binary file format with control characters to show it it got an ACK on the message, and stuffs like that.

### Toxygen
  _TODO:_ Research and analyze file format for Toxygen.

### Toxic

Toxic does have chatlogs, they are only keeping track of messages and login/disconnect of contacts. A Toxic chat log file looks like:

```
YYYY/MM/DD [HH:MM:SS] NICKNAME: MESSAGE
YYYY/MM/DD [HH:MM:SS] * NICKNAME has come online
YYYY/MM/DD [HH:MM:SS] * NICKNAME has come offline
```

### IsoToxin
  _TODO:_ Research and analyze file format for IsoToxin.

### Antox
  _TODO:_ Research and analyze file format for Antox.

### Antidote
  _TODO:_ Research and analyze file format for Antidote.

### Ricin
Ricin didn't had any logs related feature, by design. Thus it has no chatlog format.

### The Universal Tox Client (Konv)
Does implements & uses that format.

## Specification

Based on the previous studied cases, we should now be able to define a single, simple format that is both readable by users, while remaining easy to implement. We also need to define a clear case of how to encrypt those chat logs, in order to keep them secure from evesdropper.

### File name

A chat log file is meant to contains logs between self (the user) and a contact. File name is hashed using `sha256` in order to avoid leaking contacts public key, which could allow an attacker to construct a social graph of your contacts. Thus, it **MUST** be named like the following:

```php
$HOME/.config/tox/logs/{sha256(pubkey)}.log
```
  
### Conventions & variables

Let's define some variables before we can get started.
  
|               | Type     | Usage                                                                                                    | Default |
|-------------: | :------: | :------------------------------------------------------------------------------------------------------- | ------: |
|**{username}** | _string_ | Defines an username.                                                                                     |         |
|**{toxid}**    | _string_ | Refers to the user ToxID, self.                                                                          |         |
|**{pubkey}**   | _string_ | Refers to the recipient pubkey.                                                                          |         |
|**{message}**  | _string_ | The message that has been sent/received.                                                                 |         |
|**{time}**     | _time_   | Defines a UNIX timestamp.                                                                                |         |
|**{sent}**     | _bool_   | 1 = message sent. 0 = not sent.                                                                          | 0       |
|**{read}**     | _bool_   | 1 = message read. 0 = not read.                                                                          | 0       |
|**{type}**     | _bool_   | S = Sent message. R = Received message.                                                                  |         |
|**{length}**   | _int_    | Placed in front of another value, it represents the length of that value. Used to verify data integrity. |         |

A variable **can** be marked as optional by specifing a `?` at the end of the var name.  
_ie. `{username?}` marks the username as optional._

The `\n` characted denotes a new line.

Now that we have defined some variables we can define the formats for each line we will store. These formats needs to be enoughly simple to parse (using regex i guess) while remaining easy to understand for an end-user reading it's chatlogs file via a text editor.

### Global format

Our formats can all be summarized like the following:

**Proto:**
```
{token}<{meta}>[{arg}][{arg}]
```

The format can even be extended by adding tokens and following the format.

ie. One could add something like birthdays lines:
```
$<{type}>[{username}][{birth_time}]
```

### Normal message

**@token**: `!`

We keep track of the **{username}** cuz' name changes are sometimes a relevant part of the conversation and are part of the context.

**Proto:**  
```
!<{type}:{read?}:{sent?}>[{time}][{length}:{username}][{length}:{message}]\n
```

**Real world example:**
```
!<S:1:1>[1487528202][9:SkyzohKey][28:This is a cool sent message.]
!<R:1>[1487528350][8:DumbBoy][27:Yeah, this one is cool too!]
!<S:0:0>[1487528565][9:SkyzohKey][34:This message is not sent nor read.]
!<S:0:1>[1487528703][9:SkyzohKey][36:This one has been sent but not read.]
```

### Action message

**@token**: `*`

**Proto:**  
```
*<{type}:{read?}:{sent?}>[{time}][{length}:{username}][{length}:{message}]\n
```

**Real world example:**
```
*<S:1:1>[1487528202][9:SkyzohKey][27:This is a cool sent action.]
*<R:1>[1487528350][8:DumbBoy][27:Yeah, this one is cool too!]
*<S:0:0>[1487528565][9:SkyzohKey][33:This action is not sent nor read.]
*<S:0:1>[1487528703][9:SkyzohKey][36:This one has been sent but not read.]
```

### Day change

**@token**: `-`

**Proto:**
```
-[{time}]\n
```

**Real world example:**
```
-[1487528202] # Day changed to Sun Feb 19 18:16:42 2017 UTC.
-[1470983714] # Day changed to Fri Aug 12 06:35:14 2016 UTC.
```

### Name change

**@token**: `@`

**Proto:**  
```
@<{type}>[{time}][{length}:{username}-{length}:{new_name}]\n
```

**Real world example:**
```
@<S>[1487528202][9:SkyzohKey-3:Skz]
@<R>[1487528350][7:DumbBoy-8:Einstein]
```

### File transfer

**@token**: `#`

**Proto:**  
**@note**: `{file_size}` **MUST** be expressed in byte.  
**@note**: `{state}` can have the following values :
- 0 = file transfer pending; 
- 1 = file tranfer completed;
- 2 = file transfer canceled.
```
#<{type}:{state}>[{time}][{length}:{file_name}][{file_size}]\n
```

**Real world example:**
```
#<S:1>[1487528202][21:some-cool-file.tar.xz][1470000] # File from self, sent.
#<R:0>[1487528350][18:sexy-girl-nude.png][2764] # File from contact, pending.
#<S:2>[1487528532][9:pthread.h][76534] # File from self, canceled.
```

### Calls

**@token**: `~`

**Proto:**
**@note**: `{state}` can have the following values :
- 0 = call pending; 
- 1 = call finished;
- 2 = call canceled.

**@note**: `{call_type}` can have the following values :
- 0 = Audio call; 
- 1 = Video call.

**@note**: `{start_time}` **MUST** be a UNIX timestamp.  
**@note**: `{end_time}` **MUST** be a UNIX timestamp.

```
~<{type}:{state}:{call_type}>[{start_time}:{end_time}]\n
```

**Real world example:**
```
~<S:0:0>[1487528350:1487528532] # Audio call pending, from self.
~<R:1:1>[1487528350:1487528532] # Video call finished, from contact.
```

## Encryption

In order to protect users, we need to encrypt the chat logs files. Encryption used is the one from toxencryptsave, as it can also encrypt random files.

**If** the user has a password we can encrypt the chatlogs files using it's password. And decrypt them using that same password. Maybe we could use something like it's ToxID as a salt.

**Else if** the user hasn't set an encryption password for it's profile, we have two solution:
[![](https://api.gh-polls.com/poll/01C58TRP5ZT8317ZH5Q5GMCWCG/Do%20not%20store%20logs.)](https://api.gh-polls.com/poll/01C58TRP5ZT8317ZH5Q5GMCWCG/Do%20not%20store%20logs./vote)
[![](https://api.gh-polls.com/poll/01C58TRP5ZT8317ZH5Q5GMCWCG/Store%20logs%20unencrypted%20(bad%20solution%2C%20dangerous%20in%20the%20worst%20case).)](https://api.gh-polls.com/poll/01C58TRP5ZT8317ZH5Q5GMCWCG/Store%20logs%20unencrypted%20(bad%20solution%2C%20dangerous%20in%20the%20worst%20case)./vote)

**CONSENSUS NEEDED HERE.**

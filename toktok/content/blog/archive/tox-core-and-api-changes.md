---
title: Tox Core and API changes
id: 158
categories:
  - Tox Core
date: 2014-03-21 00:51:05
tags:
---

Recently pushed was the api-fix branch by irungentoo. Nothing too big was changed, fortunately, but things were changed to keep consistencies and so forth. Included in this merge was:

*   No more forcing NULL terminated strings in Tox Core (meaning whatever you send to the core, it won't chop off the end forcefully)
*   Some naming changes like tox_get_friend_id -&gt; tox_get_friend_number to clear some confusions
*   Many `int`s were changed to `int32_t` for consistency and clarity
You can check all the changes [here](https://github.com/irungentoo/ProjectTox-Core/commit/5770a0e29ab35efb1ef656ab81c499635fc5fecf), as well.

All of the clients have been able to update their builds to reflect the API changes as well, amazingly fast. There might be even more changes to come to make the API even better in the future! In other news, more work is being done on TCP in the core. Can't wait for that to finish.

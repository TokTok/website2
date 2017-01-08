---
layout: default
title: Home
menu_index: 1
---

We are a **focused** effort to bring high quality privacy enhancing software
to everybody.

![TokTok Android client](static/img/toktok/chat-small.png)

# Current focus

Focus means we work on a small set of projects (one or two at a time) and
concentrate all our work on getting those projects finished completely before
moving on to the next target.

Our current focus is:

-   Create a [full specification](spec.html) of the Tox protocol.
-   Create a free [reference
    implementation](https://github.com/TokTok/hs-toxcore) of that protocol.

# Contact us

If you're interested in what we're doing, feel free to stop by on IRC in
[#toktok on Freenode](irc://irc.freenode.net/#toktok). Feel free to stick
around and discuss TokTok related topics. If you do join, please stay on topic
and respect other people.

You can file bugs against one of the TokTok projects on Github. Build status of
all projects can be viewed on this page.

<table>
  <tr>
    <th>Project</th>
    <th>Build Status</th>
    <th>Coverage</th>
    <th>Issues</th>
    <th>PRs</th>
  </tr>
  {% comment %}
  The capture line is here because of a bug in Jekyll or something. :(
  {% endcomment %}
  {% for repo in site.data.repos %}
  {% capture repo_name %}{{ repo.name }}{% endcapture %}
  {% include repository.html name=repo_name %}
  {% endfor %}
</table>

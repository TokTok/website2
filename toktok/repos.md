---
layout: default
title: Repositories
permalink: repos.html
menu_index: 12
---

You can file bug reports against one of the TokTok projects on GitHub. Build
status and test coverage of all projects can be viewed on this page.

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

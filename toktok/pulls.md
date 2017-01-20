---
title: Pull Requests
permalink: pulls.html
menu_index: 7
js-includes: [twemoji-2.2.3.min.js, pr-table.js]
---

Click on a PR number (the # column) to see the pull request on GitHub. Click
on the branch to enter Reviewable.io and do a code review.

{::options parse_block_html="true" /}

<div>
  Loading Pull requests...
  <noscript>
    This page requires JavaScript to download the data for the PR table.
    Please enable JavaScript and reload the page.
  </noscript>
</div>
{: .tables-wrapper}

{::options parse_block_html="false" /}

<div></div>
{: .pr-padding}

<div>
  <a href="javascript:reloadPrTable()">&#8634;</a>
</div>
{: .pr-reload}

{% comment %}
  parse_block_html="true" tells kramdown to parse the content of html blocks
  as markdown.

  .pr-padding is to ensure that the reload button doesn't cover anything when
  you've scrolled to the bottom of the page.

  .pr-reload is the reload button. &#8634; is a reload symbol.
{% endcomment %}

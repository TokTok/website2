// Function depends on twemoji already having been loaded.
function createPrTable() {
  var repoSection = document.querySelector('main');
  var requestHeaders = new Headers();
  var requestInit = { method: 'GET',
                      headers: requestHeaders,
                      mode: 'cors',
                      cache: 'default' };

  var stateIcon = {
    clean: '&#x2705;',
    dirty: '&#x274c;',
    unknown: '&#x231b;',
    unstable: '&#x1f6a7;',
  };

  fetch('https://git-critique.herokuapp.com/hello/pulls', requestInit)
  .then(function(response) { return response.json(); })
  .then(function(json) {
    var loadingDiv = repoSection.querySelector(".loading");
    loadingDiv.parentNode.removeChild(loadingDiv);

    for (var i = 0; i < json.length; i++) {
      if (json[i].length > 0) {
        var repoTitle = document.createElement('h2');
        repoTitle.innerHTML = json[i][0].prRepoName;
        repoSection.appendChild(repoTitle);

        var prTable = document.createElement('table');
        prTable.className = "pr-table"
        var prHeaders = document.createElement('tr');
        prHeaders.innerHTML =
          "<th>" + "#"         + "</th>" +
          "<th>" + "Branch"    + "</th>" +
          "<th>" + "Title"     + "</th>" +
          "<th>" + "State"     + "</th>" +
          "<th>" + "Reviewers" + "</th>";
        prTable.appendChild(prHeaders);

        for (var j = 0; j < json[i].length; j++) {
          var listItem = document.createElement('tr');
          var reviewableBranch =
            "<a href='https://reviewable.io/reviews/toktok/" + json[i][j].prRepoName +
            "/" + json[i][j].prNumber + "'>" +
            json[i][j].prBranch.replace(/_/g, "_<wbr>") + "</a>";
          var githubNumber =
            " <a href='https://github.com/TokTok/" + json[i][j].prRepoName +
            "/pull/" + json[i][j].prNumber + "'>" +
            json[i][j].prNumber + "</a>";

          // Insert <wbr> tags after _ characters for neater word-wrapping.
          var titleWithTooltip =
            "<div class='tooltip'>" + json[i][j].prTitle.replace(/_/g, "_<wbr>") +
            "&#8203;<span class='tooltiptext'>" + json[i][j].prUser + "</span>" +
            "</div>";
          listItem.innerHTML =
            "<td>" + githubNumber                      + "</td>" +
            "<td>" + reviewableBranch                  + "</td>" +
            "<td>" + titleWithTooltip                  + "</td>" +
            "<td>" + stateIcon[json[i][j].prState]     + "</td>" +
            "<td>" + json[i][j].prReviewers.join(", ") + "</td>";
          prTable.appendChild(listItem);
        }
        repoSection.appendChild(prTable);

        // parse emoji in the content to ensure it gets displayed correctly in all browsers
        twemoji.size = '16x16'; // This can be set to 16x16, 36x36, or 72x72
        twemoji.parse(prTable, {
            callback: function(icon, options) {
              return relative + 'static/img/emoij/' + options.size + '/' + icon + '.png';
            }
        });
      }
    }
  });
}

createPrTable();

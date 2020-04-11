---
title: Jenkins CI and signed commits
tags:
  - git
  - jenkins
  - jToxcore
  - pgp
id: 128
categories:
  - Jenkins
date: 2014-03-19 16:22:31
---

This is the first post in our new Jenkins section. In this section, we will post updates about how we're building Tox automatically.

Today we started rolling out a new feature in our builds, Signed git commits. What are signed commits, and why are we using them? Well, the first question is answered quite easily: We use PGP signatures in order to verify the integrity of any commit. If you don't know what PGP is, you can read about it here: [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy "Pretty Good Privacy"). Now, why are we doing this? This answer is a little more complicated.

A friend (we'll call him Bob) of mine recently told me a little story about how something went horribly wrong when using git. In git, you can set your `user.email` and `user.name` to arbitrary values. There is no way to check if the email and name you gave are actually YOURS.

Now, there was another user who had push access to the repository, and they were malicious, as later discovered. Let's call them Mallory. One day, Mallory decided to push a malicious feature to the git repository. Mallory was smart however, and so they did this before creating the commit: `git config user.name Bob` and `git config user.email bob@example.com`.

You might already see where this is going now. Mallory pushed the malicious code under the name and email of Bob. When the "feature" was discovered, Bob was blamed immediately, and noone even thought about blaming Mallory (who didn't work at the company anymore at this point) because after all, the email and name stated quite clearly that Bob committed that code. Gladly, Bob wasn't fired, as he could assure that it was NOT him who committed the code.

Now, what can we do to prevent this from happening? It's surprisingly easy. Git has always offered the functionality to sign Tags with PGP, but starting with version 1.7.9, functionality to sign commits was added. It's very easy to enable, too. First step, locate your PGP key:
``` sh
$ gpg --list-secret-keys | grep ^sec
sec 2048R/75D697BF 2013-07-08 [expires: 2023-07-06]
```
Second step, set up that key to be used with git:
``` sh
$ git config --global user.signingkey 75D697BF
```
And now you're ready to sign your git commits with `git commit -S`. Now that commit is signed, and everyone that has your PGP public key can confirm that YOU made this commit (or someone stole your private key, but that's a completely different problem, and you should revoke your key immediately.) You can verify the signatures on commits like this: `git log --show-signature`. Since the output is very long, I put the output for different scenarios in a [gist](https://gist.github.com/sonOfRa/9649586 "Git commit signatures")

Does that mean that every Tox contributor has to set up PGP now? While personally, I think EVERYONE should have PGP, no. You can go on developing and adding Pull Request just as you did before. Only the repository maintainers of core, the bindings, and the clients need to worry about this.

And what does all this have to do with our Build Server? Currently, our Build Server fetches the latest changes from our different repositories and makes the updated code available to the build jobs, which then create a new binary each time the build is triggered by a change. This results in downloads that are minutes older than the latest commit, at the most.

Even though malicious commits are very unlikely, a malicious commit would also trigger a build on all clients, and until it is reverted, we would have built malicious binaries. In order to prevent this, we check the signatures of the commits each time the code is checked out. If the verification fails, the checkout will be marked as failed, and no builds using the unsigned commit would be made.

So what does this mean for the repository maintainers? Not much, except that they have to set up PGP and start signing their commits. There is one small problem, though. It is not possible to sign Pull Request through the Github Web-Interface. Therefore, we have to check out the Pull Request locally. Github has a guide how to do this [here](https://help.github.com/articles/checking-out-pull-requests-locally "Local PR"). Now, after you've checked out the Pull Request you want to merge, and it's in the branch "1234", this is how you would merge the PR and push the result to master:
``` sh
$ git checkout master
# --no-ff creates a merge commit
# -S signs the commit
$ git merge --no-ff -S 1234
$ git push origin master
```
The `--no-ff` option is vital, because we need a commit on master for which we can check the signature. If the option is ommitted, the commits might simply be added into the master branch, and signing will be problematic.

Here's some handy aliases so you don't forget to sign your commits or merges, and one to view signed commits when using git log:
``` sh
# View log with signatures with 'git slog'
$ git config --global alias.slog "log --show-signature"
# Create a signed commit with 'git scommit'
$ git config --global alias.scommit "commit -S"
# Create a signed, non-fast-forward merge
$ git config --global alias.smerge "merge -S --no-ff"
```

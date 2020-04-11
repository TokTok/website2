---
title: "Downtime, DNS, and a reliance on others"
id: 226
categories:
  - Uncategorized
date: 2014-04-13 05:25:48
tags:
---

At around 4 pm PST tox.im and its subdomains failed to load, along with libtoxcore.so.

About 6 hours later it returned, after my late notice and quick action.

After a quick investigation I determined that the web server was up and the nameservers were up, all working at 100%. Further investigation determined that the nameservers that powered the domain the nameservers were at went down, and after quickly moving that domains nameservers and a bit of DNS propagation service was restored.

So, what exactly went wrong? Tox's DNS is provided by service X, behind nameservers on domain b. Domain b once used service X, though for DNSSEC support moved to service Y. Service Y was chosen because DNSSEC DNS providers are rather rare, and these servers provided faster response times. Service Y's 4 nameservers were all taken down as a result of what we suspect was a DDoS attack, rendering queries on the nameservers for Tox useless. DNS glue was designed to prevent this issue, stop that catch-22, done by providing nameserver names and IPs in the whois record itself. This managed to get ignored by every DNS resolver, resulting in no queries going through. I was able to address this issue by fetching the bind file from X for domain b and deploying nameservers with service Z. After a bit of mitigation everything was all fine, with availability all around.

Service Y was chosen due to price and limited selection, though this later turned out to be a poor decision, service Z is a larger well known provider of Internet services, who offer a SLA, DDoS protection, and amazing uptime; at about 12 times the price.

At the end of the day, this was a painful lesson to learn. DNS isn't something to be taken lightly, and is something we really do need to pay a pretty penny for.

Why don't we run our own DNS servers? DNS is something that demands a level of maintainability, when something goes wrong fixing the server is difficult due to not being able to resolve the servers domain. This means more downtime, harder to maintain, and generally more expensive to run, and more messes like what happened yesterday.

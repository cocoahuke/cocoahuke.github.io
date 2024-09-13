---
layout:	post
title:	"Attack iPhone via Coprocessors"
date:	  2023-05-22
image:  /img/2023-05-22-The-Mysteries-Behind-ColdIntro-and-ColdInvite/cover.jpg
desc:   Check out how a new iPhone threat was discovered, where attackers can bypass security by exploiting weak co-processors, giving them a way to dig deeper into the iOS kernel.
---

A vulnerability that was believed to be patched back in 2022 by Apple is more mysterious than researchers initially believed it to be. The patch mitigated a vulnerability that was exploited in the wild as part of an attack chain targeting co-processors.

During the process of analyzing ColdIntro (CVE-2022-32894), I discovered another vulnerability that allows attackers to escape a co-processor and initiate memory corruption in the Application Processor (AP) — named ColdInvite (CVE-2023-27930).

ColdInvite impacts iPhone users by taking advantage of a vulnerability in certain versions of iOS.

![Report Screenshot](/img/2023-05-22-The-Mysteries-Behind-ColdIntro-and-ColdInvite/screenshot_report.jpg)

Download full report [Here](https://resources.jamf.com/documents/technical-papers/Coldintro-Coldinvite-Mystery-v2.0.pdf)
   
![screenshot](/img/2023-05-22-The-Mysteries-Behind-ColdIntro-and-ColdInvite/screenshot2.jpg)
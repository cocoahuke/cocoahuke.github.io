---
layout:	post
title:	"Open Source Project - ioskextdump"
date:	  2017-02-20
image:  /img/2017-02-20-Github-ioskextdump/screenshot2.jpg
desc:   It’s a set of ObjC/C programs that analyze assembly code to extract information from kernel/driver binary files for iOS 8 to 13, making it super helpful for security research.
---

It’s a set of ObjC/C programs that analyze assembly code to extract information from kernel/driver binary files for iOS 8 to 13, making it super helpful for security research. This info can then be used in IDA scripts to assist with further analysis. The cool part is, I added logic for common assembly instructions, so the program can ‘run’ through an assembly function like a mini virtual machine! I created different versions to handle various tasks.

I made different versions for arm, arm64, i386, and x86_64, but the arm64 version is the most advanced and complete.

![Review Screenshot](/img/2017-02-20-Github-ioskextdump/screenshot.jpg)

![Review Screenshot](/img/2017-02-20-Github-ioskextdump/screenshot2.jpg)

It’s been [featured](https://www.capstone-engine.org/showcase.html) three times on the official website of Capstone, a well-known disassembler engine.
![Review Screenshot](/img/2017-02-20-Github-ioskextdump/screenshot3.jpg)

[See Full Project Detail](https://github.com/cocoahuke/ioskextdump)
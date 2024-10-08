---
layout:	post
title:	"Open Source Project - universalmigparser"
date:	  2018-06-05
image:  /img/2018-06-05-Github-universalmigparser/cover.jpg
desc:   It’s part of a system-wide automated fuzzing framework I built on macOS. I wrote some C code that generates Python code, which then creates the C code needed for fuzzing.
---

![pic](/img/2018-06-05-Github-universalmigparser/pic1.jpg)

Mach RPC is based on Mach IPC (Interprocess Communication), more explicit, is one use of the Mach Message. Mach RPC (Remote Procedure Call) can be generated by mig tool (Mach Interface Generator), has client/server system structure.
In XNU kernel or another word, on MacOS system, a fair amount of MacOS-exclusive system calls used Mach RPC.

The well-know proc conception from BSD kernel, is associated with a ipc space object on Mach IPC, ipc space acts like a converter, converts ipc port object to a 32 bit integer which only meaningful in this ipc space, and ipc port object can store a kernel object, namely a kernel address point to a structure that contains rich members. Overall it's similar to the concept of file descriptor from UNIX - Everything is a file. Mach message as a low-level primitive IPC mechanism, except UNIX system calls and Mach traps, almost all other IPC mechanisms are essentially using Mach Message, include Mach RPC.

# So, what Universal MIG Parser can do

This project I brought to you was basically is a Code Generator, maximize possible customizations.

[See Project Full Detail](https://github.com/cocoahuke/maclook4ref)

Covered on the article ["The Top 34 C Code Generator Open Source Projects on Github"](https://awesomeopensource.com/projects/c/code-generator?categoryPage=7)


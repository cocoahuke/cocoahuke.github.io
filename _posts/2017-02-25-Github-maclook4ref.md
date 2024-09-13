---
layout:	post
title:	"Open Source Project - maclook4ref"
date:	  2017-02-15
image:  /img/2017-02-25-Github-maclook4ref/pic2.jpg
desc:   Quickly find references to a specific immediate number, or track function calls at a given offset, and generate a C++ function call backtrace.
---

![pic](/img/2017-02-25-Github-maclook4ref/pic1.jpg)

This tool doesn’t support iOS—it’s meant for analyzing macOS kernel extensions (kexts).

When you’re statically analyzing a macOS kernel extension to hunt for vulnerabilities, you might want to figure out where a potentially exploitable C++ function call originates. It could be triggered by a complex function like ::externalMethod. If that’s the case, you might find a way to manipulate or control something in the function.

C++ function calls essentially jump to a function address that’s retrieved from the vtable using an offset. The vtable’s address is fixed relative to the program code and stored in memory when the instance is allocated. The process involves getting the vtable address from the instance, adding an offset to it, and jumping to the final function address.

This tool’s approach is pretty straightforward: it scans the entire __text section of the binary, looks for matches with the specified offset, then prints the location along with the corresponding C++ functions, making it easy to understand.

Let’s check out the demo!

![pic](/img/2017-02-25-Github-maclook4ref/pic2.jpg)
![pic](/img/2017-02-25-Github-maclook4ref/pic3.jpg)

[See Full Project Detail](https://github.com/cocoahuke/maclook4ref)

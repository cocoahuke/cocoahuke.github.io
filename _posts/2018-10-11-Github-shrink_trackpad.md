---
layout:	post
title:	"Open Source Project - shrink_trackpad"
date:	  2018-10-11
image:  /img/2018-10-11-Github-shrink_trackpad/joke.jpg
desc:   Solve the Apple Macbook "oversized" trackpad problem.
---
# How to use
1. Download app from [release](https://github.com/cocoahuke/shrink_trackpad/releases)

2. Move App to Application folder

3. Disable SIP  
In order to be functional, I have to load code into kernel, and that require a valid distribute code signature which need purchase from Apple, since I don't have that, disable SIP for loading code to kernel is necessary.
If someone willing to sign for me, appreciate!

4. Run app with root   
It's for safety, app has to run with root.  

Open Terminal and type
```
sudo /Applications/Shrink Trackpad.app/Contents/MacOS/app_shrinkTrackpad
```
Enter your login password in the terminal.   

5. You should able to see the UI right now, follow the instruction from app window, only two steps



Tested on High Sierra, 15inch Macbook pro 2018.  
It should compatible with all macbooks (include old macbook equipped with perfect size trackpad) and macOS version include and above 10.12. (Also should be working on 10.10/10.11 If compile by a older version Xcode)

The **reset** button in first page is for clear the saved config, eg. If you've already setted ignore area,  and you want change that after you closed app, click **reset** for clear all setted ignore config, enable full trackpad!

It should automatically run everytime after you login!
Everything is open source, be rest assured!

![pic](/img/2018-10-11-Github-shrink_trackpad/demo1.jpg)
![pic](/img/2018-10-11-Github-shrink_trackpad/demo2.jpg)
![pic](/img/2018-10-11-Github-shrink_trackpad/demo3.jpg)

[See Project Full Detail](https://github.com/cocoahuke/shrink_trackpad)

Wow, I’m really happy someone is interested in my software! But to respond to their request, unfortunately, this project can’t be adapted to work on Apple Silicon computers because of a new kernel mitigation that stops the kernel text segment from being modified. Even turning off SIP isn’t enough, and it’s pretty tough to bypass this restriction.
![pic](/img/2018-10-11-Github-shrink_trackpad/pic2.jpg)



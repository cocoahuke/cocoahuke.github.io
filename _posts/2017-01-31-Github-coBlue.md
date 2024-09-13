---
layout:	post
title:	"Open Source Project - coBlue"
date:	  2017-01-31
image:  /img/2017-01-31-Github-coBlue/cover.jpg
desc:   Uses Bluetooth Low Energy (BLE) for remote commands and file transfers, based on the BlueZ Bluetooth protocol stack. This project allows communication between portable Linux computers and macOS/iOS devices through BLE.
---

Uses Bluetooth Low Energy (BLE) for remote commands and file transfers, based on the BlueZ Bluetooth protocol stack. It can even save you when you’re blocked by iptables!

Imagine your iPhone wirelessly connecting to a tiny computer like a Raspberry Pi, letting you use powerful Linux tools. While it won’t replace a terminal over Wi-Fi or USB for big tasks, it’s perfect for quick, discreet operations.

The project is easy to install, starts automatically on boot, and communicates through characteristics in a service (part of the GATT/ATT protocol on top of L2CAP). It includes MAC address filtering and password authentication, broadcasting when there’s no connection or after a disconnect.

Since it’s based on GATT/ATT, it works with devices that support third-party development of GATT/ATT, like iOS.

	•	Service: CusService
	•	Characteristic: Shell Terminal (read/write)
	•	Characteristic: File Transfer (read/write)

![pic](/img/2017-01-31-Github-coBlue/screenshot.jpg)

## Feature

1. BLE Low power consumption advantage
2. Basic shell functionality.
3. File transfer (Get / Put)
4. Bluetooth Mac address filtering
5. Password authentication with time limit (Eg. for iOS device)
6. Start automatically when raspberry pi boot up
7. You can change the device name or Service UUID for confusion
8. Interactive command in Macos as Central  
**More functions see [-h](https://github.com/cocoahuke/coBlue/blob/master/README_help)**  
maybe add more in the future...

![pic](/img/2017-01-31-Github-coBlue/screenshot2.jpg)

[See Full Project Detail](https://github.com/cocoahuke/coBlue)

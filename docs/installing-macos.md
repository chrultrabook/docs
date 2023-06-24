---
title: Installing macOS
layout: default
nav_order: 10
---

## Installing macOS


Before we begin, it's important to know whether your Chromebook is even supported:
- ARM/AMD CPUs are not supported.
- Intel Celeron / Pentium CPUs are not supported.
- Tiger Lake (11th gen) CPUs and newer are not supported.
- You need at least 32gb of eMMC storage

**You will also need:**
* Patience 
    * This is not a one click setup thing. It usually takes one or more weeks to have a stable hack.
* A USB drive 
  * 4 gigabytes or more for a online installer;
  * 32 gigbytes or more for offline installer
* The ability to use a command prompt 
  * We won’t help you if you don't know how to cd to a directory.

-------

### Tested Devices:
>**Note**: This list is incomplete. Feel free to improve it.
- Asus C425 (LEONA)
- Asus C434 (SHYVANA)
- Asus C433 (SHYVANA)
- Acer C720 / C720P (PEPPY)
- Dell Chromebook 13 7310	 (LULU)
- Google Pixelbook (2017)	(EVE)
- Google Pixel Slate	(NOCTURNE)
- Google Pixelbook Go (2019) (ATLAS)
- Dell Latitude 7410 Chromebook Enterprise (DRALLION)
- Asus Chromebox 2 (CN62)	(GUADO)
- HP Chromebook x360 14c (DRAGONAIR)

**The following devices have dedicated guides written for them:**

* [ChromebookOSX](https://github.com/meghan06/ChromebookOSX):
* Asus C425 (LEONA)
* Asus C434 (SHYVANA)
* Asus C433 (SHYVANA) 

* [PixelbookOSX](https://github.com/olm3ca/PixelbookOSX):
- Google Pixelbook (2017)	(EVE)
- Google Pixel Slate	(NOCTURNE)
- Google Pixelbook Go (2019) (ATLAS)

-------

### Installing macOS

1. Follow the [Dortania guide](https://dortania.github.io/OpenCore-Install-Guide).
2. Add the following SSDT to your ACPI folder: croscorebootpatch (todo)
 
-------

### Disabling Unsupported Devices

**You will need:**
* iASL on Windows or Linux
* maciASL on macOS

#### Getting Started:

1. Grab the sample SSDTs from here: (todo)

  >**Note**: These devices disable unsupported devices in macOS, such as speakers. Disabling unsupported devices in macOS saves battery life and increases stability.
  
  >**Warning**: If you dualboot, you might run into issues. A OSI_ check is not present in these SSDTs.

(todo)


### [Post Install →](post-install.html) 

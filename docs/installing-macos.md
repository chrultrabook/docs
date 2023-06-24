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
  * We won't help you if you don't know how to cd to a directory.

-------

### Tested Devices:

{: .note }
This list is incomplete. Feel free to improve it.

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
* Google Pixelbook (2017)	(EVE)
* Google Pixel Slate	(NOCTURNE)
* Google Pixelbook Go (2019) (ATLAS)

* [macOS-Dragonair](https://github.com/mine-man3000/macOS-Dragonair):
* HP Chromebook x360 14c (DRAGONAIR)

-------

### Installing macOS
 
#### Getting Started:

1. Follow the [Dortania guide](https://dortania.github.io/OpenCore-Install-Guide).
2. if you didn't follow the laptop guide for your CPU generation

#### Chromebook Specific Modifications


1. [ChromebookPS2](https://github.com/meghan06/ChromebookPS2/): Remaps top row FX keys to their intended purpose for Chromebook keyboards
2. [croscorebootpatch](https://github.com/meghan06/croscorebootpatch): Fixes freeze on booting with coreboot 4.20 and up.
3. [crossdxcdisable](https://github.com/meghan06/crossdxcdisable): Disables SD card reader as it is unsupported.
4. [croshdasdisable](https://github.com/meghan06/croshdasdisable): Disables the `HDAS` device in ACPI as there is no support for it in macOS.
5. [EmeraldSDHC](https://github.com/acidanthera/EmeraldSDHC/releases): eMMC driver
6. Take those files you downloaded and put the `.aml` files in the ACPI folder, and the `.kexts` into the kexts folder
7. Snapshot (cmd +r) or (ctrl + r) your `config.plist`. 

 {: .warning }
NEVER do clean snapshots (`ctrl/cmd+shift+r`) after adding your HPET patches, they will be **wiped**. Only do regular snapshots. (`ctrl/cmd+r`).


{: .fs-5 }
{: .text-right }
[Post Install →](post-install.html) 

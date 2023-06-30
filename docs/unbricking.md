---
title: Unbricking
layout: default
nav_order: 17
---

## Unbricking

If you've found your way here, it's likely because you updated your firmware and, despite best efforts to minimize the possibility, something went wrong. 
Thankfully, most Chromebooks can be easily unbricked using cheap, readily available hardware: older Chromebooks using a ch341a USB programmer from Amazon/eBay/Alibaba (and many other sources),
and newer (2017+) Chromebooks using a USB-C debug cable (aka Suzy-Q cable).

-----------

### Unbricking/Flashing with a ch341a USB programmer

**Requirements**

* A ChromeOS device with a SOIC-8 type SPI flash chip. Most Chromebooks use this type of chip, but there are a few notable exceptions:
  - Google Chromebook Pixel 2013
  - Google Chromebook Pixel 2015
  - HP Chromebook 13 G1
  - Asus Chromebook C302SA
  
  { .note }
  These devices all use a WSON-8 flash chip, which does not expose the pins of the chip, so they cannot easily be "clipped" like a SOIC-8 chip. While it is usually possible to modify a SOIC-8 chip clip to attach to a WSON-8 chip, it's less than ideal. Both Chromebook Pixels feature a Google debug header, which can connect to a debug servo with a special cable and be flashed that way, but not an option for most users.

* A device running Linux from which to run flashrom. For this guide, I will use a Ubuntu 23.04 live USB.
* A ch341a USB flash programmer 
* A 1.8v adapter 

  { .note }
  The adapter is required for devices which use 1.8v flash chips. Some/Most Baytrail, Braswell, Skylake and many newer devices use a 1.8v flash chip

* An SOIC-8 chip clip 

These 3 components are often bundled together at a lower cost, and if you're unsure if your device uses a 1.8v flash chip or a 3.3v one, it makes sense to have the adapter on hand if needed.


--------------------------

**Hardware Disassembly**

While this is somewhat device-specific, the main points are the same:

* Disconnect all external power
* Remove bottom cover (screws are often located under rubber feet or strips)
* Disconnect the internal battery (for Chromeboxes, disconnect the small CMOS battery)
* Locate the SPI flash chip

   { .note }
   Most ChromeOS devices use a Winbond flash chip, though some use a compatible chip from another manufacturer, eg Gigadevices. It will be either an 8MB or 16MB chip, with the identifier W25Q64[xx] (8MB) or W25Q128[xx] (16MB) where [xx] is usually FV or DV. We do not want to touch the EC firmware chip, which is identified by W25X40[xx].

   { .note }
   Unfortunately, many devices have the flash chip located on the top side of the main board, and require fully removing the main board in order to flash. This is true for most Baytrail and Braswell models.
 
   { .note }
   Pin 1 of the flash chip will be notated by a dot/depression on the chip; be sure to align this with pin 1 on the chip clip wiring (a red strip on the example linked above).


Googling should locate a disassembly guide for most models. If you can't find one for your exact model, try to find one for another model of the same manufacturer as the bottom cover removal tends to be very similar.


--------------------------

**Prepping to Flash**

Once you have your device disassembled and flash chip located, time to boot up the flashing environment. Most any Linux setup should do as long as either flashrom is available from the distro's software repositories, or it's 64-bit x86 (in which case you can download a statically compiled build of flashrom from mrchromebox.tech). This guide will use a Ubuntu 23.04 live session booted from USB.

So let's get to it:

1. Boot your Linux environment (Ubuntu 2304 live USB or later recommended)
2. Connect to WiFi/internet
3.  Open a (non-root) terminal/shell window, change to home directory
    * `cd;`
4. Install flashrom via apt:
    * `sudo apt update`
    * `sudo apt install flashrom`
5. Assemble ch341a programmer, 1.8v adapter (if needed), and chip clip/wiring. Ensure that pin 1 is correct and consistent.
    <img src="https://wiki.mrchromebox.tech/images/thumb/1/16/Ch341a_annotated.png/500px-Ch341a_annotated.png" width="500" height="205">
6. Connect the chip clip to the SPI flash chip, then connect the CH341a to the Linux host machine. Note the dot/depression indicating pin 1.

    <img src="https://wiki.mrchromebox.tech/images/thumb/e/e5/SOIC-8_chip.jpg/500px-SOIC-8_chip.jpg" width="500" height="444">
7. Test connectivity and ensure the flash chip is properly identified:
    * `sudo flashrom -p ch341a_spi`


//todo


----------

Adopted from https://wiki.mrchromebox.tech/Unbricking

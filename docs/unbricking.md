---
title: Unbricking
layout: default
nav_order: 21
parent: Advanced 
---

## Unbricking

If you've found your way here, it's likely because you updated your firmware and, despite best efforts to minimize the possibility, something went wrong. Thankfully, most Chromebooks can be easily unbricked using cheap, readily available hardware: older Chromebooks using a ch341a USB programmer from Amazon/eBay/Alibaba (and many other sources), and newer (2017+) Chromebooks using a USB-C debug cable (aka Suzy-Q cable).

-----------

### Unbricking/Flashing with a ch341a USB programmer

**Requirements**

* A ChromeOS device
  
  {: .note }
  Most Skylake and older models (with a few exceptions) use a SOIC-8 flash chip which is easily clipable. Most if not all Kabylake/Apollolake and newer devices use a WSON-8 flash chip which can't be clipped, instead you need a WSON-8 probe. Check the part number of your flash chip to find the correct size needed.

* A device running Linux from which to run flashrom. For this guide, I will use a Ubuntu 23.04 live USB.
* A ch341a USB flash programmer
* A 1.8v adapter

  {: .note }
  The adapter is required for devices which use 1.8v flash chips. Some/Most Baytrail, Braswell, Skylake and many newer devices use a 1.8v flash chip. Baytrail is more reliable flashing at 3.3v though due to current leakage

* Either a SOIC-8 chip clip or a WSON-8 probe

A ch341a programmer, 1.8v adapter, and a SOIC-8 clip  are often bundled together at a lower cost, and if you're unsure if your device uses a 1.8v flash chip or a 3.3v one, it makes sense to have the adapter on hand if needed. You can look up the part number of your flash chip to determine which voltage it needs.


--------------------------

**Hardware Disassembly**

While this is somewhat device-specific, the main points are the same:

* Disconnect all external power
* Remove bottom cover (screws are often located under rubber feet or strips)
* Disconnect the internal battery (for Chromeboxes, disconnect the small CMOS battery)
* Locate the SPI flash chip

   {: .warning }
   Most ChromeOS devices use a Winbond flash chip, though some use a compatible chip from another manufacturer, eg Gigadevices. It will be either an 8MB, 16MB, or 32MB chip, with the identifier W25Q64[xx] (8MB),  W25Q128[xx] (16MB), or W25Q256[xx] (32MB) where [xx] is usually FV or DV. We do **not** want to touch the EC firmware chip, which is identified by W25X40[xx].

   {: .note }
   Unfortunately, many devices have the flash chip located on the top side of the main board, and require fully removing the main board in order to flash.
 
   {: .note }
   Pin 1 of the flash chip will be notated by a dot/depression on the chip; be sure to align this with pin 1 on the chip clip wiring.


Googling should locate a disassembly guide for most models. If you can't find one for your exact model, try to find one for another model of the same manufacturer as the bottom cover removal tends to be very similar.


--------------------------

**Prepping to Flash**

Once you have your device disassembled and flash chip located, boot up the flashing environment. Most any Linux setup should do as long as either flashrom is available from the distro's software repositories, or it's 64-bit x86 (in which case you can download a statically compiled build of flashrom from mrchromebox.tech). This guide will use a Ubuntu 23.04 live session booted from USB.

So let's get to it:

1. Boot your Linux environment (Ubuntu 23.04 live USB or later recommended)
2. Connect to WiFi/internet
3.  Open a (non-root) terminal/shell window, change to home directory
    * `cd;`
4. Install flashrom via apt:
    * `sudo apt update`
    * `sudo apt install flashrom`
5. Assemble ch341a programmer, 1.8v adapter (if needed), and chip clip/wiring. Ensure that pin 1 is correct and consistent.  
    <img src="https://wiki.mrchromebox.tech/images/thumb/1/16/Ch341a_annotated.png/500px-Ch341a_annotated.png" width="500" height="205">
6. Connect the chip clip to the SPI flash chip, or get ready to hold down your WSON-8 probe, rubber bands can be used to hold it down while flashing, then connect the CH341a to the Linux host machine. Note the dot/depression indicating pin 1.  
    <img src="https://wiki.mrchromebox.tech/images/thumb/e/e5/SOIC-8_chip.jpg/500px-SOIC-8_chip.jpg" width="500" height="444">
7. Test connectivity and ensure the flash chip is properly identified:
    * `sudo flashrom -p ch341a_spi`

Flashrom will produce output identifying the flash chip. If it doesn't, double check your connections to the programmer and the chip clip and retry.

  <img src="https://wiki.mrchromebox.tech/images/thumb/d/d1/Flashrom_chip_detect.png/500px-Flashrom_chip_detect.png" width="500" height="271">

8. Determine file to be flashed
    * Depending on your desired use for the device, you have 3 options for flashing:
    * The backup file of the stock firmware created by my Firmware Utility Script
        * If using this, simply copy the file from USB into the home directory of the live USB user
    * The custom UEFI firmware for the device
        * If you were flashing the UEFI firmware when things went sideways, then that's the easiest way to proceed. You can download the UEFI firmware for your device by examining the [sources.sh file from the Firmware Utility Script GitHub repo](https://github.com/MrChromebox/scripts/blob/master/sources.sh). Simply concatenate the device-specific filename to the Full ROM base path:
            *  `wget <Full ROM base path><device specific filename>`
            * Example for the Acer Chromebook 14 CB3-431 (EDGAR)
            * `wget https://mrchromebox.tech/files/firmware/full_rom/coreboot_tiano-edgar-mrchromebox_20180827.rom`
            * Don't forget to get the SHA1 file for verification:
            * `wget https://mrchromebox.tech/files/firmware/full_rom/coreboot_tiano-edgar-mrchromebox_20180827.rom.sha1`
            * Then verify the download:
            * `sha1sum -c coreboot_tiano-edgar-mrchromebox_20180827.rom.sha1`
    * The shellball firmware for the device
        * As with the UEFI firmware above, the shellball ROM can be downloaded by concatenating the shellball base path with the device-specific filename:
            * `wget <shellball base path>/shellball.<device name>.bin`
            * Example for the Acer Chromebook 14 CB3-431 (EDGAR):
            * `wget https://mrchromebox.tech/files/firmware/shellball/shellball.edgar.bin`

{: .note }
If you're not sure which file to use for your device / don't know your device's board name, you can reference [the supported devices page](supported-device.html).

----------

**Persisting the board's Vital Product Data (VPD)**

The firmware in all ChromeOS devices contains a section (RO_VPD) which stores board-specific data, like the serial number, localization settings, and on many devices which have an Ethernet port, the LAN MAC address as well. When flashing via the Firmware Utility Script, the script will automatically extract this from the running firmware and inject it into the firmware to be flashed, so the device serial, LAN MAC address, etc are all maintained. Without this, the device will use a default/generic LAN MAC address set by coreboot. While not ideal, this is only really an issue if two or more of the same device are on the same LAN segment (or you're statically assigning IP addresses based on MAC). But for completeness, if flashing the UEFI firmware or shellball ROM, we'll extract the VPD (either from the board itself or a backup made by the script) and inject it into the firmware to be flashed.

{: .note }
You don't need to do this if flashing a stock firmware backup created by the Firmware Utility Script; that image already contains the VPD.

1. For both the options below, we'll need to use the cbfstool (coreboot filesystem) binary, so let's download/extract that:
    * `wget https://mrchromebox.tech/files/util/cbfstool.tar.gz && tar -zxf cbfstool.tar.gz`
    * Option 1: Extract VPD from the firmware on device
        * `sudo flashrom -p ch341a_spi -r badflash.rom`
        * `./cbfstool badflash.rom read -r RO_VPD -f vpd.bin`
    * Option 2: Extract VPD from stock firmware backup created by Firmware Utility Script (this assumes the file has been copied into working directory)
        * `./cbfstool stock-firmware-<devicename>-<date>.rom read -r RO_VPD -f vpd.bin`
        * Then we inject the VPD into the firmware image to be flashed.
        * `./cbfstool <Shellball ROM/UEFI Full ROM filename> write -r RO_VPD -f vpd.bin`

Now the firmware image is ready to be flashed, and will maintain the device's unique serial, LAN MAC address, etc.

-----------------

**Flashing Your Device**

Now that everything is prepped, time to flash the device. To be thorough, we'll perform a 2nd verification after flashing to ensure the integrity of the flashed firmware.

1. Flash the firmware:
    * If flashing your own backup created by the Firmware Utility Script (or any backup made from a live system), use
        * `sudo flashrom -p ch341a_spi --ifd -i bios -w <filename>`
    * Otherwise use
        * `sudo flashrom -p ch341a_spi -w <filename>`

    Where \<filename\> is the name of your backup file, UEFI firmware file, or shellball firmware file. This will usually take 30s-90s to complete; flashrom will first read the flash chip, determine which sectors differ, erase those sectors, write the new data, then verify the data written.

2. Verify the firmware

Even though flashrom does this as part of the write process, verifying the entire flash chip is quick and an easy way to ensure everything went as it should:

  * As before, if flashing your own backup created by the Firmware Utility Script (or any backup made from a live system), use
      * `sudo flashrom -p ch341a_spi --ifd -i bios -v <filename>`
      * Otherwise, use
      * `sudo flashrom -p ch341a_spi -v <filename>`
      * Using the same filename as before. If the verification passes, then disconnect the CH341a from the host machine, and then remove the chip clip.

------------------

**Clean Up**

Reassembly is the reverse of disassembly. Reconnect the internal battery and replace the bottom cover. Flip over the device, connect external power, press the power button, and cross your fingers :)

--------------

### Unbricking/Flashing with a Suzy-Q cable

-----------

**Requirements**
* A ChromeOS device with CCD (closed-case debugging) enabled on one of the USB-C ports. If your device uses CR50 for the firmware write protection, then it has CCD capability.

  {: .warning }
  These instructions do not apply to any device which is locked/managed. Enterprise and/or EDU enrollment locks out CCD functionality completely.

* A USB-C debug cable ([aka Suzy-Q cable](https://www.sparkfun.com/products/retired/14746))
* The device must have the CCD flags factory reset (as per instructions to disable firmware write protection), or the battery must be unplugged/disconnected from the mainboard.
* Another device running Linux, preferably a current Debian/Ubuntu-based distro

-----------

**Hardware Disassembly**

As above, this is only needed if you failed to factory reset the CCD flags as part of disabling the device's firmware write-protection. While this is somewhat device-specific, the main points are the same:

* Disconnect all external power
* Remove bottom cover (screws are often located under rubber feet or strips)
* Disconnect the internal battery

-----------

**Prepping to Flash**

Most any 64-bit Debian/Ubuntu based distro should work here, but this guide will use a Ubuntu 23.04 live session booted from USB (since its version of flashrom supports Suzy-Q flashing).


Let's get to it:
1. Boot your Linux environment (Ubuntu 23.04 live USB or later recommended)
2. Connect to the internet
3. Open a (non-root) terminal/shell window, change to home directory
  * `cd;`
4. Install flashrom via apt:
  * `sudo apt update`
  * `sudo apt install flashrom`
5. Connect the USB-C end of the Suzy-Q cable to the CCD port on your ChromeOS device (usually left USB-C port) and the USB-A end to your Linux device
6. Verify the cable is properly connected:
  * `ls /dev/ttyUSB*`
    * This command should return 3 items: `ttyUSB0`, `ttyUSB1`, and `ttyUSB2`.
    * If not, then your cable is connected to the wrong port or is upside down; adjust and repeat comment until output is as expected
7. Set the CCD state to open:
  * `echo "ccd open" | sudo tee -a /dev/ttyUSB0 > /dev/null`
 8. Determine file to be flashed
    * Depending on your desired use for the device, you have 3 options for flashing:
    * The backup file of the stock firmware created by my Firmware Utility Script
        * If using this, simply copy the file from USB into the home directory of the live USB user
    * The custom UEFI firmware for the device
        * If you were flashing the UEFI firmware when things went sideways, then that's the easiest way to proceed. You can download the UEFI firmware for your device by examining the [sources.sh file from the Firmware Utility Script GitHub repo](https://github.com/MrChromebox/scripts/blob/master/sources.sh). Simply concatenate the device-specific filename to the Full ROM base path:
            *  `wget <Full ROM base path><device specific filename>`
            * Example for the Acer Chromebook 14 CB3-431 (EDGAR)
            * `wget https://mrchromebox.tech/files/firmware/full_rom/coreboot_tiano-edgar-mrchromebox_20180827.rom`
            * Don't forget to get the SHA1 file for verification:
            * `wget https://mrchromebox.tech/files/firmware/full_rom/coreboot_tiano-edgar-mrchromebox_20180827.rom.sha1`
            * Then verify the download:
            * `sha1sum -c coreboot_tiano-edgar-mrchromebox_20180827.rom.sha1`
    * The shellball firmware for the device
        * As with the UEFI firmware above, the shellball ROM can be downloaded by concatenating the shellball base path with the device-specific filename:
            * `wget <shellball base path>/shellball.<device name>.bin`
            * Example for the Acer Chromebook 14 CB3-431 (EDGAR):
            * `wget https://mrchromebox.tech/files/firmware/shellball/shellball.edgar.bin`

{: .note }
If you're not sure which file to use for your device / don't know your device's board name, you can reference [the supported devices page](supported-device.html).

-----------

**Persisting the board's Vital Product Data (VPD)**

The firmware in all ChromeOS devices contains a section (RO_VPD) which stores board-specific data, like the serial number, localization settings, and on many devices which have an Ethernet port, the LAN MAC address as well. When flashing via the Firmware Utility Script, the script will automatically extract this from the running firmware and inject it into the firmware to be flashed, so the device serial, LAN MAC address, etc are all maintained. Without this, the device will use a default/generic LAN MAC address set by coreboot. While not ideal, this is only really an issue if two or more of the same device are on the same LAN segment (or you're statically assigning IP addresses based on MAC). But for completeness, if flashing the UEFI firmware or shellball ROM, we'll extract the VPD (either from the board itself or a backup made by the script) and inject it into the firmware to be flashed.

{: .note }
You don't need to do this if flashing a stock firmware backup created by the Firmware Utility Script; that image already contains the VPD.

1. For both the options below, we'll need to use the cbfstool (coreboot filesystem) binary, so let's download/extract that:
    * `wget https://mrchromebox.tech/files/util/cbfstool.tar.gz && tar -zxf cbfstool.tar.gz`
    * Option 1: Extract VPD from the firmware on device
        * `sudo flashrom -p ch341a_spi -r badflash.rom`
        * `./cbfstool badflash.rom read -r RO_VPD -f vpd.bin`
    * Option 2: Extract VPD from stock firmware backup created by Firmware Utility Script (this assumes the file has been copied into working directory)
        * `./cbfstool stock-firmware-<devicename>-<date>.rom read -r RO_VPD -f vpd.bin`
        * Then we inject the VPD into the firmware image to be flashed.
        * `./cbfstool <Shellball ROM/UEFI Full ROM filename> write -r RO_VPD -f vpd.bin`

Now the firmware image is ready to be flashed, and will maintain the device's unique serial, LAN MAC address, etc.

-----------

**Flashing Your Device**

Now that everything is prepped, time to flash the device.

1. Flash the firmware:
  * If flashing your own backup created by the Firmware Utility Script (or any backup made from a live system), use
    * `sudo flashrom -p raiden_debug_spi:target=AP -i SI_BIOS -w <filename>`
  * Otherwise, if using a UEFI Full ROM image or shellball/recovery-extracted image, use
    * `sudo flashrom -p raiden_debug_spi:target=AP -w <filename>`
  * Where <filename> is the name of your backup file, UEFI firmware file, or shellball firmware file. This will usually take 3-5 mins to complete; flashrom will first read the flash chip, determine which sectors differ, erase those sectors, write the new data, then verify the data written. The initial CCD setup make take a minute or so and not show any progress.

-----------

**Clean Up**

Once flashing is complete, disconnect the Suzy-Q cable. If the internal battery was not disconnected, the device will likely reboot as soon as flashing has completed. If the internal battery was disconnected, reconnect it and replace the bottom cover. Flip over the device, connect external power, press the power button, and cross your fingers :)

-----------

Adapted from <a href="https://wiki.mrchromebox.tech/Unbricking">https://wiki.mrchromebox.tech/Unbricking</a>

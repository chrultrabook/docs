---
title: Firmware
layout: default
nav_order: 8
---

**Flashing Custom Firmware**

Refer to [here](allaboutfirmware.html) for an overview of both RW_LEGACY and UEFI.

{: .warning }
**Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforeseen failures. If you don't have the ability to recover from a bad flash, you're taking a risk. Flashing Full ROM firmware will remove your ability to run ChromeOS. 


To convert your machine from Google's firmware and chromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md)

   {: .warning }
   Doing this will wipe **all** user data! Make backups if needed before proceeding.

    * Press `esc` `refresh` (f3) and `power` at the same time. Doing this should cause your system to reboot into a screen that prompts you to insert a recovery USB or SD card.
    * Press `ctrl` and `d` at the same time.
    * Follow the on screen instructions, then once it reboots, you should be in Developer Mode. **Do not enable debugging features.**
    * Setup the system as you would on any other Chromebook.
  
2. Refer to the [supported devices list](supported-devices.html) to figure out which method you need to use to disable write-protect on your device.
    * Depending on your device, you will need to do **one** of the following:
        * Undo a WP screw
        * Unplug your battery
        * Bridge two jumpers
        
3. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
    * Type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
    * If you encounter certificate related errors when downloading the script from ChromeOS, then add `-k` to the `curl` and script command to bypass SSL certificate checking as so:
        * `cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
4. Make sure to create a firmware backup and **store it in a safe place** (Google Drive, another PC, etc), as reverting to stock firmware without a backup is **very difficult**.
5. Power the machine down and boot it back up. It can take up to a minute for display to come up on first POST. Do **not** interrupt the first boot. 

-------

**Updating coreboot**

1. Boot a Linux live USB (Ubuntu 22.04 recommended)

  {: .note }
  curl is not installed by default for Ubuntu / Ubuntu distros. To install it, run: `sudo apt update;sudo apt install curl -y`

2. Run the same firmware utility script you used to install coreboot
   * In case you forgot, type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.

3. Pick option 1; "Install/Update UEFI (Full ROM) Firmware" and reboot if successful

-------

{: .fs-5 }

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="allaboutfirmware.html">← All About Firmware</a> 
</td>
<td width="50%" style="text-align: right">
<a href="altos.html">Installing altOS →</a> 
</td>
</tr>
</table>

---
title: Flashing Custom Firmware
layout: default
nav_order: 9
---

### Terminology

| **Term** | **Description** |  
| - | - |
| SuzyQable    | A cable that enables CCD (Closed Case Debug). Used to disable WP. | 



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
        * Plug in a SuzyQable  
        
3. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
    * Type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
    * If you encounter certificate related errors when downloading the script from ChromeOS, then add `-k` to the `curl` and script command to bypass SSL certificate checking as so:
        * `cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
4. If you are flashing Full ROM, the firmware script will prompt you to make a backup of your stock firmware. **Store it in a safe place** (Google Drive, another PC, etc), as reverting to stock firmware without a backup is **very difficult**.
5. Power the machine down and boot it back up. It can take up to a minute for display to come up on first POST. Do **not** interrupt the first boot. 

-------

{: .fs-5 }

<table>
<tr>
<td class="navtable-l">
<a href="allaboutfirmware.html">← All About Firmware</a> 
</td>
<td class="navtable-r">
<a href="altos.html">Installing altOS →</a> 
</td>
</tr>
</table>

---
title: Exiting Developer Mode
layout: default
nav_order: 9
---

## Exiting Developer Mode


{: .warning }
Entering and exiting Developer mode will **wipe all** user data!
Backup anything if you have to.

### Reset GBB Flags
If you get this error "WARNING: TONORM prohibited by GBB_FORCE_DEV_SWITCH_ON" or find the "Return to secure mode" button missing, you need to reset your gbb flags. 

1. Boot chromeOS.

2. Press `Control` + `Alt` + `T` to bring up a crosh terminal.

3. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
    * Type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
    * If you encounter certificate related errors when downloading the script from ChromeOS, then add `-k` to the `curl` and script command to bypass SSL certificate checking as so:
        * `cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` 

4. Select option 3: "Set Boot Options (GBB flags)".

5. Select option 5: "Reset to factory default".

6. Your done.


### Exiting Developer Mode

1. Restart your system to go to the "You are in Developer Mode" or "OS Verification is OFF" screen.

2. Press the `Spacebar`. It should bring up a prompt asking for confirmation about "Return to secure mode" or "Turning on OS Verification".

3. Press `Enter`. The screen should turn off breifly and say that its returning to "Normal (Verified) Mode...".

4. Once its done, Setup the system like normal.

{: .fs-5 }

<table>
<tr>
<td class="navtable-l">
<a href="allaboutfirmware.html">← All About Firmware</a> 
</td>
<td class="navtable-r">
<a href="firmware.html">Flashing Custom Firmware →</a> 
</td>
</tr>
</table>

---
title: Flashing Firmware
layout: default
nav_order: 8
---

## Flashing Custom Firmware

Refer to [here](allaboutfirmware.html) for an overview of both RW_LEGACY and UEFI.

{: .warning }
**Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforeseen failures. If you don't have the ability to recover from a bad flash, you're taking a risk. Flashing Full ROM firmware will remove your ability to run ChromeOS. 


To convert your machine from Google's firmware and ChromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md)
2. Refer to [supported devices](supported-devices.html) to figure out which method you need to use to disable write-protect on your device.
3. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
4. Make sure to create a firmware backup and **store it in a safe place** (Google Drive, another PC, etc), as reverting to stock firmware without a backup is **very difficult**.
5. Power the machine down and boot it back up. It can take up to a minute for display to come up on first POST. 

{: .warning }
Do **not** interrupt the first boot. 

-------

With that done, let's move onto installing AltOS.

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

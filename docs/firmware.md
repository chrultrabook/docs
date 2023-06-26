---
title: Flashing Firmware
layout: default
nav_order: 7
---

## Flashing Custom Firmware

{: .warning }
**Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforeseen failures. If you don't have the ability to recover from a bad flash, you're taking a risk. Flashing Full ROM firmware will remove your ability to run ChromeOS. 


To convert your machine from Google's firmware and ChromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md)
2. Boot into ChromeOS with battery disconnected.

{: .note }
To boot the machine without internal battery plugged in, your USB-C PD charger needs to support 15V mode.

{: .note }
You need a SuzyQable to disable SPI Write Protect on AlderLake.

{: .note }
On Jasper Lake Chromebook/boxes you need to bridge a jumper on the motherboard instead.
   
4. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
5. Make sure to create firmware backup and **store it in safe place**, reverting to stock without backup is **very difficult**.
6. Power the machine down and boot it back up. It can take up to a minute for display to come up on first POST. 

{: .warning }
Do **not** interrupt the first boot. 

-------

With that done, let's move onto installing AltOS.

{: .fs-5 }


<table>
<tr>
<td width="50%" style="text-align: left">
<a href="getting-started.html">← Getting Started</a> 
</td>
<td width="50%" style="text-align: right">
<a href="altos.html">Installing altOS →</a> 
</td>
</tr>
</table>

---
title: Flashing Firmware
layout: default
nav_order: 7
---

## Flashing custom firmware
>**Warning**: **Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforseen failures. If you don't have the ability to recover from a bad flash, you're taking a risk. Flashing Full ROM firmware will remove your ability to run ChromeOS. You have been warned.


To convert your machine from Google's firmware and ChromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md)
2. Boot into ChromeOS with battery disconnected (see [below](#note))
3. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
4. **Do not use RW_LEGACY**. Dual-booting is generally buggy and will cause you issues in a long run. You want to flash full ROM (UEFI) for best experience, Windows will never run on RWL.
5. Make sure to create firmware backup and **store it in safe place**, reverting to stock without backup is **very difficult**.
6. Power the machine down and boot it back up. It can take up to a minute for display to come up on first POST.

-------

### Note: 
* To boot the machine without internal battery plugged in, your USB-C PD charger needs to support 15V mode.
* You need SuzyQable to disable SPI Write Protect on AlderLake.
* On JasperLake you need to bridge jumper on the motherboard instead.

-------

With that done, let's move onto installing AltOS.
## [Installing altOS →](altos.html) 

---
title: Migrating from older methods
layout: default
nav_order: 21
---


## Upgrading from GalliumOS on Full ROM (UEFI)

{: .note }
Firmware Utility Script doesn't currently work on GalliumOS due to the outdated version of the base system.
This might be fixed in the future.

1. Disable the SPI flash write protection
2. Boot a live Linux USB (use one from the [recommended distributions list](installing-linux.html#recommended-distributions)).
3. Connect to Wi-Fi
4. Open a terminal, then update and install `curl`
    * `sudo apt update`
    * `sudo apt install curl`
5. Run the Firmware Utility Script
    * `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
6. Select the option to update Full ROM
7. Follow on screen instructions
8. After rebooting continue from [AltOS](altos.html)
9. You can now restore write protection


## Upgrading from GalliumOS installed via chrx

{: .warning }
RW_LEGACY is not recommended on EOL devices, consider switching to Full ROM.
For more details read [About the Firmware](allaboutfirmware.html) page.

1. Boot to ChromeOS
2. Connect to Wi-Fi
3. Open a terminal, then update and install `curl`
    * `sudo apt update`
    * `sudo apt install curl`
4. Run the Firmware Utility Script
    * `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
5. Select the option to update RW_LEGACY
    * Alternatively, if you don't neet dual-boot with ChromeOS, install Full ROM instead
6. Follow on-screen instructions
7. After rebooting continue from [AltOS](altos.html)


## Upgrading from John Lewis' custom firmware

{: .note }
This custom firmware didn't stored configuration data used for identifying the hardware,
which should be restored after flashing either stock or newer custom firmware.

1. Copy `rovpd.bin` and `gbb.bin` files made by JL's install script
    * These files were originally stored in `~/Downloads` directory
2. Disable SPI flash write protection
3. Boot to your current system
4. Connect to Wi-Fi
5. Open a terminal, then update and install `curl`
    * `sudo apt update`
    * `sudo apt install curl`
6. Run the Firmware Utility Script
    * `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
7. Select the option to install Full ROM
8. Follow on-screen instructions
9. Restore RO_VPD and GBB slots with the following commands
    * `flashrom # TODO`
    * `flashrom # TODO`
10. Reboot your device
11. Because the new firmware uses Tianocore EDK2 instead of SeaBIOS, your distribution probably won't boot
    * Consult your distribution's instructions about migrating from BIOS to UEFI
    * If you want to install system from scratch, continue from [AltOS](altos.html)

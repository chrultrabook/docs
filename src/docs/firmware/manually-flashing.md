# Manually flashing roms

::: danger
Flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you're doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.
:::

1. Have your firmware rom. We will assume you already have the file you want to flash for this guide.
2. Download flashrom, then give it execute permission.
    * `cd; curl -LO https://tree123.org/chrultrabook/utils/flashrom-libpci38; chmod +x flashrom-libpci38`
3. Flash your custom ROM
    * Backup your current rom, just in case things go wrong: `./flashrom-libpci38 -p internal -r current.rom`
    * Note: Intel Chromebooks should be flashed with `--ifd -i bios` ex: `sudo ./flashrom -p internal --ifd -i bios -w coreboot.rom`
    * Flash your custom firmware: `sudo ./flashrom-libpci38 -p internal -w firmware.rom`
4. Reboot
    * Assuming it said `success` on all checks, reboot.

    ::: danger
    Do not reboot if any of the checks failed. 
    :::

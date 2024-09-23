# Manually Flashing ROMs

::: danger
Flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you are doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.
:::

1. Have your firmware rom. We will assume you already have the file you want to flash for this guide.
2. Download flashrom, then give it execute permission.
   - For most distributions: `cd; curl -LO https://files.tree123.org/utils/x86_64/gnu/flashrom; chmod +x flashrom`
   - For musl (Alpine Linux): `cd; curl -LO https://files.tree123.org/utils/x86_64/musl/flashrom; chmod +x flashrom`
3. Flash your custom ROM
   - Backup your current rom, just in case things go wrong: `./flashrom -p internal -r current.rom`
   - Note: Intel Chromebooks should be flashed with `--ifd -i bios` ex: `sudo ./flashrom -p internal --ifd -i bios -w coreboot.rom`
   - Flash your custom firmware: `sudo ./flashrom -p internal -w firmware.rom`
4. Reboot
   - Assuming it said `success` on all checks, reboot.

::: danger
Do not reboot if any of the checks failed.
:::

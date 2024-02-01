# Manually Flashing ROMs

::: danger
Flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you're doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.
:::

## Persisting the board's Vital Product Data (VPD)

The firmware in all ChromeOS devices contains a section (RO_VPD) which stores board-specific data, like the serial number, localization settings, and on many devices which have an Ethernet port, the LAN MAC address as well. When flashing via the Firmware Utility Script, the script will automatically extract this from the running firmware and inject it into the firmware to be flashed, so the device serial, LAN MAC address, etc are all maintained. Without this, the device will use a default/generic LAN MAC address set by coreboot. While not ideal, this is only really an issue if two or more of the same device are on the same LAN segment (or you're statically assigning IP addresses based on MAC). But for completeness, if flashing the UEFI firmware or shellball ROM, we'll extract the VPD (either from the board itself or a backup made by the script) and inject it into the firmware to be flashed.

::: tip
You don't need to do this if flashing a stock firmware backup created by the Firmware Utility Script; that image already contains the VPD.
:::

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

## Flashing

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

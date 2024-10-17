# Manually Flashing ROMs

::: danger
Flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you are doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.
:::

1. Have your firmware rom. We will assume you already have the file you want to flash for this guide.
2. Download flashrom, cbfstool, and gbb utility, decompress, and ensure they are executable:
   - For most distributions: `cd; curl -LO https://files.tree123.org/utils/x86_64/gnu/flashrom; chmod +x flashrom`
   - For musl (Alpine Linux): `cd; curl -LO https://files.tree123.org/utils/x86_64/musl/flashrom; chmod +x flashrom`
   - `wget https://mrchromebox.tech/files/util/cbfstool.tar.gz && tar -zxf cbfstool.tar.gz && chmod +x cbfstool`
   - `wget https://mrchromebox.tech/files/util/gbb_utility.tar.gz && tar -zxf gbb_utility.tar.gz && chmod +x gbb_utility`

3. Flash your custom ROM
   - Backup your current firmware (just in case things go wrong):
     `sudo ./flashrom -p internal -r backup.rom`
   - Extract your VPD from your backup:
     `./cbfstool backup.rom read -r RO_VPD -f vpd.bin`
   - Inject the VPD into your custom ROM:
         `./cbfstool coreboot.rom write -r RO_VPD -f vpd.bin`
   - Extract your HWID and inject it into the custom ROM (if it exists)
       - if your current firmware came from the firmware utility script run
         - `./cbfstool backup.rom extract -n hwid -f hwid.txt`
       - if it is stock firmware then run
         - `./gbb_utility backup.rom --get --hwid > hwid.txt`
       - `./cbfstool coreboot.rom add -n hwid -f hwid.txt`
   - Flash your custom firmware:
       - AMD devices: `sudo ./flashrom -p internal -w coreboot.rom`
       - Intel devices: `sudo ./flashrom -p internal --ifd -i bios -w coreboot.rom`
4. Reboot
   - Assuming flashrom shows `success` at the end of the process, reboot.

::: danger
Do not reboot if any of the checks failed.
:::

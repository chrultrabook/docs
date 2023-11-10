---
title: Debugging
layout: default
nav_order: 19
parent: Advanced
---

## Debugging

This page has instructions on using multiple different utilities to debug issues and modify parts of your system.

-----------

### Grabbing Logs

* If you're experiencing firmware bugs, provide output from `cbmem` console.
* If you're experiencing issues with Linux, provide output from `dmesg`, `dmidecode` and `journalctl` or `/var/log/messages`, respectively
* Ift you're experiencing issues with Windows, provide screenshots from Device Manager, Event Viewer, coredumps etc.
* If you're experiencing issues with macOS, please ask for help in the Chrultrabook Discord, in the #hackintosh channel. 

-----------

### Firmware

To debug firmware, you will need the following tools:

1. `cbmem` - To view Coreboot logs
2. `ectool` - To interface with ChromeOS Embedded Controller
3. SuzyQ - If you're experiencing severe system instability (lockups, crashes), preventing you from on-device debugging.

To dump the cbmem buffer, follow these steps:
1. Download the tar archive from MrChromebox's website:
  * `wget https://mrchromebox.tech/files/util/cbmem.tar.gz`
2. Unzip the file and give the binary executable permissions:
  * `tar -xf cbmem.tar.gz;rm cbmem.tar.gz;chmod +x cbmem`
3. Run `cbmem` and pipe it's output to `cbmem.log` file:
  * `sudo ./cbmem -c > cbmem.log`
4. Upload `cbmem.log` file for further analysis.

To interface with the Embedded Controller:
1. Download the tar archive from MrChromebox's website:
  * `wget https://mrchromebox.tech/files/util/ectool.tar.gz`
2. Unzip the file and give the binary executable permissions:
  * `tar -xf ectool.tar.gz;rm ectool.tar.gz;chmod +x ectool`
3. Issue commands to EC by executing commands, for example setting the fan to 100%:
  * `sudo ./ectool --name=cros_ec fanduty 100`
  * Running `./ectool help` will provide you with a list of available commands, or you can take a look at ectool's source code directly:
https://chromium.googlesource.com/chromiumos/platform/ec/+/master/util/ectool.c#63

-----------

### SuzyQ Debug Cable
If you need to use SuzyQ, you can use `minicom` or `picocom` for example. It exposes three serial devices:
1. AP (CR50) console under /dev/ttyUSB0:
  * `minicom -D /dev/ttyUSB0 -b 115200`
2. Coreboot/platform serial under /dev/ttyUSB1:
  * `minicom -D /dev/ttyUSB1 -b 115200`
3. Embedded Controller console under /dev/ttyUSB2
  * `minicom -D /dev/ttyUSB2 -b 115200`

* Platform serial can be used to debug the payload or kernel, but you need to re-compile coreboot with following configuration options enabled:
`CONSOLE_SERIAL=y`
`EDK2_SERIAL_SUPPORT=y`
* To use SuzyQ as platform debugger, you will also need to append the following to your kernel commandline:
`loglevel=15 console=ttyS4,115200n8`

-----------

### ACPI and Linux kernelspace

1. Download our debugging script.
  * `cd ~/Desktop;wget https://raw.githubusercontent.com/chrultrabook/linux-tools/main/debugging.sh`

  It will dump:
  * ACPI tables from sysfs (`/sys/firmware/acpi/*`)
  * DMI information (`dmidecode`)
  * Coreboot buffer (`cbmem`)
  * Linux kernel logs (`dmesg`)
  * List of PCI devices (`lspci`)
  * List of USB devices (`lsusb`)
  * Information about soundcards present in the system and their configuration

  Into `debug-logs.tar.gz` archive on your desktop.

2. Run it: `chmod +x debugging.sh;./debugging.sh`

3. Upload this file if you need help with troubleshooting.
  * Remember to remove WiFi information from dmesg to protect your privacy.

-----------

### flashrom

Flashrom is used to read and write from the SPI flash


Read flash:
  * `sudo flashrom -p <programmer> -r <filename.rom>`
  * Example:
    * `sudo flashrom -p internal -r backup.rom`

{: .warning }
If you have an Intel Chromebook, you will need to add `--ifd -i bios` if you want to write to the flash or else flashrom will fail.

Write flash:
  * `sudo flashrom -p <programmer> -w <filename.rom>`
  * Intel Example:
    * `sudo flashrom -p internal --ifd -i bios -w stock.rom`
  * AMD Example:
    * `sudo flashrom -p internal -w stock.rom`

Write protection:

View status:
  * `sudo flashrom -p internal --wp-status`
 
Enable WP:
 * `sudo flashrom -p internal --wp-enable`
  
Disable WP:
 * `sudo flashrom -p internal --wp-disable`
  
Clear WP range:
 * `sudo flashrom -p internal --wp-range 0 0`

Common programmers:
* `internal`: Use this when you run flashrom on the chromebook you want to program.
* `ch341a_spi`: Use this when you use a ch341a external programmer.
* `raiden_debug_spi:target=AP`: Use then when you want to flash using a Suzy-Q cable.

-----------

### gsctool

gsctool is used to communicate with the GSC (Google Security Chip) from ChromeOS and is usually used to unlock CCD without removing the back of the Chromebook.

View status:
  * `sudo gsctool -a -I`

Unlock CCD:
  * `sudo gsctool -a -o`
  * This will prompt you multiple times to press the power button, on the last time, the device will reboot back into verified mode



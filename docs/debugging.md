---
title: Debugging
layout: default
nav_order: 16
---

## Debugging

This page has instructions on using multiple different utilities to debug issues and modify parts of your system

-----------

## dmesg

### dmesg is used to view kernel logs

* `sudo dmesg > dmesg.log`

-----------

## cbmem

### cbmem is used to view coreboot logs

* `wget https://mrchromebox.tech/files/util/cbmem.tar.gz`
* `tar xf cbmem.tar.gz`
* `rm cbmem.tar.gz`
* `sudo ./cbmem -c > cbmem.log`

-----------

## Linux audio server

### run this script to get a log from your audio server

* `wget https://cdn.discordapp.com/attachments/1121994891950559283/1126689828063412234/audio-debug.sh`
* `chmod +x audio-debug.sh`
* `./audio-debug.sh`

-----------

## minicom

### minicom is used to get a serial console on your device, this is useful when you have a Suzy-Q cable

CR50 console:
* `sudo minicom -D /dev/ttyUSB0`
cbmem/os console:
* `sudo minicom -D /dev/ttyUSB1`
EC console:
* `sudo minicom -D /dev/ttyUSB2`

-----------

## flashrom

### flashrom is used to read and write from the SPI flash

Read flash:
* `sudo flashrom -p <programmer> -r <filename.rom>`
Example:
* `sudo flashrom -p internal -r backup.rom`

Write flash:
* `sudo flashrom -p <programmer> -w <filename.rom>`
Example:
* `sudo flashrom -p internal -w stock.rom`

Write protection:

View status:
* `sudo flashrom -p internal --wp-status`
Enable:
* `sudo flashrom -p internal --wp-enable`
Disable:
* `sudo flashrom -p internal --wp-disable`
Clear WP range:
* `sudo flashrom -p internal --wp-range 0 0`

Common programmers:
* `internal`: use this when you run flashrom on the chromebook you want to program
* `ch341a_spi`: use this when you use a ch341a external programmer
* `raiden_debug_spi:target=AP`: use then when you want to flash using a Suzy-Q cable

-----------

## gsctool

### gsctool is used to communicate with the GSC (Google Security Chip) from ChromeOS and is usually used to unlock CCD without removing the back of the chromebook

View status:
* `sudo gsctool -a -I`
Unlock CCD:
* `sudo gsctool -a -o`
* This will prompt you multiple times to press the power button, on the last time, the device will reboot back into verified mode
-----------

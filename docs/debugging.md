---
title: Debugging
layout: default
nav_order: 16
---

## Debugging

This page has instructions on using multiple different utilities to debug issues and modify parts of your system.

-----------

### dmesg

dmesg is used to view kernel logs

To grab a log, run:
  * `sudo dmesg > dmesg.log`

-----------

### cbmem

cbmem is used to view coreboot logs

1. Download the binary
  * `wget https://mrchromebox.tech/files/util/cbmem.tar.gz`
2. Unzip the file
  * `tar xf cbmem.tar.gz`
3. Remove the tar file 
  * `rm cbmem.tar.gz`
4. Run `cbmem`.
  * `sudo ./cbmem -c > cbmem.log`

-----------

## Linux Audio Server

Run this script to get a log from your audio server

1. Download the binary
  * `wget https://cdn.discordapp.com/attachments/1121994891950559283/1126689828063412234/audio-debug.sh`
2. Give it execute permissions
  * `chmod +x audio-debug.sh`
3. Run the file  
  * `./audio-debug.sh`

-----------

### minicom

`minicom` is used to get a serial console on your device, this is useful when you have a Suzy-Q cable

To launch a CR50 console:
  * `sudo minicom -D /dev/ttyUSB0`
To launch a cbmem / OS console:
  * `sudo minicom -D /dev/ttyUSB1`
To launch a EC console:
  * `sudo minicom -D /dev/ttyUSB2`

-----------

## flashrom

Flashrom is used to read and write from the SPI flash

Read flash:
  * `sudo flashrom -p <programmer> -r <filename.rom>`
  * Example:
    * `sudo flashrom -p internal -r backup.rom`

Write flash:
  * `sudo flashrom -p <programmer> -w <filename.rom>`
  * Example:
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

-----------

---
title: All About Firmware
layout: default
nav_order: 7
---


## All About Firmware

### Firmware Types

----------------------

**RW_LEGACY**
* Updates/replaces the stock RW_LEGAGY payload (SeaBIOS or edk2) included on many older models; supplements the ChromeOS / secure boot payload (depthcharge)
* Leaves all stock functionality intact, including the Developer Mode boot screen and Recovery Mode functionality
* Allows device to dual-boot another OS alongside ChromeOS
* Does not require disabling the firmware write-protect
* Carries zero risk of bricking the device
* On many models, includes bugfixes and enables additional functionality
* Required to boot windows on zen2 devices (Ryzen 3000)

{: .highlight }
Do not run Windows on RW_LEGACY unless you have a Ryzen device. The RW_LEGACY firmware is for users who want to dual-boot ChromeOS + Linux, or users who want to run Linux without having to open the device/disable the firmware write-protect (and are ok with the accompanying limitations). Or for Ryzen users that require booting from stock firmware for windows to function properly.


**(UEFI) Full ROM**
* A complete firmware image which includes updated/customized versions of the hardware init component (coreboot) and UEFI boot payload (edk2)
* Removes the developer mode boot ("OS verification is OFF") screen
* Completely removes the ability to run ChromeOS (and ChromeOS Recovery Mode), creating a small risk of bricking your device
* Offers the best support for booting all OSes besides ChromeOS
* Adds full hardware support for virtualization (vmx / VT-x)
* Fixes many bugs and/or idiosyncrasies associated with the stock firmware
* UEFI firmware contains updated EC firmware as well, which brings additional fixes on most Chromebooks (mainly keyboard related)
* Requires installation of a UEFI-compatible OS after flashing
* Essentially turns your ChromeOS device into a "regular" PC / laptop

{: .highlight }
The (UEFI) Full ROM firmware is the best option for all users who no longer need/want to run ChromeOS (ie, want to run Linux/Windows/MacOS exclusively), and who don't mind disabling write-protection on their device

<br>

---------------

### Cloning & Building ROMs

{: .warning }
Building and flashing your own firmware has the potential to brick your device! Do not do this unless you are sure you know what you're doing/have a way to recover from a bad flash. Some level of knowledge with using the linux command line is required!

1. **Install tools and libraries needed for coreboot:**
  * Debian based distros: `sudo apt-get install -y bison build-essential curl flex git gnat libncurses5-dev m4 zlib1g-dev`
  * Arch based distros: `sudo pacman -S base-devel curl git gcc-ada ncurses zlib`
  * Redhat based distros: `sudo dnf install git make gcc-gnat flex bison xz bzip2 gcc g++ ncurses-devel wget zlib-devel patch`
2. **Clone the repository:**
    * `git clone https://github.com/mrchromebox/coreboot --depth 1`
3. **`cd` to the coreboot folder, then build the coreboot toolchain**
    * `make crossgcc-i386 CPUS=$(nproc)`
4. **Make changes now, if needed.**
    * Common changes include:
        * Replacing the default logo (`Documentation/coreboot_logo.bmp`)
        * Changing version string (`CONFIG_LOCALVERSION`)
5. **Build the ROM**
    * create build dir: `mkdir -p ~/dev/firmware`
    * `./build-uefi.sh <boardname>`
    * For example, `./build-uefi.sh leona`
    * Roms will be stored in `~/dev/firmware`
6. **Download flashrom, then give it execute permission.**
    * 'cd; curl -LO https://elly.rocks/tmp/coreboot-development/flashrom-alderlake; chmod +x flashrom-alderlake'
7. **Flash your custom ROM**
    * Backup your current rom, just in case things go wrong: './flashrom-alderlake -p internal -r current.rom'
    * Flash your custom firmware: `sudo ./flashrom-alderlake -p internal -w ~/dev/firmware//coreboot_edk2-<boardname>-mrchromebox_<yearmonthdate>.rom` 
8. **Reboot**
    * Assuming it said `success` on all checks, reboot.

   {: .warning }
    Do not reboot if any of the checks failed. 

--------------

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="getting-started.html">← Getting Started</a> 
</td>
<td width="50%" style="text-align: right">
<a href="firmware.html">Flashing Firmware →</a> 
</td>
</tr>
</table>

---
title: Compiling Custom Firmware
layout: default
nav_order: 17
---

### Cloning & Building ROMs

<br>

{: .warning }
Building and flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you're doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.

1. **Install tools and libraries needed for coreboot:**
  * Debian based distros: `sudo apt-get install -y bison build-essential curl flex git gnat libncurses5-dev m4 zlib1g-dev`
  * Arch based distros: `sudo pacman -S base-devel curl git gcc-ada ncurses zlib`
  * Redhat based distros: `sudo dnf install git make gcc-gnat flex bison xz bzip2 gcc g++ ncurses-devel wget zlib-devel patch openssl libuuid-devel nasm`
2. **Clone the repository:**
    * `git clone https://github.com/mrchromebox/coreboot`
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
    * `cd; curl -LO https://elly.rocks/tmp/coreboot-development/flashrom-alderlake; chmod +x flashrom-alderlake`
7. **Flash your custom ROM**
    * Backup your current rom, just in case things go wrong: `./flashrom-alderlake -p internal -r current.rom`
    * Flash your custom firmware: `sudo ./flashrom-alderlake -p internal -w ~/dev/firmware/coreboot_edk2-<boardname>-mrchromebox_<yearmonthdate>.rom` 
8. **Reboot**
    * Assuming it said `success` on all checks, reboot.

   {: .warning }
    Do not reboot if any of the checks failed. 

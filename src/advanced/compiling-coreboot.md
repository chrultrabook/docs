### Cloning & Building ROMs

<br>

{: .warning }
Building and flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you're doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.

1. **Install tools and libraries needed for coreboot:**
  * Debian based distros: `sudo apt-get install -y bison build-essential curl flex git gnat imagemagick libncurses5-dev m4 nasm python-is-python3 uuid-dev zlib1g-dev`
* Arch based distros: `sudo pacman --needed -S base-devel curl git gcc-ada ncurses zlib nasm imagemagick`
  * Redhat based distros: `sudo dnf install git make gcc-gnat flex bison xz bzip2 gcc g++ ncurses-devel wget zlib-devel patch openssl libuuid-devel nasm texinfo`
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
    * `cd; curl -LO https://tree123.org/chrultrabook/utils/flashrom-libpci38; chmod +x flashrom-libpci38`
7. **Flash your custom ROM**
    * Note: Intel Chromebooks should be flashed with `--ifd -i bios` ex: `sudo ./flashrom -p internal --ifd -i bios -w coreboot.rom`
    * Backup your current rom, just in case things go wrong: `./flashrom-libpci38 -p internal -r current.rom`
    * Flash your custom firmware: `sudo ./flashrom-libpci38 -p internal -w ~/dev/firmware/coreboot_edk2-<boardname>-mrchromebox_<yearmonthdate>.rom` 
8. **Reboot**
    * Assuming it said `success` on all checks, reboot.

   {: .warning }
    Do not reboot if any of the checks failed. 

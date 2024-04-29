# FAQ

::: tip
Please read this page before asking a question on the Forum. Your help request will be pointed to the docs otherwise.
:::

## General questions

### What OS should I use?
* This depends on your use case. Only you can answer this question. <!-- Not ubuntu plz -->

### My internal keyboard doesn't work, can I use an external keyboard to get into developer mode?
* No. The hotkeys will only work on the internal keyboard. Chromeboxes do not have this restriction.

### I just want to boot Linux from USB on my Chromebook, what do I need to do?
* Check the Supported Devices page, to ensure your device has functional RW_LEGACY firmware available. If so, flash RWL (RW_LEGACY firmware) and use that.

### Can I disable power-on when I open my Chromebook?
* No. In what situation would you open your chromebook without the intention of turning it on anyways.

### My Chromebook powers back on when I turn it off. How can I fix this?
* You don't. Specific Chromebooks have this bug which takes too much effort to debug. If you were looking to disable power-on when you open the lid because of this, they are completely unrelated.

### I just installed the UEFI firmware, and now my device boots to a black screen that says 'shell' - what do I do?
* You're in the EFI shell; the firmware boots there when it can't find a valid UEFI boot device, either externally (USB, SD) or internally. Just type `exit` to get back to the the UEFI settings menu.

### Should I install 32 or 64-bit OS?
* The UEFI Full ROM firmware only supports 64-bit OS, so be sure to use the 'x86_64' version of whatever OS you want to install. USB media created from 32-bit ISOs will simply fail to boot.

### I'm running Legacy boot firmware now - can I switch to the UEFI firmware?
* If you're using SeaBIOS, you will likely need to re-install your Operating System. Otherwise it should work fine.

### Help! I can't exit Developer Mode!
* If you're trying to exit Developer Mode but get the error `WARNING: TONORM prohibited by GBB_FORCE_DEV_SWITCH_ON` or find the `Return to secure mode` button missing, you need to reset your GBB flags. You can do that by running [MrChromebox's firmware utility script](https://mrchromebox.tech/#fwscript) and selecting `3) Set Boot Options (GBB flags)`, followed by `5) Reset to factory default`. 
  * Then exit developer mode by choosing "Return to secure mode" on the bootup screen

### Can I modify the fan speed?
* Yes, using ectool. To set the fan to auto, run: `ectool autofanctrl`. To specify a percentage, run `ectool fanduty [0-100]`.

### Can I overclock the fan?
* No.

### I want to buy a Chromebook to run Windows or Linux or macOS -- which should I buy?
* Any 64 bit chromebook will work in Windows and Linux. Some require paid drivers (Windows only). If you're looking to buy for macOS, you will need a chromebook with an 10th generation intel cpu or lower, Celeron/Pentium are not supported. 

<br>

## Windows questions

### Should I use Windows 10 or 11?
* Windows 11 is required for TB4 users. If you don't have Thunderbolt 4, you may use both 10 or 11.

### Can I pay for Windows drivers using PayPal?
* You can pay via PayPal in Patreon.

### My balance shows zero on coolstars portal, what should I do?
* It may take up to 48 hours for balance to appear in her portal, though it is normally less then 2.

### How do I buy the Windows audio/Thunderbolt drivers?
* Please see [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html) for a step by step tutorial on purchasing drivers.

### Can I get AVS or SOF drivers for free?
* No. Only the Linux drivers are free.

### Why is there a license error in Device Manager after installing audio drivers?
* You messed up the license setup. Please refer to [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html).

### Will the audio driver still work when re-installing Windows?
* Yes, on the device the license was created. If the internal drive was replaced, see below.

### I upgraded my Chromebooks' internal drive and my audio/Thunderbolt 4 license is not working, what do I do?
* The license is tied to the serial number of your internal drive. **You do not need to buy another license**. Send CoolStar a message through Patreon, and wait for about a week.

### How do I buy Windows audio drivers in bulk?
* A discount is only available for Chromebooks containing an `Intel 6th gen processor (up to Core i5)`, `N3350`, `N4000`, or, `N4020` processor, otherwise you must pay full price. You must purchase 10 or more licenses to be eligible for a discount. If you are eligible for a discount, you should ask in the [Chrultrabook Forum](https://forum.chrultrabook.com).

### Can I use one driver license across multiple devices?
* No. One license per device.

<br>

## Linux Questions

### How come audio isn't working on Ubuntu / Ubuntu forks?
* Ubuntu and Ubuntu-based distros may have issues and are not supported, try switching to another distro. Debian is a great alternative if you are used to ubuntu.

### What Linux distros are recommended?
* See [this page](installing/installing-linux.md).

### How can I get audio working under Linux?
* Please see [this github repo](https://github.com/WeirdTreeThing/chromebook-linux-audio)

### How do I get my top row keys on Linux to act like how they did on chromeOS?
* Follow the instructions [in this github repo](https://github.com/WeirdTreeThing/cros-keyboard-map).

### I'm using the UEFI firmware, installed my OS [Linux], and it still boots to the EFI shell - what do I do?
* Sounds like your Linux distro doesn't install the EFI bootloader in the default location - no worries, it's an easy fix:
  * Type `exit` to return to the UEFI settings menu, then select Boot Maintenance Manager. From there, select Boot From File, then navigate to and boot from `/EFI/[distro name]/grubx64.efi` (where [distro name] will be fedora, arch, debian, etc). Once your OS is booted, open a terminal/shell, and type the following (observing case):

   * `sudo su`
   * `mkdir -p /boot/efi/EFI/BOOT`
   * `cp /boot/efi/EFI/[distro name from above]/grubx64.efi /boot/efi/EFI/BOOT/BOOTX64.efi`

   * Then reboot to test. What we're doing is copying the grub EFI boot stub from the OS installed location to the location the firmware is expecting (/EFI/BOOT/BOOTX64.efi) on the EFI system partition (ESP), which most (Debian/Ubuntu-based?) distros will mount at /boot/efi. You may need to adjust slightly for your distro, but these instructions should work in most cases.

<br>

## Hackintosh questions

### Can I hackintosh my Celeron/Pentium CPU?
* No.

# FAQ

::: tip
Please read this page before asking a question in the Discord. Your help request will be ignored if the answer is found on the FAQ.
:::

#### Can I pay for Windows drivers using PayPal?
* You can pay via PayPal in Patreon.

#### How do I buy the Windows audio/Thunderbolt drivers?
* Please see [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html) for a step by step tutorial on purchasing drivers.

#### Can I get AVS or SOF drivers for free?
* No. Only the Linux drivers are free.
  
#### How come audio isn't working on Ubuntu / Ubuntu forks?
* Ubuntu distros that are not based on 23.10 or higher may have some issues, try swtiching to a non lts version.

#### What Linux distros are recommended?
* See [this page](installing/installing-linux.md).

#### Why is there a license error in Device Manager after installing audio drivers?
* You messed up the license setup. Please refer to [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html).

#### Can I hackintosh my Celeron/Pentium CPU?
* No.

#### What OS should I use?
* This depends on your use case. Only you can answer this question. <!--- Not ubuntu plz --->

#### My internal keyboard doesn't work, can I use an external keyboard to get into developer mode?
* No. The hotkeys will only work on the internal keyboard.

#### Should I use Windows 10 or 11?
* Windows 11 is required for TB4 users. If you don't have Thunderbolt 4, you may use both 10 or 11.

#### Will the audio driver still work when re-installing Windows?
* Yes, on the device the license was created. If the internal drive was replaced, see below.

#### I upgraded my Chromebooks' internal drive and my audio/Thunderbolt 4 license is not working, what do I do?
* The license is tied to the serial number of your internal drive. **You do not need to buy another license**. Send CoolStar a message through Patreon, and wait for about a week.

#### How do I buy Windows audio drivers in bulk?
* A discount is only available for Chromebooks containing an `Intel 6th gen processor (up to Core i5)`, `N3350`, `N4000`, or, `N4020` processor, otherwise you must pay full price. You must purchase 10 or more licenses to be eligible for a discount. If you are eligible for a discount, you should ask in the [Chrultrabook Forum](https://forum.chrultrabook.com).

#### Can I use one driver license across multiple devices?
* No. One license per device.

#### I want to buy a Chromebook to run Windows or Linux or macOS -- which should I buy?
* Buying any Chromebook with the intention of running macOS, Windows or Linux is not a great idea. -- DO NOT EXPECT EVERYTHING TO WORK OUT OF THE BOX. Older models may fair better compatibility wise, but there are still lots of caveats, and it's not recommended to buy a Chromebook as a cheap Linux device.

#### How can I get audio working under Linux?
* Please see [here](https://github.com/WeirdTreeThing/chromebook-linux-audio)

#### How do I get my top row keys on Linux to act like how they did on chromeOS?
* Follow the instructions [here](https://github.com/WeirdTreeThing/cros-keyboard-map).

#### I just want to boot Linux from USB on my Chromebook, what do I need to do?
* Check the Supported Devices page, to ensure your device has functional RW_LEGACY firmware available. If so, flash RWL and use that.

#### I just installed the UEFI firmware, and now my device boots to a black screen that says 'shell' - what do I do?
* You're in the EFI shell; the firmware boots there when it can't find a valid UEFI boot device, either externally (USB, SD) or internally. Just type 'exit' to get back to the the UEFI settings menu.

#### Should I install 32 or 64-bit OS?
* The UEFI Full ROM firmware only supports 64-bit OS, so be sure to use the 'x86_64' version of whatever OS you want to install. USB media created from 32-bit ISOs will simply fail to boot.

#### I'm using your UEFI firmware, installed my OS [Linux], and it still boots to the EFI shell - what do I do?
* Sounds like your Linux distro doesn't install the EFI bootloader in the default location - no worries, it's an easy fix:
  * Type `exit` to return to the UEFI settings menu, then select Boot Maintenance Manager. From there, select Boot From File, then navigate to and boot from `/EFI/[distro name]/grubx64.efi` (where [distro name] will be ubuntu, arch, debian, etc). Once your OS is booted, open a terminal/shell, and type the following (observing case):

   * `sudo su`
   * `mkdir -p /boot/efi/EFI/BOOT`
   * `cp /boot/efi/EFI/[distro name from above]/grubx64.efi /boot/efi/EFI/BOOT/BOOTX64.efi`

   * Then reboot to test. What we're doing is copying the grub EFI boot stub from the OS installed location to the location the firmware is expecting (/EFI/BOOT/BOOTX64.efi) on the EFI system partition (ESP), which most (Debian/Ubuntu-based?) distros will mount at /boot/efi. You may need to adjust slightly for your distro, but these instructions should work in most cases.

#### I'm running Legacy boot firmware now - can I switch to the UEFI firmware?
* You can, but your existing OS install won't boot. You'll need to either reinstall the OS (often the easiest course of action), or you can attempt to migrate your existing install, but this isn't ideal and should be considered unsupported.

#### Can I modify the fan speed?
* Yes, using ectool. On windows this is installed along with the [`crosec` driver](https://github.com/coolstar/driverinstallers/raw/master/crosec/crosec.2.0.2-installer.exe) (will be located at `C:\Program Files\crosec\ectool.exe`), on linux you can grab it from [here](https://tree123.org/files/utils/ectool). To set the fan to auto, run: `ectool autofanctrl`. To specify a percentage, run `ectool fanduty [0-100]`.

#### Can I overclock the fan?
* No.

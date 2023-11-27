---
prev: write-protect
next: flashing-firmware
---
# Types of Firmware

### RW_LEGACY

* Updates/replaces the stock RW_LEGAGY payload (SeaBIOS or edk2) included on many older models; supplements the ChromeOS / secure boot payload (depthcharge)
* Leaves all stock functionality intact, including the Developer Mode boot screen and Recovery Mode functionality
* Allows device to dual-boot linux alongside ChromeOS
* Does not require disabling write-protect
* Carries zero risk of bricking the device
* On many models, includes bugfixes and enables additional functionality

::: warning
Do not run Windows on RW_LEGACY. The RW_LEGACY firmware is for users who want to dual-boot ChromeOS + Linux, or users who want to run Linux without having to open the device/disable the firmware write-protect (and are OK with the accompanying limitations).
:::

### (UEFI) Full ROM
* A complete firmware image which includes updated/customized versions of the hardware init component (coreboot) and UEFI boot payload (edk2)
* Removes the developer mode boot ("OS verification is OFF") screen
* Completely removes the ability to run ChromeOS (and ChromeOS Recovery Mode), creating a small risk of bricking your device
* Offers the best support for booting all OSes besides ChromeOS
* Adds full hardware support for virtualization (vmx / VT-x)
* Fixes many bugs and/or idiosyncrasies associated with the stock firmware
* UEFI firmware contains updated EC firmware as well, which brings additional fixes on most Chromebooks (mainly keyboard related)
* Requires installation of a UEFI-compatible OS after flashing
* Essentially turns your ChromeOS device into a "regular" PC / laptop

::: tip
The (UEFI) Full ROM firmware is the best option for all users who no longer need/want to run ChromeOS (ie, want to run Linux/Windows/macOS exclusively), and who don't mind disabling write-protection on their device.
:::

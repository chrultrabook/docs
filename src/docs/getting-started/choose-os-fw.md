---
prev: prerequisites
next: ../installing/
---

# Choosing an OS and Boot Method

## OS

The OS you choose to install is mostly up to your preference, but there are a few compatibility notes. The TL;DR is: Windows and Linux work on most devices with most hardware supported, macOS is supported on a few devices with some hardware supported, and all ARM devices (not Intel/AMD) only support Linux. Check the [devices page](/docs/devices.html) for more detailed notes for each supported device.

## Boot Method

There are three different ways to boot an alternate OS on your device, each with pros and cons.

### The Stock Bootloader (depthcharge)

Since ChromeOS is Linux with a custom userspace, the stock bootloader (depthcharge) can load any Linux kernel. This method works on any device and does not modify the firmware at all. It is the only option on ARM devices since they do not have any custom firmware. If you choose this method, refer to FyraLabs' [submarine guide](https://developer.fyralabs.com/submarine).

### RW_LEGACY (AltFW)

RW_LEGACY (later renamed to AltFW) is a feature in stock firmware that allows you to install a custom payload, either SeaBIOS or edk2, depending on the device. They provide either a standard BIOS or UEFI respectively. The RW_LEGACY firmware region can be written without disabling firmware write protection, which makes it fairly easy to install. RW_LEGACY is only supported on x86 devices (Intel and AMD). RW_LEGACY can only boot Linux and is mostly used to dualboot ChromeOS and Linux. Using RW_LEGACY with only Linux installed is not ideal as you have to deal with the limitations/bugs of the stock firmware, such as having to go through the developer mode screen on each boot, and having certain hardware not work, like touchscreens. If you choose this method, see the firmware flashing section below.

### UEFI Full Rom Firmware

UEFI Full Rom replaces the entire firmware with a custom build using upstream coreboot and edk2. It esentially turns your device into a regular pc with UEFI firmware. This method has the most risk as the entire firmware is being replaced. It also requires you to disable firmware write protection. Full Rom supports booting Windows, Linux, and macOS on supported devices. If you choose this method, see the firmware flashing section below.

## Firmware Flashing

If you chose to use RW_LEGACY or Full Rom firmware, you need to flash custom firmware before you can install your OS. Read the [MrChromebox](https://mrchromebox.tech) firmware flashing guide in order to flash the firmware on your device. Once you have completed the firmware installation, continue to [Installing an OS](/docs/installing/).

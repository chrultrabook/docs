---
prev: about
next: ../installing/
---
# Flashing Custom Firmware

Refer to [this page](about) for an overview of both RW_LEGACY and UEFI.

::: danger
**Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforeseen failures. If you don't have the ability to recover from a bad flash, **you're taking a risk**. Flashing Full ROM firmware will remove your ability to run ChromeOS.
:::

To convert your machine from Google's firmware and ChromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](developer-mode.md).
2. [Disable write protect](write-protect.md) (If flashing UEFI).
3. Run [MrChromebox's firmware utility script](https://mrchromebox.tech/#fwscript) within VT-2 (`ctrl` + `alt` + `f2` (right arrow)).
    * Type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
    * If you encounter certificate related errors when downloading the script from ChromeOS, then add `-k` to the `curl` and script command to bypass SSL certificate checking as so:
        * `cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
4. If you are flashing Full ROM, the firmware script will prompt you to make a backup of your stock firmware. **Store it in a safe place** (Google Drive, another PC, etc), as reverting to stock firmware without a backup is **very difficult**.
5. If there's no error, shutdown the device without worry.

::: danger
If flashing fails for UEFI, **do not shutdown** and immedietly attempt to restore stock firmware.
Otherwise, shutdown without worry.
:::

::: tip
If you unplugged the battery to [disable write protect](battery.md), you can plug it back in now. All subsequent flashing won't require it from now on.
:::

**UEFI**

It can take up to a minute for display to come up on first POST. **Do not interrupt the first boot.**

**RW_Legacy**

On the developer mode boot screen, press `CTRL` + `L`. If a selection appears, pick "Tianocore".

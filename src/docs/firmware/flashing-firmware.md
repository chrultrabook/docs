---
prev: about
next: ../installing/
---

# Flashing Custom Firmware

Refer to [this page](about) for an overview of both RW_LEGACY and UEFI.

::: danger
**Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforeseen failures. If you do not have the ability to recover from a bad flash, **you are taking a risk**. Flashing Full ROM firmware will remove your ability to run ChromeOS.
:::

To convert your machine from Google's firmware and ChromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](developer-mode.md).
2. [Disable write protect](write-protect.md) (If flashing UEFI).
3. Run [MrChromebox's firmware utility script](https://mrchromebox.tech/#fwscript) within VT-2 (`ctrl` + `alt` + `f2` (right arrow)).
   - Type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
   - If you encounter certificate related errors when downloading the script from ChromeOS, then add `-k` to the `curl` and script command to bypass SSL certificate checking as so:
     - `cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
4. If you are flashing Full ROM, the firmware script will prompt you to make a backup of your stock firmware. **Store it in a safe place** (Google Drive, another PC, etc), as reverting to stock firmware without a backup is **very difficult**.
5. If there's no error, shutdown the device without worry.

::: danger
If flashing fails for UEFI, **DO NOT SHUTDOWN** and immediately attempt to restore stock firmware.
Otherwise, shutdown without worry.
:::

::: tip
If you unplugged the battery to [disable write protect](battery.md), you can plug it back in now. All flashes after this will not require you to unplug the battery.
:::

## Booting

### UEFI

It can take up to a minute for display to come up on first POST. **Do not interrupt the first boot.**

### RW_LEGACY

On the developer mode boot screen, press Ctrl+L. If a selection appears, pick "Tianocore".

If you are met with a white "Alternative Firmware Menu" screen (after pressing Ctrl+L), press 2 to boot from USB or `0 to boot from internal storage (where you installed your Linux OS).

Further boot options can be accessed after you have entered a number, by pressing ESC as signified by the booting screen. If you wish to access these options before you've installed an OS, press 0 then ESC.

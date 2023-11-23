---
prev: index.md
next: making-recovery-usb
---

# Flashing Stock Firmware

::: warning
If your device has hit AUE (Auto Update Expiration), you will not be able to revert to chromeOS.
:::

1. If you already have Linux installed, move on to step 5. Otherwise, make a [bootable Linux live USB](../installing/bootableusb.md).

2. Connect to WiFi.

3. Open a terminal, then update and install `curl`.

   - Use the distro's package manager to install it.

4. Obtain your ROM backup.

5. Run [MrChromebox's firmware utility script](https://mrchromebox.tech/#fwscript).
    * In case you forgot, type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.

6. Choose option 2: `Restore Stock ChromeOS Firmware`.


::: tip
If, for whatever reason, lost your stock firmware backup, Use an additional drive to flash a [recovery image](making-recovery-usb.md).
:::

7. Follow on-screen instructions


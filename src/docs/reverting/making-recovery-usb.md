---
prev: flashing-stock
next: booting-recovery-usb
---

# Making a Recovery USB

::: danger
Making a Recovery USB will **wipe all data** on said drive. Back up anything if you need to.
:::

For you to reinstall chromeOS, you will need to make a Recovery USB.
There are two methods depending on the Operating System Installed.
## Chromebook Recovery Utility (Windows/ChromeOS/MacOS)
1. Download the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) from the Chrome Web Store.

2. Launch the app, then follow on-screen instructions. If you are unable to find your device, you can select the "Select a model from a list" option.

3. Select the USB drive you want to use.

4. Wait for it to complete.

## Manually Flash Recovery Image (Windows/ChromeOS/MacOS/Linux)

1. Go to [cros.tech](https://cros.tech/) and find your device.

2. Select on "Recovery Images" and select the latest one.

3. Extract the file.

#### Windows

1. You can either:
    - Use [Rufus](../installing/bootableusb.md#flashing-using-rufus-windows) but make sure to flash in "dd" mode.
    - Use the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) but open settings (gear icon) and select "Use local image".
    - Use [dd](../installing/bootableusb.md#flashing-with-dd-linux-macos)

#### macOS/ChromeOS

1. Use the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) but open settings (gear icon) and select "Use local image". 

#### Linux

1. Make sure that your USB drive is unmounted (not unplugged).

2. Open a terminal and run `lsblk`.

3. Find your USB drive. USB drives usually appear as sdXX, while SD Cards usually appear as mmcblkX.
    - If your using a SD card adapter, It might appear as sdXX instead.

4. Run `sudo dd if=PLACEHOLDER of=/dev/PLACEHOLDER bs=4M status=progress` but replace the placeholders with the path to the recovery image and USB drive respectivly.

5. Wait for it to complete, after that unplug the USB drive.

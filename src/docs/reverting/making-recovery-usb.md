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

## Chromebook Recovery Utility (Windows/ChromeOS/macOS)

1. Download the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) from the Chrome Web Store.

2. Launch the app, then follow on-screen instructions. If you are unable to find your device, you can select the "Select a model from a list" option.

3. Select the USB drive you want to use.

4. Wait for it to complete.

## Manually Flash Recovery Image (Windows/ChromeOS/macOS/Linux)

1. Go to [cros.tech](https://cros.tech/) and find your device.

2. Click on the "Recovery Images" dropdown and select the latest one.

3. Extract the file.

### Windows

Use [Rufus](../installing/bootableusb.md#flashing-using-rufus-windows) to flash the recovery .bin file to USB but make sure to flash in "dd" mode.

### macOS/ChromeOS/Linux

Use [dd](../installing/bootableusb.md#flashing-with-dd-linux-macos) to flash the recovery .bin file to USB.

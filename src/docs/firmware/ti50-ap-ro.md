---
prev: write-protect
next: false
---
# Disabling RO firmware protection on Ti50

::: tip
This is only applicable to devices with a Ti50 security chip, which is typically found in devices released during or after mid-2023.
:::

::: tip
If you disabled WP via CCD and reset your CCD flags with `ccd reset factory`, you can skip this step.
:::

<br>

## Step 1: Verify the device has a Ti50

1. Open VT-2 (`ctrl` + `alt` + `f2` (right arrow)).
2. Login as `root`.
3. Run `gsctool -a -I | grep AllowUnverifiedRo`.
4. If that command has any output, your device has a Ti50. If you get no output or an error, your device either has a Cr50 or no GSC at all.

## Step 2: Disable RO verification

1. Unlock the GSC by running `gsctool -a -o`.
2. Run `gsctool -a -I AllowUnverifiedRo:always`.
3. Press the power button when prompted.

::: warning
If your device has a Ti50 and you don't disable RO verification, flashing full rom will brick the device (can be recovered with steps listed below).
:::

## Recovering a device bricked due to RO verification

### Chromebooks

1. Press and hold the `Power` button.
2. Press the `Refresh` (arrow icon) button twice.
3. Release the `Power` button.
4. Repeat the above steps a second time.

### Chromeboxes

1. Press and hold the `Power` button.
2. Press the recovery pinhole button twice.
3. Release the `Power` button.
4. Repeat the above steps a second time.

### Tablets

1. Press and hold the `Power` button.
2. Press and hold `Volume Up` for 10+ seconds. Release and repeat it a second time.
3. Release the `Power` button.
4. Repeat the above steps a second time.

This will disable RO verification for 15 minutes, allowing you to permanently disable it.

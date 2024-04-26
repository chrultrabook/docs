---
prev: known-issues
next: write-protect
---
# Developer Mode

Enabling [developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md) is the first step to running an alternate OS on your chromebook! Developer Mode is an alternate mode that all chromeOS devices have that opens up the ability to make unverified changes to the operating system and hardware.

::: danger
Doing this will wipe **all** user data! Make backups if needed before proceeding.
:::

::: tip
The battery must be plugged in while enabling developer mode, UNLESS you don't have a write protect screw, in that case, plug your chromebook into the charger.
:::

## Enabling Developer Mode

First, enter [recovery mode](recovery-mode.md). Then proceed with the following instructions for your device.

### Chromebooks/Chromeboxes

1. Press Ctrl+D. This should bring up a warning asking for confirmation for either "Turn OS Verification OFF" or "Enable Developer Mode".

2. Press Enter. The system should reboot and bring you to the "You are in Developer Mode" or "OS Verification is OFF" screen.

3. Press Ctrl+D to boot from internal disk.

4. Setup the system like normal, but **do not enable debugging features**.

### Tablets

1. Press `Volume Up` + `Volume Down` to bring up the menu selection screen.

2. Use the `Volume Up` and `Volume Down` to navigate to "Confirm Enabling Developer Mode", then press `Power` to select it. The system should reboot and bring you to the "OS Verification is OFF" screen.

3. Select "Developer Options", then select "Boot from Internal Disk".

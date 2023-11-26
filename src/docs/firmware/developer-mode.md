---
prev: known-issues
next: write-protect
---
# Enabling developer mode

Enabling [developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md) the the first step to running an alternate OS on your chromebook!

::: danger
Doing this will wipe **all** user data! Make backups if needed before proceeding.
:::

::: danger
Do not continue if your device is currently owned or enrolled by a organization, such as a school or employer. Unless you were given permission by your organization, its a crime.
:::

::: tip
The battery must be plugged in while enabling developer mode.
:::

Developer Mode is an alternate mode that all chromeOS devices have that opens up the ability to make unverified changes to the operating system and hardware.

1. Enter [recovery mode](recovery-mode.md).

#### Chromebooks/Chromeboxes

1. Press `CTRL` +  `D` at the same time. This should bring up a warning asking for confirmation for either "Turn OS Verification OFF" or "Enable Developer Mode".

2. Press `Enter`. The system should reboot and bring you to the "You are in Developer Mode" or "OS Verification is OFF" screen.

3. Press `CTRL` +  `D` to boot from internal disk.

4. Setup the system like normal, but **do not enable debugging features**.

#### Tablets

1. Press `Volume Up` + `Volume Down` to bring up the menu selection screen.

2. Use the `Volume Up` and `Volume Down` to navigate to  "Confirm Enabling Developer Mode", then press `Power` to select it. The system should reboot and bring you to the OS Verification is OFF" screen.

3. Select "Developer Options", then select "Boot from Internal Disk".

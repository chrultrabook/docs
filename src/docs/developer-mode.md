## Enabling developer mode

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

1. Enter [recovery mode](recovery-mode.html).

2. Press `CTRL` +  `D` at the same time. This should bring up a warning asking for confirmation for either "Turn OS Verification OFF" or "Enable Developer Mode".

3. Press `Enter`. The system should reboot and bring you to the "You are in Developer Mode" or "OS Verification is OFF" screen.

4. Press `CTRL` +  `D` to boot from internal disk.

4. Setup the system like normal, but **do not enable debugging features**.

<table>
<tr>
<td class="navtable-l">
<a href="recovery-mode.html">← Recovery Mode</a> 
</td>
<td class="navtable-r">
<a href="flashing-firmware.html">Flashing Firmware →</a> 
</td>
</tr>
</table>

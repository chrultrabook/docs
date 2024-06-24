---
prev: ./
next: false
---
# Post Install

::: tip
Install [Chrultrabook Controller](https://github.com/death7654/Chrultrabook-Controller/releases) for fan controls, keyboard backlight controls, system information and more.
:::

## Windows

### Drivers and QOL improvements
* Compress the install with `compact.exe /compactos:always` in a Command Prompt with admin privileges if necessary.
* Install [CoolStar's drivers](https://coolstar.org/chromebook/windows-install.html) if you haven't already
* Buy audio and Thunderbolt/USB4 drivers (if needed), see [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html)

### CELES Post Install Workaround

1. Boot the Windows install media you used to install Windows.
2. Click "Repair my computer" and select the Command Prompt option.
3. Type `bcdedit /set {default} useplatformclock true` and press Enter.
4. Reboot

## Linux

### General QOL Fixes

* Run the [audio script](https://github.com/WeirdTreeThing/chromebook-linux-audio) if you haven't already.
* Run the [cros-keyboard-map](https://github.com/WeirdTreeThing/cros-keyboard-map) script to remap top row FX keys.

### Fixing USB C on TigerLake and AlderLake

1. Create a file called `chromebook-usbc.service` file in `/etc/systemd/system/`
2. Paste the following contents into the file:

   ```
   [Unit]
   Description=Enable USB-C on chromebook
   
   [Service]
   Type=oneshot
   RemainAfterExit=yes
   ExecStartPre=/sbin/modprobe -r -a cros-ec-typec intel-pmc-mux
   ExecStart=/sbin/modprobe -a intel-pmc-mux cros-ec-typec
   
   [Install]
   WantedBy=multi-user.target
   ```

3. Enable the systemd service by typing `systemctl enable --now chromebook-usbc.service`, then it should work.

### CELES Post Install Workaround

If you experience issues in applications such as Parsec, or encounter disruptive freezes, adding the kernel parameters `clocksource=hpet hpet=force` may fix your problem. The following instructions assume you're using GRUB, and will be different for other bootloaders. Do your own research on how to set kernel parameters in your bootloader if these do not apply.

1. Edit `/etc/default/grub` with your preferred text editor (e.g. nano).
2. Add `clocksource=hpet hpet=force` inside of GRUB_CMDLINE_LINUX_DEFAULT and save your changes. If you exclude either parameter, this will not work. Use sudo, su, or doas if necessary.
3. Type `grub-mkconfig -o /boot/grub/grub.cfg` or `update-grub` into a terminal and press Enter. Use sudo, su, or doas if necessary.
4. Reboot

## macOS 

* [Remove Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html#macos-decluttering)
* [OpenCore GUI Setup](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-opencore-s-gui)
* Disable `DevirtualiseMmio` if you're on CometLake (10th gen)

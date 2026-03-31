---
prev: ./
next: false
---

# Post Install

::: tip
Install [Chrultrabook Tools](https://github.com/death7654/Chrultrabook-Tools/releases) for fan controls, keyboard backlight controls, system information and more.
:::

## Windows

### Drivers and QOL improvements

- Compress the install with `compact.exe /compactos:always` in a Command Prompt with admin privileges if necessary.
- Automatic
   * Use [One Click Driver Installer](https://github.com/death7654/Chromebook-Driver-Installer) To install drivers
- Manual
   * Install [CoolStar's drivers](https://coolstar.org/chromebook/windows-install.html) if you haven't already
- Buy audio and Thunderbolt/USB4 drivers (if needed), see [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html)

### CELES Post Install Workaround (Windows)

1. Boot the Windows install media you used to install Windows.
2. Click "Repair my computer" and select the Command Prompt option.
3. Type `bcdedit /set {default} useplatformclock true` and press Enter.
4. Reboot

### Doing an in-place upgrade (espetialy for Windows 11)

1. Download the Windows .iso and then mount it.
2. Click on the top bar and write cmd
3. Type `setup /product server` for bypassing the requirements.
4. Follow the instructions that appears on the screen.
::: tip
If you encounter issues while updating, remove CoolStar's drivers (touchpad, touchscreen, audio, etc.) before retrying — they may sometimes cause problems. Reinstall them after the installation finishes.
:::

## Linux

### General QOL Fixes

- Run the [audio script](https://github.com/WeirdTreeThing/chromebook-linux-audio) if you haven't already.
- Run the [cros-keyboard-map](https://github.com/WeirdTreeThing/cros-keyboard-map) script to remap top row FX keys.

### Fixing USB C on TigerLake and AlderLake

Fedora, Debian, and Ubuntu have an issue which prevents the `cros_ec_typec` kernel driver from loading correctly. You can fix it with the following steps:

#### Fedora

1. Create a file called `chromebook_typec.conf` file in `/etc/dracut.conf.d/`
2. Paste the following contents into the file:

   ```txt
   omit_drivers+=" intel_pmc_mux "
   ```

3. Rebuild your initramfs with `sudo dracut --force`.

#### Debian and Ubuntu

1. Open the file /etc/initramfs-tools/modules 
2. Paste the follwing contents to the end of the file:

   ```txt
   cros-ec-typec
   intel-pmc-mux
   ```

3. Rebuild your initramfs with `sudo update-initramfs -u -k all`.

### CELES Post Install Workaround Possible (Linux)

If you experience issues in applications such as Parsec, or encounter disruptive freezes, adding the kernel parameters `clocksource=hpet hpet=force` may fix your problem. The following instructions assume you are using GRUB, and will be different for other bootloaders. Do your own research on how to set kernel parameters in your bootloader if these do not apply.

1. Edit `/etc/default/grub` with your preferred text editor (e.g. nano).
2. Add `clocksource=hpet hpet=force` inside of GRUB_CMDLINE_LINUX_DEFAULT and save your changes. If you exclude either parameter, this will not work. Use sudo, su, or doas if necessary.
3. Type `grub-mkconfig -o /boot/grub/grub.cfg` or `update-grub` into a terminal and press Enter. Use sudo, su, or doas if necessary.
4. Reboot

### Fixing stylus orientation in Gnome

Some Chromebooks come with USI styluses. They work fine in the newest versions of KDE Plasma, but they have a rotation issue in GNOME. The issue is that the stylus does not rotate with the screen, so it is only usable in one orientation. To fix this, we have to add an libinput override.

1. Get the device ID of your stylus
   This information can either be read from cbmem or libwacom.
   To get the ID from libwacom run this script https://github.com/linuxwacom/libwacom/blob/master/tools/show-stylus.py.
   ``` bash
   tux@fedora:~/Downloads/libwacom/tools$ sudo python ./show-stylus.py 
   Using "GDIX0000:00 27C6:0E0C Stylus": /dev/input/event5
   Using stylus file(s): /usr/share/libwacom/libwacom.stylus
   Tool id 0x1 serial 0x0 in-proximity: False 
   ^CTerminating
   Suggested line for .tablet file:
   Styli=isdv4-aes
   ```
   In this case, the device ID is `GDIX0000:00 27C6:0E0C Stylus`.

2. Create a .tablet file for libwacom
   ``` bash
   sudo mkdir -p /etc/libwacom/
   sudo nano /etc/libwacom/google-{your board name}.tablet
   ```
   Add the following content to the file:
   ``` bash
   [Device]
   Name={your device id}
   ModelName=
   DeviceMatch=i2c:{the hardware id of your stylus lowercased (in this case 27c6:0e0c)}
   Class=ISDV4
   Width=9
   Height=5
   IntegratedIn=Display;System
   #Styli=isdv4-aes
   Styli=@generic-no-eraser

   [Features]
   Stylus=true
   Touch=false
   ```
3. Create the libinput override
   ``` bash
   sudo mkdir -p /etc/libinput/
   sudo nano /etc/libinput/local-overrides.quirks
   ```
   Add the following content to the file:
   ``` bash
   [Google Chromebook {your board name} Stylus Digitizer]
   MatchUdevType=tablet
   MatchDeviceTree=*{your board name}*
   MatchBus=i2c
   ModelChromebook=1
   AttrPressureRange=1100:1000
   ```
4. Update the libwacom database and restart the system
   ``` bash
   sudo libwacom-update-db
   reboot
   ```

#### Example Files for Jinlon
Here are the example files for the Jinlon Chromebook. The device ID is `GDIX0000:00 27C6:0E0C Stylus`.

`/etc/libwacom/google-jinlon.tablet`
``` bash
[Device]
Name=GDIX0000:00 27C6:0E0C Stylus
ModelName=
DeviceMatch=i2c:27c6:0e0c
Class=ISDV4
Width=9
Height=5
IntegratedIn=Display;System
#Styli=isdv4-aes
Styli=@generic-no-eraser

[Features]
Stylus=true
Touch=false
```

`/etc/libinput/local-overrides.quirks`
``` bash
[Google Chromebook Jinlon Stylus Digitizer]
MatchUdevType=tablet
MatchDeviceTree=*jinlon*
MatchBus=i2c
ModelChromebook=1
AttrPressureRange=1100:1000
```
#### Consider Upstreaming Your Changes to libwacom
Please consider upstreaming your changes to [libwacom](https://github.com/linuxwacom/libwacom) and [wacom-hid-descriptors](https://github.com/linuxwacom/wacom-hid-descriptors). This will help other users with the same device as you. 


## macOS 

- [Remove Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html#macos-decluttering)
- [OpenCore GUI Setup](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-opencore-s-gui)
- Disable `DevirtualiseMmio` if you are on CometLake (10th gen)

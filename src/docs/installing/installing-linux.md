---
prev: ./
next: post-install
---

# Linux

Linux is a great choice for your Chromebook! Hardware support gets consistently better, and audio is free!

You may not be familiar with Linux, and there can be a slight learning curve, even on friendlier distributions.

## Distributions

Generally, any Linux distribution with a recent kernel will work on a Chromebook. We recommend the following distributions specifically:

- Alpine Linux (edge)
- Arch Linux
- Debian (testing)
- Fedora
- OpenSUSE Tumbleweed or Slowroll
- Ubuntu (Interim Releases)
- Ultramarine Linux

Distributions that follow a longer lifecycle (like Ubuntu derivatives or Linux Mint) or do not allow modifying the base system (like Universal Blue or Endless OS) may cause issues with Chromebooks.

### Distribution-Specific Notes

#### Fedora and Derivatives

If you're using Fedora or a derivative (other than Ultramarine Linux) you should consider installing the Terra repository, as it provides many utilities and tweaks for Chromebooks.

This also goes for the Fedora Atomic Desktops, as they support package layering.

Check out [Terra's documentation](https://terra.fyralabs.com).

#### Need more

## Known Issues

- Broken USB-C on TigerLake and AlderLake. See Post Install -> Linux for fix.
- No fingerprint reader support.
- Debian 12 (Bookworm) needs a custom kernel.

## Installation

If you're using AltFW, follow your distribution's installation instructions. If you're using Submarine, check for a guide for your distribution in the Submarine docs.

## Post Install

### Fixing Audio

Follow the instructions in [WeirdTreeThing's repo](https://github.com/WeirdTreeThing/chromebook-linux-audio).

:::info
If you're using Ultramarine Linux or Fedora, you can install the `alsa-ucm-cros` package from Terra instead of running this script.
:::

### Fixing USB C on TigerLake and AlderLake

Some distributions can't load the `cros_ec_typec` driver correctly. These steps will get USB-C working after suspend.

#### Fedora

If you have the Terra repository installed, or are using Ultramarine Linux, simply install the `chromebook-usbc-fix` package.

Otherwise, you can follow these instructions:

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

### Fixing Stylus Orientation in GNOME

Some Chromebooks come with USI styluses. They work fine in the newest versions of KDE Plasma, but may not respect screen rotation in GNOME. To fix this, we have to add an libinput override:

1. Get the device ID of your stylus
   This information can either be read from cbmem or libwacom.
   To get the ID from libwacom run this script https://github.com/linuxwacom/libwacom/blob/master/tools/show-stylus.py.

   ```bash
   sudo python ./show-stylus.py

   Using "GDIX0000:00 27C6:0E0C Stylus": /dev/input/event5
   Using stylus file(s): /usr/share/libwacom/libwacom.stylus
   Tool id 0x1 serial 0x0 in-proximity: False
   ^CTerminating
   Suggested line for .tablet file:
   Styli=isdv4-aes
   ```

   In this case, the device ID is `GDIX0000:00 27C6:0E0C Stylus`.

2. Create a .tablet file for libwacom

   ```bash
   sudo mkdir -p /etc/libwacom/
   sudo nano /etc/libwacom/google-{your board name}.tablet
   ```

   Add the following content to the file:

   ```bash
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
   ```bash
   sudo mkdir -p /etc/libinput/
   sudo nano /etc/libinput/local-overrides.quirks
   ```
   Add the following content to the file:
   ```bash
   [Google Chromebook {your board name} Stylus Digitizer]
   MatchUdevType=tablet
   MatchDeviceTree=*{your board name}*
   MatchBus=i2c
   ModelChromebook=1
   AttrPressureRange=1100:1000
   ```
4. Update the libwacom database and restart the system
   ```bash
   sudo libwacom-update-db
   reboot
   ```

#### Example

Here are the example files for the Jinlon Chromebook. The device ID is `GDIX0000:00 27C6:0E0C Stylus`.

`/etc/libwacom/google-jinlon.tablet`

```bash
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

```bash
[Google Chromebook Jinlon Stylus Digitizer]
MatchUdevType=tablet
MatchDeviceTree=*jinlon*
MatchBus=i2c
ModelChromebook=1
AttrPressureRange=1100:1000
```

#### Consider Upstreaming Your Changes to libwacom

Please consider upstreaming your changes to [libwacom](https://github.com/linuxwacom/libwacom) and [wacom-hid-descriptors](https://github.com/linuxwacom/wacom-hid-descriptors). This will help other users with the same device as you!

### CELES Post Install Workaround Possible (Linux)

If you experience issues in applications such as Parsec, or experience lockups, adding the kernel parameters `clocksource=hpet hpet=force` may help.

If you're using GRUB (you probably are) follow these instructions:

1. Edit `/etc/default/grub` with your preferred text editor (e.g. nano).
2. Add `clocksource=hpet hpet=force` inside of GRUB_CMDLINE_LINUX_DEFAULT and save your changes. If you exclude either parameter, this will not work. Use sudo, su, or doas if necessary.
3. Type `grub-mkconfig -o /boot/grub/grub.cfg` or `update-grub` into a terminal and press Enter. Use sudo, su, or doas if necessary.
4. Reboot

## Advanced Usage

### Partitioning Instructions for Dual Booting

After using the Firmware Utility Script to install/update RW_LEGACY, before booting a Linux distro ISO, you will need to shrink the stateful partition to create space for your Linux installation. You can do this from ChromeOS using [CRAP](https://github.com/chrultrabook/crap), a partitioning tool developed by the chrultrabook community.

::: warning
CRAP is the preferred method for resizing partitions to dual boot because it only resizes the stateful partition. Using `chrx`, which resizes the ROOT-C and KERN-C ChromeOS partitions, and changes the disk layout, can cause unintended effects.
:::

#### Using CRAP

- Run the below command from VT-2 as root. CRAP can only be run in VT-2 [Ctrl + Alt + 🡢 (F2)]
  - `bash <(curl -L https://tinyurl.com/crap-cb-01)`
- Then, follow the steps displayed onscreen.

#### Installing Linux

Continue with the guide at [Installing Linux](installing-linux.md). On the partitioning screen of your distro's installer, choose to partition manually. Create the new partitions for Linux in the free space you have just created.

::: tip
When choosing where to create the EFI system partition (ESP) for your Linux installation, you can reformat and use ChromeOS' ESP (partition 12) as it is not used by ChromeOS. This also avoids edk2 trying to boot from the ChromeOS ESP by default.
:::

####S Reverting

Should you want to remove your Linux dualboot setup and only use ChromeOS, simply remove the Linux partitions using the CLI disk tools (e.g. `cfdisk`) present in ChromeOS, and run CRAP again to expand the stateful partition back to its original size.

<br>

---

Read more about ChromeOS' disk layout [here](https://www.chromium.org/chromium-os/developer-library/reference/device/disk-format/)

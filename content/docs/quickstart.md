---
weight: 300
draft: false
title: "Quickstart"
icon: "rocket_launch"
description: "A guide to getting up and running with a altOS."
---

## Requirements

- A Chromebook
- A USB drive larger than 8 gigabytes
- Internet connection
- Yo brain

## Step 1: Enabling Developer Mode

1. Press the `esc` + `refresh` + `power` buttons all at once on your Chromebook. Doing so will bring you to a screen that will prompt you to insert a USB stick or SD card.
2. On that screen, press `ctrl` + `d`. It will prompt you if you want to turn off OS verification. Press `ENTER`. Your Chromebook will restart and present a screen that says OS verification is OFF.
3. ChromeOS will then display a message for 30 seconds about transitioning the system to developer mode.
4. Once done, the Chromebook will restart into developer mode. Now, you can flash custom firmware.


## Step 2: Disabling Write Protection:
Check the type of WP you have on the supported devices page. Depending on your device, your steps will vary slightly:

**Screw**
Open up the back of your Chromebook, and look for a write protect screw. Unscrew it and throw it away.

**Battery**
Open the back of your Chromebook, unplug the battery, then plug in the charger and flash firmware.

**Jumper**
uhhh


## Step 3: Firmware

To keep it breif, UEFI firmware allows the Chromebook to become any other laptop. This means you will lose access to chromeOS. RW_Legacy allows you to dualboot chromeOS along with Linux.

1. Open a terminal via VT-2 by pressing `ctrl` + `alt` + `→`.
2. Log in as user `chronos`. Note that there should be no password unless you set one yourself.
3. Run the Firmware Utility Script:
  ```shell
cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh
```

If you encounter certificate related errors when downloading the script from ChromeOS, then add -k to the curl command and script command to bypass SSL certificate checking as so:
```shell
cd; curl -LOk mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh
```

{{< alert context="warning" text="The Firmware Utility Script cannot be run from a crosh shell, or a crostini shell." />}}

4. Select the firmware you would like to flash.
5. Follow the on-screen prompts. Once you are done, you should reboot into the new firmware! Keep in mind that the first boot will always take longer due to a process called "memory training". DO NOT power off the device at any time during the first boot.

## Step 4: altOS
This step covers the installation of a altOS (alternateOS); something that is not chromeOS. You can choose between 3 OS'es; Windows, Linux, and even macOS.


{{< tabs tabTotal="3">}}
{{% tab tabName="Windows" %}}

### Prerequisites
- A USB drive thats at least 8 gigabytes with nothing on it (everything on it will get wiped)
- Full ROM firmware flashed on your Chromebook
- Internet connection
- Another PC 

{{< alert context="danger" text="Do not use unofficial ISOs like Tiny10/11. Only use official ISOs provided by Microsoft, modified ISOs will not be supported here." />}}

1. Download the Windows ISO. On the Windows download page, look for `Download Windows 11 Disk Image (ISO) for x64 devices`. **You want the ISO, not the MediaCreationTool**.
      - [Windows 11 Download](https://www.microsoft.com/software-download/windows11)
      - [Windows 10 Download](https://www.microsoft.com/en-us/software-download/windows10)
2. Download Rufus from [here](https://rufus.ie/en/)
3. Plug in your USB drive and launch Rufus.
4. Under the `Device` box, select the USB you want to use
5. Click the `SELECT` box, then find the ISO and select it.
6. Set `Partition Scheme` as GPT and `Target System` as UEFI
7. Click `START`. A box should come up asking you to disable certain features. **Make sure the TPM and Storage checks are disabled.**.
8. Once the process is done, it will say `READY`. Unmount the USB drive and you are now ready to install Windows!
9. Plug the USB into your Chromebook and power it on. When you see the rabbit/coreboot logo, press `ESC`.
10. Using the arrow keys on your keyboard, navigate to `Boot Menu`. Press Enter to open that menu
11. Using your arrow keys, find your USB device. Then, press Enter to select it. You should now be booted into the Windows install enviroment.
12. Install Windows as you would on any other system.
13. Thats it! **You will need to install CoolStar drivers (mandatory) after you install.** Check out the Post-Install page for further details.


{{% /tab %}}
{{% tab tabName="Linux" %}}

### Prerequisites
- A USB drive thats at least 8 gigabytes with nothing on it (everything on it will get wiped)
- Full ROM or RW_LEGACY firmware flashed
- Internet connection
- Another PC 

{{< alert context="primary" text="For audio to work on Debian, users will need to install a custom kernel." />}}

1. Download your distro of choice. Some good choices are:
   - Arch Linux
   - Fedora Linux
   - Debian 12 Bookworm
   - OpenSuSE Tumbleweed
   - And any OS' based on those mentioned above.

    Some distros to avoid are:
      - Ubuntu based distros
      - Manjaro Linux 

2. Download Rufus from [here](https://rufus.ie/en/)
3. Plug in your USB drive and launch Rufus.
4. Under the `Device` box, select the USB you want to use
5. Click the `SELECT` box, then find the ISO and select it.
6. Set `Partition Scheme` as GPT and `Target System` as UEFI
7. Click `START`. 
8. Once the process is done, it will say `READY`. Unmount the USB drive and you are now ready to install Linukcs!
9. Plug the USB into your Chromebook and power it on. When you see the rabbit/coreboot logo, press `ESC`.
10. Using the arrow keys on your keyboard, navigate to `Boot Menu`. Press Enter to open that menu
11. Using your arrow keys, find your USB device. Then, press Enter sto select it. You should now be booted into the Linux installer.
12. Install Linux as you would on any other system.
13. Thats it! **You will need to run WeirdTreeThing's audio script for speaker/mic/jack support.** Check out the Post-Install page for further details.


{{% /tab %}}
{{% tab tabName="macOS" %}}

{{< alert context="primary " text="macOS only works on a handful of laptops and currently does not have audio/mic/jack support." />}}


figure it out you fucking nerd 

{{% /tab %}}
{{< /tabs >}}


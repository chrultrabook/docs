# Making a Bootable USB

::: danger
Flashing Ventoy or ISOs to an external drive will **wipe all data** on said drive. Back up anything if you need to.
:::

## Prerequisites

1. Another PC or laptop with at least 8GB storage
2. An internet connection
3. An external drive like a USB drive or SD card that is at least 8GB.

## Downloading a ISO

1. Determine what OS you want.
   * For Linux, keep in mind Ubuntu and Ubuntu-based derivatives **are not supported**.
   * For Windows, keep in mind only official versions of Windows 10 and newer are supported.
2. Place the ISO in a safe place.

## Flashing using Rufus (Windows)

For this guide, we will be using Rufus to create our bootable USB. Rufus is a useful tool that allows you to flash ISOs to an external drive.

1. Download Rufus from [here](https://rufus.ie/en/). The standard Windows x64 version will do.

   ![image](/rufus.png)

2. Plug in your external drive.
3. Locate and launch Rufus. It should ask you to launch with administrator privileges, select YES.
4. Press the "SELECT" button on the right-hand side.
5. A File Explorer window should pop up, find your ISO of choice, then click "Open".
6. Click "Start". The default options should work just fine.
7. Wait for the green bar to say "READY", then click "Close" and eject your newly made external drive.
8. Profit

## Flashing using Ventoy (Windows/Linux/macOS)

For this guide, we will be using Ventoy to create our bootable USB. 
Ventoy allows you to boot multiple ISO's from a single drive.
1. Download and extract the latest version from [Github](https://www.ventoy.net/en/download.html). 
   * Download the respective file for your platform. 
     ![image](/ventoy/download-alt.png)

2. Run `Ventoy2Disk.exe` for Windows or `VentoyGUI.x86_64` for Linux.
   * Make sure to allow administrator privilages when prompted.

3. Plug in your external drive and click the green circle to refresh devices. It should pick up your external drive.
4. Click Options > Partition Style and select "GPT".
5. Once you have done Step 4, click "Install" and click ok twice to start the install.
6. Open your Files App and find a drive that's labeled as "Ventoy".
7. Copy the ISO you downloaded into that drive, after that eject it.
8. Profit

## Flashing with dd (Linux/macOS)

1. Plug in your external drive
2. Run `lsblk` to help determine the drive to be flashed. If the device is mounted you will need to use `umount` to unmount it.
3. Flash with `dd if=myfile.iso of=/dev/<device name (as shown by lsblk)> bs=16M status=progress`.

::: tip
Be sure to target the drive itself and not a partition.
:::

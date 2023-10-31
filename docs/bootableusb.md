---
title: Making a Bootable USB
layout: default
nav_order: 25
---

## Making a Bootable USB

{: .warning }
Flashing Ventoy or ISO's to an external drive will **wipe all data** on said drive. Back up anything if you have to.

### Prerequisites
1. Another PC or laptop with at least 8GB storage
2. A internet connection
3. A external drive like a USB drive or SD card thats at least 8 gigabytes.

### Downloading a ISO
1. Determine what OS you want.
   - For Linux, keep in mind Ubuntu and any derivatives not based on 23.10 or higher **may have issues**.
   - For Windows, keep in mind only Windows 10 and newer are supported.
2. Place the ISO in a safe place.


### Flashing using Rufus (Windows)

For this guide, we will be using Rufus to create our bootable USB. 

1. Download Rufus from [here](https://rufus.ie/en/). The standard Windows x64 version will do.

    ![image](https://github.com/meghan06/docs/assets/77316348/9d9be52c-8e32-4b2f-ae17-8b3917f64032)

2. Plug in your external drive.
3. Locate and launch Rufus. It should ask you to launch with administrator privileges, select YES.
4. On the right hand side, there should be a button with the words `SELECT` on it.
5. A File Explorer window should pop up, find your ISO of choice, then click `Open`.
6. Click `Start`. The default options should work just fine.
7. Wait for the green bar to say `READY`, then click `Close` and eject your newly made external drive.
8. Profit

### Flashing using Ventoy (Windows/Linux)

For this guide, we will be using Ventoy to create our bootable USB. 

1. Download and extract the latest version from [Github](https://www.ventoy.net/en/download.html). 
   - Download the respective file for your platform.
   
   - ![image](https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/download-alt.png)

2. Run `Ventoy2Disk.exe` for Windows or `VentoyGUI.x86_64` for Linux.
   - Make sure to allow administrator privilages when prompted.

3. Plug in your external drive and click the green circle to refresh devices. It should pick up your external drive.
4. Click Options > Partition Style and select `GPT`.
5. Once you have done Step 4, click `Install` and click ok twice to start the install.
6. Open your Files App and find a drive thats labed as `Ventoy`.
7. Copy the ISO you downloaded into that drive, after that eject it.
8. Profit

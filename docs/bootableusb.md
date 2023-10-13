---
title: Making a Bootable USB
layout: default
nav_order: 25
---

## Making a Bootable USB

### Prerequisites
1. Another PC or laptop with at least 8GB storage
2. A internet connection
3. A USB drive or SD card thats at least 8 gigabytes.
      - You will be erasing this drive, backup anything if you need to do so.


### Downloading a ISO
1. Determine what OS you want.
   - For Linux, keep in mind Ubuntu and any derivatives will not work.
   - For windows, keep in mind only Windows 10 and newer are supported.
2. Place the ISO in a safe place.


### Flashing using Rufus (Windows)

For this guide, we will be using Rufus to create our bootable USB. 

1. Download Rufus from [here](https://rufus.ie/en/). The standard Windows x64 version will do.

    ![image](https://github.com/meghan06/docs/assets/77316348/9d9be52c-8e32-4b2f-ae17-8b3917f64032)

2. Plug in your USB.
3. Locate and launch Rufus. It should ask you to launch with administrator privileges, select YES.
4. On the right hand side, there should be a button with the words `SELECT` on it.
5. A File Explorer window should pop up, find your ISO of choice, then click `Open`.
6. Click `Start`. The default options should work just fine.
7. Wait for the green bar to say `READY`, then click `Close` and eject your newly made USB
8. Profit

### Flashing using Balena Etcher (Windows and macOS)

For this guide, we will be using Balena Etcher to create our bootable USB on Windows and macOS

1. Download Balena Etcher from [here](https://etcher.balena.io/)
2. Plug in your USB
3. Launch Balena Etcher from applications
4. Click the big blue "Select" button
5. A File Explorer window should pop up, find the ISO of your choice, then click `Open`
6. Select your Flashdrive or Change your Flashdrive
7. Click On Flash
8. It may ask for adminstrator privileges, click on `allow`
9. Profit

### Flashing using Balena Etcher (Linux)

For this guide, we will be using Balena Etcher to create our bootable USB on LInux using an AppImage

1. Download the Balena Etcher AppImage from [here](https://etcher.balena.io/)
2. Plug in your USB
3. Open Terminal
4. CD to the directory in where you downloaded the AppImage to
5. mark it as an executable with (replace name.AppImage with the name of the AppImage file) ```sudo chmod a+x name.AppImage ```
7. Open the appimage using (replace name.AppImage with the name of the AppImage file) ```./name.AppImage``` 
9. Click the big blue "Select" button
10. A File Explorer window should pop up, find the ISO of your choice, then click `Open`
11. Select your Flashdrive or Change your Flashdrive
12. Click On Flash
13. Profit

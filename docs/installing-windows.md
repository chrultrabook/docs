---
title: Installing Windows
layout: default
nav_order: 11
---

## Installing Windows

### Installation:

1. Install Windows from a USB:
    1.  On another computer, create a Windows 10 or 11 installer with Rufus as "GPT for UEFI"
    2. Plug the USB Drive into the chromebook
    3. Plug a USB keyboard or mouse in for installation
    4. Turn on the chromebook, and let it boot the USB drive

   >**Note**: If you need to select a different boot device, press any key in "Select Boot Option". Then select "Boot Manager" to select your boot drive.

2. Bypassing Windows 11 installation checks:
    1. At the Windows installer, press Shift + F10 (Volume Up) to open command prompt  
    2. Type in "regedit" and press enter
    3. Navigate to HKEY_LOCAL_MACHINE\SYSTEM\Setup
    4. Right click setup and create a new Key called "LabConfig"
    5. Right click LabConfig and create new DWORD (32 bit) called "BypassSecureBootCheck" and set it to 1
    6. Right click LabConfig and create new DWORD (32 bit) called "BypassTPMCheck" and set it to 1
    7. Close regedit and command prompt and proceed with installation normally

3. Install drivers:
   See https://coolstar.org/chromebook/windows-install.html for drivers.



---

### Buying Audio Drivers

1. (todo)
   // add step by step tutorial on how to setup a account, link to to driver portal, which tier to buy, and what to expect after to buying and leave a note to unsubscribe after paying so they dont get charged monthly.




### [Post Install →](post-install.html) 

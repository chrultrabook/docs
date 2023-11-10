---
title: Reverting to chromeOS
layout: default
nav_order: 25
---


## Reverting to Stock chromeOS

{: .note }
If your device hit AUE (Auto Update Expiration), you will not be able to revert to chromeOS.

{: .warning }
Reverting to stock without your backup ROM is somewhat difficult and will not be covered in this guide currently.

{: .note }
If recovery fails, unplug the battery since recovery also attempts to update the firmware.

--------

**Requirements**
- A PC or laptop to make a ChromeOS recovery USB
- A USB drive thats at least 8GB
- A understanding that this guide has the potential to brick your device.
- Your stock ROM backup


---------

**Flashing Stock Firmware**

1. Boot a live Linux USB (Ubuntu 22.04 or later recommended)
2. Connect to WiFi
3. Open a terminal, then update and install `curl`
    * `sudo apt update`
    * `sudo apt install curl`
4. Obtain your ROM backup    
5. Run the Firmware Utility Script
    * `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`
6. Select the option to revert to stock.
7. Follow on screen instructions 


**Making a Recovery USB**
1. Download the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) from the Chrome Web Store
2. Launch the app, then follow on-screen instructions. If you are unable to find your device, you can select the "Select a model from a list" option.
3. Select the USB drive you want to use
4. Wait for it to complete.


**Booting the Recovery USB**
1. Press `esc` + `refresh` + `power`
2. Plug in your recovery USB drive
3. Begin the recovery process
   
-------------



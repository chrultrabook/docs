---
title: Reverting to chromeOS
layout: default
nav_order: 19
---


## Reverting to Stock chromeOS

{: .note }
If your device hit AUE (Auto Update Expiration) and is EOL, you are **not** able to revert to chromeOS / stock.

{: .warning }
Reverting to stock without your backup ROM is very difficult and will not be covered in this guide.

--------

**Requirements**
- A PC or laptop to make a ChromeOS recovery USB
- A USB drive thats at least 8GB
- A understanding that this guide has the potential to brick your device.
- Your stock ROM backup


---------

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



-------------






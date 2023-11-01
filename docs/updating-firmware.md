---
title: Updating Custom Firmware
layout: default
nav_order: 17
---

### Updating Custom Firmware

1. Boot a live Linux image. See [here](bootableusb.html) for a guide on creating a bootable Linux media.

  {: .note }
  curl is not installed by default for Ubuntu / Ubuntu distros. To install it, run: `sudo apt update && sudo apt install -y curl`

2. Once you have booted the live image, **do not install the OS. Some distros may have the option to "try now" click that.**

3. Connect to the internet.

4. Open a terminal.
   
5. Run the same firmware utility script you used to install coreboot
   * In case you forgot, type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.

6. Pick option 1: `Install/Update UEFI (Full ROM) Firmware`, and reboot if successful.

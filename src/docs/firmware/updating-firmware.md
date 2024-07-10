# Updating Custom Firmware

::: tip NOTE
The script does not work on Windows. If you are using Windows, boot a live Linux iso, such as Ubuntu or Fedora, and run the script from there.
:::

::: tip
curl is not installed by default for Ubuntu or Ubuntu-based distros. To install it, run: `sudo apt update && sudo apt install -y curl`
:::

1. Run [MrChromebox's Firmware Utility Script](https://mrchromebox.tech/#fwscript).
   - In case you forgot, type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
2. Choose option 1: `Install/Update UEFI (Full ROM) Firmware`, and reboot if successful.

::: danger
**DO NOT REBOOT if flash was not successful**
:::

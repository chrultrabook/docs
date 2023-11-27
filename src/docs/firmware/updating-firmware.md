# Updating Custom Firmware

::: tip
These steps require linux. **Firmware Cannot be flashed from Windows**. Do not try to flash from a virtual machine such as wsl. If you are using Windows, boot a live linux iso, such as Ubuntu or Fedora Workstation.
:::

::: tip
curl is not installed by default for Ubuntu / Ubuntu distros. To install it, run: `sudo apt update && sudo apt install -y curl`
:::
   
1. Run [MrChromebox's firmware utility script](https://mrchromebox.tech/#fwscript).
    * In case you forgot, type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
2. Choose option 1: `Install/Update UEFI (Full ROM) Firmware`, and reboot if successful.

::: danger
**Do not reboot if flash was not successful**
:::

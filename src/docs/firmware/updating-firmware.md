# Updating Custom Firmware

::: tip NOTE
The script does not work on Windows. If you are using Windows, boot a live Linux iso, such as Ubuntu or Fedora, and run the script from there.
:::

::: tip
curl is not installed by default for Ubuntu or Ubuntu-based distros. To install it, run: `sudo apt update && sudo apt install -y curl`
:::
   
1. Run [MrChromebox's Firmware Utility Script](https://mrchromebox.tech/#fwscript).
   * In case you forgot, type `cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh` and press Enter.
2. Choose option 1: `Install/Update UEFI (Full ROM) Firmware`, and reboot if successful.

::: danger
**DO NOT REBOOT if flash was not successful**
:::

### Potential Errors (Before Flashing)
If you get any of the errors found below please try some of these fixes

1. `/dev/mem mmap failed: Operation not permitted
FAILED!
FATAL ERROR!`
   * If you get this error in a Full Linux Install **AND** is using GRUB follow the steps below
      1. `sudo nano /etc/default/grub` (You can use any text editor)
      2. add `iomem=relaxed` to `GRUB_CMDLINE_LINUX` (Most likely at the top of the config)
      3. `grub-mkconfig -o /boot/grub/grub.cfg`
      4. Reboot and rerun the firmware-utility script
   * If you are not using GRUB, please refer to (Arch Wiki)[wiki.archlinux.org/title/Kernel_parameters], for instructions on how to add `iomem=relaxed` to your respective kernel parameter
   * If you get this error in a Live Linux ISO, please reflash with another Distro


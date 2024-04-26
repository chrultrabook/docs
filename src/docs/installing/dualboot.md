# Partitioning Instructions for Dualbooting

After using the Firmware Utility Script to install/update RW_LEGACY, before booting a Linux distro ISO, you will need to shrink the stateful partition to create space for your Linux installation. You can do this from ChromeOS using [CRAP](https://github.com/chrultrabook/crap), a partitioning tool developed by the chrultrabook community.

::: warning
CRAP is the preferred method for resizing partitions to dualboot because it only resizes the stateful partition. Using `chrx`, which resizes the ROOT-C and KERN-C ChromeOS partitions, and changes the disk layout, can cause unintended effects. 
:::

## Using CRAP

* Run the below command from VT-2 as root. CRAP can only be run in VT-2 [Ctrl + Alt + 🡢 (F2)]
  * `bash <(curl -L https://tinyurl.com/crap-cb-01)`
* Then, follow the steps displayed onscreen.

## Installing Linux

Continue with the guide at [Installing Linux](installing-linux.md). On the partitioning screen of your distro's installer, choose to partition manually. Create the new partitions for Linux in the free space you have just created.

::: tip
When choosing where to create the EFI system partition (ESP) for your Linux installation, you can reformat and use ChromeOS' ESP (partition 12) as it is not used by ChromeOS. This also avoids edk2 trying to boot from the ChromeOS ESP by default. 
:::

## Reverting

Should you want to remove your Linux dualboot setup and only use ChromeOS, simply remove the Linux partitions using the CLI disk tools (e.g. `cfdisk`) present in ChromeOS, and run CRAP again to expand the stateful partition back to its original size.

<br>

--- 

Read more about ChromeOS' disk layout [here](https://www.chromium.org/chromium-os/developer-library/reference/device/disk-format/)

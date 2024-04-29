---
prev: false
next: supported-devices
---
# Flashing Custom Firmware

::: danger
You are about to make **unofficial** changes to your device! This will likely **void any warranty.** We provide **zero warranty** if you encounter bugs, brick your device, lose your job because the alarm clock didn't go off, or if a thermonuclear war starts. **You are doing all changes at your own risk**!
:::

::: danger
Do not continue if your device is currently owned or enrolled by a organization, such as a school or employer. Unless you were given permission by your organization, it is a crime.
:::

## Prerequisites

* Know your hardware 
  * Your CPU model and generation
  * Your storage devices (HDD/SSD, eMMC, NVMe, etc.)
  * **Your boardname**
    * For example, the boardname for Asus Chromebook C302CA is `Cave`
  * If you don't know where to find this info, take a look at the [System Info Page](system-info.md).
* **A basic knowledge of command lines and how to use a terminal/command prompt.**
  * We cannot help you if you do not know how to go to a directory or delete a file from a terminal.
* A minimum of an 8GB USB drive or SD Card for creating a bootable OS installer.
* A second device is recommended, and required in some cases.

::: tip NOTE
Only x86_64 devices are currently supported.
:::

::: tip
If you only have one device, please be sure to [setup a usb with your OS to install](ventoy.md) before flashing.
:::

## Asking for help properly

If you are facing a issue, please read the [FAQ](../faq.md) first.

::: tip
When asking for help, ask in English. We can't help you if we don't understand the question. Using a translator is fine.
:::

**Do not use manufacturer's model name or serial number when asking for help** (i.e: HP Chromebook 14a), it doesn't help with identifying the machine. Provide the boardname, otherwise your support request will be ignored. 

If you don't know where to find your boardname, take a look [here](system-info.md).

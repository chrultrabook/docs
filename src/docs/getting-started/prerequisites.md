# Prerequisites

:::warning
Before getting started, it is important to know that this isn't a simple, one-click process. You must be able to read and understand the documentation in order to successfully modify your device. There is a risk of bricking your device, losing data, etc. YOU ARE RESPONSIBLE FOR YOUR OWN DEVICE!
:::

* A Chrome device you own (managed devices are unable to be modified)
* Some form of external storage, such as a USB flash drive or SD Card
* Some technical skills (installing an os, troubleshooting issues, etc)
* Patience
* Ideally, another computer to save yourself if something goes wrong
* Your device's HWID

The device's HWID, often referred to as the board name, is used to identify your device and determine whether or not it is supported. Avoid using marketing names to identify your device, such as "HP Chromebook 14A", as they will usually lead to confusion since OEMs like to recycle the same name between many different devices.

To find your HWID, either boot into [recovery mode](https://docs.mrchromebox.tech/docs/boot-modes/recovery.html) and look at the bottom of the screen, where it says MODEL, or open `chrome://system` in Chrome and search for `HWID`.

:::tip
Most of the HWID can be ignored. For example, the most important part is `CAVE` in `CAVE D25-A4B-E4E-33C` and `HAYATO` in `HAYATO-YLRO C6B-C2C-F4F-V9P-G2I-A9Q`.
:::

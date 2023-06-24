# Before we begin, keep in mind the following:

### Supported Platforms:

| Intel            | AMD           |                              ARM            |
| ---------------- | --------------------------------------------| ------------- |
| Fully Supported  | Needs RWL hack in order to install WIndows  | Currently unsupported by Windows |
|     | Stoney has several issues that prevent it from booting UEFI full ROM                   | A handful of Linux distros support some ARM CPUs|

-------------

### Supported Chromebooks:

Please refer to [this chart](supported-devices.md) for a full list of supported devices.

-------------

### Asking for help properly:

**Do not use manufacturer's model name** (i.e: HP Chromebook 14a), it doesn't help with identifying the machine. Provide the boardname, otherwise your support request will be ignored.

--------------

### Provide logs.

* If you're experiencing firmware bugs, provide output from cbmem console.
* If you're experiencing issues with Linux, provide output from dmesg, dmidecode and journalctl or /var/log/messages, respectively*
* If you're experiencing issues with Windows, provide screenshots from Device Manager, Event Viewer, coredumps etc.

>**Note**: Only Linux 6.1 LTS or newer is supported.

>**Warning**: Ubuntu and ubuntu-based distributions, such as Mint or ElementaryOS **are unsupported**.

--------------

**Recommended distributions as of June 2023 (in no particular order) are:**

* Arch Linux
* Fedora
* OpenSUSE Tumbleweed
* Pop!_OS
* Debian 12 (Bookworm)

----------------

With that out the way, let's move on to the fun stuff:

## [Flashing Coreboot firmware →](firmware.md) 

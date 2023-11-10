# Known Issues
The following page is aimed for documenting all issues Chrultrabooks face. Feel free to improve this page by contributing to it.

<br>

## Devices

::: tip
You should avoid buying any devices in this list.
:::

* Samsung Chromebook 3 (CELES): Numerous hardware bugs that make it difficult to use.
* Samsung Galaxy Chromebook (KOHAKU): Badly designed hardware, deteriorating trackpad grounding, possibly faulty backlight circuit.
* Samsung Chromebox Series 3 (STUMPY): DisplayPort output is non-functional under Windows, and VGA output through the DVI port is non-functional.

---

## Firmware
* **All ARM Chromebooks**: No support, though development is slowly starting.
* GeminiLake: Legacy boot mode/alternative firmware menu works but does not show payload list
* AMD Stoneyridge: Some Stoney Ridge devices may not currently have functional Legacy Boot Mode due to bugs in Google's firmware.
* AMD Picasso: Booting from eMMC is not currently supported (edk2 limitation), only from NVMe and USB/SD.
* AMD Cezanne: legacy boot mode/alternative firmware menu works, edk2 boots, but screen backlight is off. Will be fixed in next Google fw update (fingers crossed).

---

## Operating Systems

### Windows

* No touchpad support in the installer
* No fingerprint reader support
* No TPM support
* No IPU camera support

### Linux

* Broken USB-C on TigerLake and AlderLake. See Post Install -> Linux for fix.
* No fingerprint reader support
* Debian 12 (Bookworm) needs a custom kernel 

### macOS

* Broken DRM
* No audio
* No PCIe SD card reader support
* No fingerprint reader support
* Continuity features (AirDrop, Sidecar, etc)

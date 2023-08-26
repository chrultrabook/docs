---
title: Known Issues
layout: default
nav_order: 3
---

# Known Issues
The following page is aimed for documenting all issues Chrultrabooks face. Feel free to improve this page by contributing to it.

{: .highlight }
You should avoid buying any devices in this list.

-----


## Devices
* Samsung Chromebook 3 (CELES): Numerous hardware bugs that make it difficult to use.
* Samsung Galaxy Chromebook (KOHAKU): Badly designed hardware, deteriorating trackpad grounding, possibly faulty backlight circuit.
* Samsung Chromebox Series 3 (STUMPY): DisplayPort output is non-functional under Windows, and VGA output through the DVI port is non-functional.




----

## Firmware
* **All** AMD Chromebooks: AMD PSP blobs are broken, and some StoneyRidge devices do not have working Legacy Boot.
* **All** ARM Chromebooks: No support, though development is slowly starting.
* GeminiLake: Legacy boot mode/alternative firmware menu works but does not show payload list



----

## Operating Systems

### Windows

* No touchpad support in the installer
* No fingerprint reader support
* No TPM support
* No IPU camera support


### Linux

* Broken USB-C on TigerLake and AlderLake (although there is a workaround)
* No fingerprint reader support
* Sandybridge/Ivybridge need a [workaround](https://github.com/MrChromebox/scripts/issues/277) to flash firmware from linux.


### macOS


* Broken DRM
* No audio
* No PCIe SD card reader support
* No fingerprint reader support
* Continuity features (AirDrop, Sidecar, etc)

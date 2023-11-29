# Installing macOS

Before we begin, it's important to know whether your Chromebook is even supported:
- ARM/AMD CPUs are not supported.
- Intel Celeron / Pentium CPUs are not supported.
- Tiger Lake (11th gen) CPUs and newer are not supported.
- You need at least 32GB of eMMC storage.

**You will also need:**
* Patience 
    * This is not a one click setup thing. It usually takes one or more weeks to have a stable hack.
* A USB drive 
  	* 4 gigabytes or more for a online installer.
  	* 32 gigabytes or more for offline installer.
* The ability to use a command line
  	* We won't help you if you don't know how to `cd` to a directory.

## Tested Devices

::: tip
This list is incomplete. Feel free to improve it.
:::

- Asus C425 (LEONA)
- Asus C434 (SHYVANA)
- Asus C433 (SHYVANA)
- Acer C720 / C720P (PEPPY)
- Dell Chromebook 13 7310 (LULU)
- Google Pixelbook (2017) (EVE)
- Google Pixel Slate (NOCTURNE)
- Google Pixelbook Go (2019) (ATLAS)
- Dell Latitude 7410 Chromebook Enterprise (DRALLION)
- Asus Chromebox 2 (CN62) (GUADO)
- HP Chromebook x360 14c (DRAGONAIR)
- Acer Chromebook Spin 713 (CP713-2W) (KLED)
- Acer Chromebook 14 for Work (LARS)
- Acer Chromebook 11 (C771/C771T) (LARS)

**The following devices have dedicated guides written for them:**

* [ChromebookOSX](https://github.com/meghan06/ChromebookOSX):
   * Asus C425 (LEONA)
   * Asus C434 (SHYVANA)
   * Asus C433 (SHYVANA)

* [PixelbookOSX](https://github.com/olm3ca/PixelbookOSX):
   * Google Pixelbook (2017) (EVE)
   * Google Pixel Slate	(NOCTURNE)
   * Google Pixelbook Go (2019) (ATLAS)

* [macOS-Dragonair](https://github.com/mine-man3000/macOS-Dragonair):
   * HP Chromebook x360 14c (DRAGONAIR)

* [LuluMacOS](https://isi95010.github.io/LuluMacOS/)
  * Dell Chromebook 13 7310 (LULU)

## Custom Firmware

It is recommended to [flash Coreboot firmware](macos-firmware) with the Management Engine Interface enabled on Skylake and newer.  
Without the ME interface enabled, the following bugs can occur after waking from sleep:
- Blank Electron / Chromium apps
- Buggy video playback in web browsers like Firefox or Safari
- Display/Wallpaper settings in SysPref/SysSettings
- Logging out freezes your system

## Installation

Start by following the [Dortania guide](https://dortania.github.io/OpenCore-Install-Guide) for your CPU generation.
Amber Lake Chromebooks should follow config.plist setup for Kaby Lake.  
Add the following SSDTs, kexts and modifications as needed:

#### Config.plist Fixes
- Disable `Booter->Quirks->DevirtualiseMmio`: Fixes NVRAM and other runtime EFI services

#### SSDTs and ACPI Fixes:
- [croscorebootpatch](https://github.com/meghan06/croscorebootpatch): Fixes freeze during boot when using coreboot 4.20 and newer. Not needed when custom rom is used.
- [Keyboard Map](https://github.com/1Revenger1/Acer-Spin-713-Hackintosh/blob/main/src/ACPI/SSDT-ChromeKeys.dsl): Maps FNx keys to ChromeOS mapping. This is an example, you may need to do your own mapping.
   - Will need to be compiled with either `iASL` or `MaciASL`.
- [Fake Ambient Light Sensor](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/Source/SSDT-ALS0.dsl): Creates a fake ambient light sensor which is needed by macOS to recognize the keyboard backlight.
   - This is only needed if your device does not come with a light sensor.
   - A pre-compiled version comes in OpenCore's release zip under `Docs/AcpiSamples/Binaries/SSDT-ASL0.aml`

#### Kexts
- [EmeraldSDHC.kext](https://github.com/acidanthera/EmeraldSDHC/releases): eMMC driver
- [VoodooPS2.kext](https://github.com/1Revenger1/VoodooPS2/releases): Fork of Acidanthera's VoodooPS2 which allows mapping keyboard brightness and other useful keys
- [CrosEC.kext](https://github.com/1Revenger1/CrosEC/releases): Adds keyboard brightness, tablet mode, and other functionality

### Snapshot (cmd + r) or (ctrl + r) your `config.plist` after making modifications.

::: danger
If you dualboot with the SSDTs mentioned above, you might run into issues on other OSes. An `OSI_` check is not present in these SSDTs.
:::

# Installing macOS

Before we begin, it's important to know whether your Chromebook is even supported:

- ARM/AMD CPUs are not supported.
- Intel Celeron / Pentium CPUs are not supported.
- Tiger Lake (11th gen) CPUs and newer are not supported.
- You need at least 32GB of eMMC storage.

**You will also need:**

- Patience
  - This is not a one click setup thing. It usually takes one or more weeks to have a stable hack.
- A USB drive
  - 4 gigabytes or more for a online installer.
  - 32 gigabytes or more for offline installer.
- The ability to use a command line
  - We will not help you if you do not know how to `cd` to a directory.

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

- [ChromebookOSX](https://github.com/meghan06/ChromebookOSX):

  - Asus C425 (LEONA)
  - Asus C434 (SHYVANA)
  - Asus C433 (SHYVANA)

- [PixelbookOSX](https://github.com/olm3ca/PixelbookOSX):

  - Google Pixelbook (2017) (EVE)
  - Google Pixel Slate (NOCTURNE)
  - Google Pixelbook Go (2019) (ATLAS)

- [macOS-Dragonair](https://github.com/mine-man3000/macOS-Dragonair):

  - HP Chromebook x360 14c (DRAGONAIR)

- [LuluMacOS](https://isi95010.github.io/LuluMacOS/)
  - Dell Chromebook 13 7310 (LULU)

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

### config.plist Fixes

- Disable `Booter->Quirks->DevirtualiseMmio`: Fixes NVRAM and other runtime EFI services

### SSDTs and ACPI Fixes

- [croscorebootpatch](https://github.com/meghan06/croscorebootpatch): Fixes freeze during boot when using coreboot 4.20 and newer. Not needed when custom rom is used.
- [Keyboard Map](https://github.com/1Revenger1/Acer-Spin-713-Hackintosh/blob/main/src/ACPI/SSDT-ChromeKeys.dsl): Maps FNx keys to ChromeOS mapping. This is an example, you may need to do your own mapping.
  - Will need to be compiled with either `iASL` or `MaciASL`.
- [Fake Ambient Light Sensor](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/Source/SSDT-ALS0.dsl): Creates a fake ambient light sensor which is needed by macOS to recognize the keyboard backlight.
  - This is only needed if your device does not come with a light sensor.
  - A pre-compiled version comes in OpenCore's release zip under `Docs/AcpiSamples/Binaries/SSDT-ASL0.aml`

### Kexts

- [EmeraldSDHC.kext](https://github.com/acidanthera/EmeraldSDHC/releases): eMMC driver
- [VoodooPS2.kext](https://github.com/1Revenger1/VoodooPS2/releases): Fork of Acidanthera's VoodooPS2 which allows mapping keyboard brightness and other useful keys
- [CrosEC.kext](https://github.com/1Revenger1/CrosEC/releases): Adds keyboard brightness, tablet mode, and other functionality

#### Snapshot (cmd + r) or (ctrl + r) your `config.plist` after making modifications

::: danger
If you dualboot with the SSDTs mentioned above, you might run into issues on other OSes. An `OSI_` check is not present in these SSDTs.
:::

# macOS Hibernation

macOS by default will try to use hibernation after sleeping for a predetermined amount of time.  
Some fixes in the `config.plist` are required in order to take advantage of this:

- Disable `Booter->Quirks->DevirtualiseMmio`
- Set `Misc->Boot->HibernateMode` to `Auto`
  - By default, OpenCore will not look for hibernated images of macOS.
- Set `Misc->Boot->HibernationSkipsPicker` to `True` to skip the picker when resuming from hibernation
  - While not strictly required, this speeds up resume times and prevents accidently booting another OS and changing hardware state underneath macOS.
- Create a reserved memory region under `UEFI->ReservedMemory` with the properties:

  | Field   | Type    | Value                                     |
  | ------- | ------- | ----------------------------------------- |
  | Comment | String  | Fix black screen on wake from hibernation |
  | Enabled | Boolean | True                                      |
  | Address | Number  | 569344                                    |
  | Enabled | Boolean | True                                      |
  | Size    | Number  | 4096                                      |
  | Type    | String  | RuntimeCode                               |

## Testing Hibernation

To test hibernation, it is recommended to run `sudo pmset -a hibernatemode 25`.  
This will force macOS to hibernate immediately whenever the lid is closed or `Sleep` is selected in the menu at the top left.

### macOS enters S3 sleep instead of shutting down

Some models (such as `KLED`) have drives not marked as internal, which prevents macOS from entering hibernation.  
To fix this, add the `built-in` property to the PCI device under `DeviceProperties->Add-><storage device path>`:

| Field    | Type | Value      |
| -------- | ---- | ---------- |
| built-in | Data | <01000000> |

You may need to add an ACPI device as well.
If an ACPI device does not exist to represent the NVMe or eMMC drive, then device properties will not be applied.
An example SSDT can be found [here](https://github.com/1Revenger1/Acer-Spin-713-Hackintosh/blob/main/src/ACPI/SSDT-Devices.dsl).

## Hibernate Modes

Pmset exposes a few different hibernation modes which can be set through `sudo pmset -a hibernatemode <value>`:

- 0: Disables hibernation
- 3: Hibernates after either `standbydelaylow` or `standbydelayhigh` seconds of sleep
  - Which one is used is dependent on the battery percentage. Anything above `highstandbythreshold` will use `standbydelayhigh` instead of `standbydelaylow`.
- 25: Hibernates instead of S3 sleep

When using hibernate mode 3, macOS may keep sleeping even after the standby time has elapsed.
[`HibernationFixup.kext`](https://github.com/acidanthera/HibernationFixup) may be required in this case, and provides options to fine tune when the Chromebook is allowed to sleep.

# macOS Firmware

It is recommended to flash coreboot with the Intel Management Engine interface enabled to prevent bugs after waking from sleep.  
Without the ME interface enabled, the following bugs can occur after waking from sleep:

- Blank Electron / Chromium apps
- Buggy video playback in web browsers like Firefox or Safari
- Display/Wallpaper settings in SysPref/SysSettings
- Logging out freezes your system

## Custom Firmware

### Building Manually

1. Follow the steps [here](https://docs.mrchromebox.tech/docs/support/compiling.html) to download the toolchain and build the firmware
   - Continue these steps once `build-uefi.sh <boardname>` has been ran
2. Run `make menuconfig`. You will be greeted by a menu which looks like the following:

   ![image](/macos/menuconfig.png)

3. Select `Chipset`
4. Select `Disable HECI1 at the end of boot` then press `N` to disable. The asterik should be gone:

   ![image](/macos/heci1.png)

5. Use the right arrow keys to select `Save` at the bottom, then press `Ok`
6. Use the right/left arrow keys to select `Exit` until back at the prompt.
7. Run `make -j$(nproc)` to build the firmware.
8. The output will be found at `./build/coreboot.rom`

## Flashing Firmware

Follow the steps [on this page](https://docs.mrchromebox.tech/docs/firmware/manual-flashing.html) to flash the new firmware.

## macOS

- [Remove Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html#macos-decluttering)
- [OpenCore GUI Setup](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-opencore-s-gui)
- Disable `DevirtualiseMmio` if you are on CometLake (10th gen)

### macOS

- Broken DRM.
- No audio.
- No PCIe SD card reader support.
- No fingerprint reader support.
- Continuity features (AirDrop, Sidecar, etc).

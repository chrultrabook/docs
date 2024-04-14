# macOS Firmware

It is recommended to flash coreboot with the Intel Management Engine interface enabled to prevent bugs after waking from sleep.  
Without the ME interface enabled, the following bugs can occur after waking from sleep:
* Blank Electron / Chromium apps
* Buggy video playback in web browsers like Firefox or Safari
* Display/Wallpaper settings in SysPref/SysSettings
* Logging out freezes your system

## Custom Firmware

### Prebuilt

Prebuilts can be found at [ethanthesleepy.one](https://ethanthesleepy.one/macos/)

### Building Manually

1. Follow the steps [here](../firmware/compiling-coreboot.md) to download the toolchain and build the firmware
    * Continue these steps once `build-uefi.sh <boardname>` has been ran
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

Follow the steps [on this page](../firmware/manually-flashing.md) to flash the new firmware.

---
prev: system-info
next: known-issues
---

# Supported Devices and Platforms

Supported devices are listed in the table below, grouped by platform/family. If your device is not listed, it is not supported. Support is determined entirely and exclusively by the boardname. Use your Chromebook's boardname to see if it has support.

## Determining Device Support

What's in a name? All ChromeOS devices have a board/device name, which determines which firmware, OS build, etc a device uses. The board name is listed at the bottom of both the Recovery Mode and Developer Mode screens, as part of the hardware ID (HWID).

The chart below provides a full list of all ChromeOS devices currently supported by Chrultrabook, the firmware type available for each, and notes for Windows, Linux, and macOS operating systems.

In most cases, all of the devices in a given platform/family are supported, but sometimes there are exceptions (especially with older or newer devices).

### OS Support

A device having firmware available (either RW_LEGACY or UEFI Full ROM) does not imply any level of functionality when running an OS other than ChromeOS. Some devices/platforms are better supported in some Linux distros vs others. Some devices/platforms are better supported under Windows than others.

## Supported Platforms

| Intel                                                                                      | AMD                                                                                                                                                                                                             | ARM                                                                                                                                      |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Intel platforms have good support for both Linux and Windows. Some have support for macOS. | Stoneyridge support in Windows is questionable, and installing a custom kernel is required to get working audio in Linux. Ryzen has support for both Linux and Windows. MacOS is **untested** on AMD platforms. | Currently unsupported (WIP). [PostmarketOS](https://wiki.postmarketos.org/wiki/Chrome_OS_devices) has support for many ARM Chromebooks. |

## Firmware and OS Support

::: tip
If your device isn't listed, it doesn't have support.
:::

::: tip
If you are on a smaller screen, scroll sideways to see whole table.
:::

<AddScript script-url="../../supported-devices.js"/>

<p>Search: <input type="text" class="deviceSearch"></p>

<div class="deviceTable">Loading...</div>

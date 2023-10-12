<!--
NOTE - do not edit the supported-devices.md file, edit the template file in the supported-devices folder
-->

## Supported Devices and Platforms

Supported devices are listed in the table below, grouped by platform/family, roughly in chronological order. To reiterate, support is determined entirely and exclusively by the Board Name. Device Names are just for reference, and may be incomplete as many models/sub-models may use the same Board Name. Figure out the Board Name and then locate it in the table. If it's not listed, it's not supported.

### Determining Device Support

What's in a name? All ChromeOS devices have a board/device name, which determines which firmware, OS build, etc a device uses. The board name is listed at the bottom of both the Recovery Mode and Developer Mode screens, as part of the hardware ID (HWID). Your device's board name is what determines if it's supported or not -- not the make, model, CPU, or anything else. The only thing that matters is the name, so use that when determining support in the table below (or for anything else really).

The chart below provides a full, authoritative list of all ChromeOS devices currently supported by MrChromebox's Firmware Utility Script, the firmware types available for each, and the hardware write-protect method used. In most cases, all of the devices in a given platform/family are supported identically, but sometimes there are outliers (esp with older or newer devices). The goal is to offer both RW_LEGACY and UEFI Full ROM firmware for all devices wherever possible, so you have the option of dual booting ChromeOS, or liberating your device completely :)

### OS Support

A device having firmware available (either RW_LEGACY or UEFI Full ROM) does not imply any level of functionality when running an OS other than ChromeOS. Some devices/platforms are better supported in some Linux distros vs others. Some devices/platforms are better supported under Windows than others.

---------

### Supported Platforms

| Intel | AMD | ARM |
| - | - | - |
| Intel platforms have good support for both Linux and Windows. Some have support for macOS | Ryzen needs RWL hack in order to install Windows. Stoney support in Windows is questionable, and has a few issues when running Linux. MacOS is unsupported.  | Currently unsupported by Windows. [PostmarketOS](https://wiki.postmarketos.org/wiki/Chrome_OS_devices) has support for a few ARM Chromebooks. |

---------

### Firmware and OS Support

{: .highlight }
If your device isn't listed, it doesn't have support.

{: .highlight }
If on on a smaller screen, scroll sideways to see whole table.

${{TABLE}}

<table>
  <tr>
    <td class="navtable-l">
      <a href="terminology.html">← Terminology</a>
    </td>
    <td class="navtable-r">
      <a href="allaboutfirmware.html">All About Firmware →</a>
    </td>
  </tr>
</table>

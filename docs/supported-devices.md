---
title: Supported Devices
layout: default
nav_order: 6
---

## Supported Devices and Platforms
Supported devices are listed in the table below, grouped by platform/family, roughly in chronological order. To reiterate, support is determined entirely and exclusively by the Board Name. Device Names are just for reference, and may be incomplete as many models/sub-models may use the same Board Name. Please don't email me asking if your HP Chromebook 14b-ca0023dx (eg) is supported. Figure out the Board Name and then locate it in the table. If it's not listed, it's not supported.

### Determining Device Support
What's in a name? All ChromeOS devices have a board/device name, which determines which firmware, OS build, etc a device uses. The board name is listed at the bottom of both the Recovery Mode and Developer Mode screens, as part of the hardware ID (HWID). Your device's board name is what determines if it's supported or not -- not the make, model, CPU, or anything else. The only thing that matters is the name, so use that when determining support in the table below (or for anything else really).

The chart below provides a full, authoritative list of all ChromeOS devices currently supported by MrChromebox's Firmware Utility Script, the firmware types available for each, and the hardware write-protect method used. In most cases, all of the devices in a given platform/family are supported identically, but sometimes there are outliers (esp with older or newer devices). The goal is to offer both RW_LEGACY and UEFI Full ROM firmware for all devices wherever possible, so you have the option of dual booting ChromeOS, or liberating your device completely :)

### OS Support
A device having firmware available (either RW_LEGACY or UEFI Full ROM) does not imply any level of functionality when running an OS other than ChromeOS. Some devices/platforms are better supported in some Linux distros vs others. Some devices/platforms are better supported under Windows than others.

---------

### Supported Platforms:

| Intel            | AMD           |                              ARM            |
| ---------------- | --------------------------------------------| ------------- |
| Intel platforms have good support for both linux and windows.  | Ryzen needs RWL hack in order to install Windows. Stoney is not supported in windows at all, and has a few issues when running linux.  | Currently unsupported by Windows. [PostmarketOS](https://wiki.postmarketos.org/wiki/Chrome_OS_devices) has support for a few ARM chromebooks. |

---------

### Firmware (not os) support for each device.
### If you device isn't listed, it doesn't have custom firmware support.

<table class="wikitable" style="width: 90%; margin: auto">

<tbody><tr>
<th colspan="7" style="text-align:left;"> <i>Sandybridge/Ivybridge</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>HP Pavilion Chromebook 14
</td>
<td style="text-align:center;"> BUTTERFLY
</td>
<td>
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/hp-pavilion-14-chromebook" target="_blank">switch</a>
</td></tr>
<tr>
<td>Google Chromebook Pixel (2013)
</td>
<td style="text-align:center;"> LINK
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel" target="_blank">screw</a>
</td></tr>
<tr>
<td>Samsung Chromebook Series 5 550
</td>
<td style="text-align:center;"> LUMPY
</td>
<td>
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-sandy-bridge" target="_blank">jumper</a>
</td></tr>
<tr>
<td>Acer C7/C710 Chromebook
</td>
<td style="text-align:center;"> PARROT
</td>
<td>
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c7-chromebook" target="_blank">jumper</a>
</td></tr>
<tr>
<td>Lenovo Thinkpad X131e Chromebook
</td>
<td style="text-align:center;"> STOUT
</td>
<td>
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/lenovo-thinkpad-x131e-chromebook" target="_blank">switch</a>
</td></tr>
<tr>
<td>Samsung Chromebox Series 3
</td>
<td style="text-align:center;"> STUMPY
</td>
<td>
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stumpy_1-1" class="reference"><a href="#cite_note-stumpy-1">[1]</a></sup>
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-sandy-bridge/" target="_blank">jumper</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Haswell</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>HP Chromebook 14
</td>
<td style="text-align:center;"> FALCO
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/hp-chromebook-14" target="_blank">screw</a>
</td></tr>
<tr>
<td>Toshiba Chromebook 13 (CB30)
</td>
<td style="text-align:center;"> LEON
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/toshiba-cb30-chromebook" target="_blank">screw</a>
</td></tr>
<tr>
<td>Acer Chromebox CXI
</td>
<td style="text-align:center;"> McCLOUD
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>LG Chromebase 22
</td>
<td style="text-align:center;"> MONROE
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Asus Chromebox CN60
</td>
<td style="text-align:center;"> PANTHER
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Acer C720/C720P Chromebook
</td>
<td style="text-align:center;"> PEPPY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook" target="_blank">screw</a>
</td></tr>
<tr>
<td>Dell Chromebox 3010
</td>
<td style="text-align:center;"> TRICKY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Dell Chromebook 11 (CB1C13)
</td>
<td style="text-align:center;"> WOLF
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/dell-chromebook-11" target="_blank">screw</a>
</td></tr>
<tr>
<td>HP Chromebox CB1 / G1
</td>
<td style="text-align:center;"> ZAKO
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Broadwell</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Acer C740 Chromebook
</td>
<td style="text-align:center;"> AURON_PAINE
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook" target="_blank">screw</a>
</td></tr>
<tr>
<td>Acer C910 Chromebook (CB5-571)
</td>
<td style="text-align:center;"> AURON_YUNA
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook" target="_blank">screw</a>
</td></tr>
<tr>
<td>Acer Chromebase 24
</td>
<td style="text-align:center;"> BUDDY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Toshiba Chromebook2 (2015)
</td>
<td style="text-align:center;"> GANDOF
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Asus Chromebox 2 (CN62)
</td>
<td style="text-align:center;"> GUADO
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Dell Chromebook 13 7310
</td>
<td style="text-align:center;"> LULU
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook" target="_blank">screw</a>
</td></tr>
<tr>
<td>Acer Chromebox CXI2
</td>
<td style="text-align:center;"> RIKKU
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Google Chromebook Pixel (2015)
</td>
<td style="text-align:center;"> SAMUS
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel-2015#TOC-Firmware-Write-Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Lenovo ThinkCentre Chromebox
</td>
<td style="text-align:center;"> TIDUS
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Baytrail</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Acer Chromebook 15 (CB3-531)
</td>
<td style="text-align:center;"> BANJO
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Dell Chromebook 11 (3120)
</td>
<td style="text-align:center;"> CANDY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo N20/N20P Chromebook
</td>
<td style="text-align:center;"> CLAPPER
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo N21 Chromebook
</td>
<td style="text-align:center;"> ENGUARDE
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo ThinkPad 11e/Yoga Chromebook
</td>
<td style="text-align:center;"> GLIMMER
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Acer Chromebook 11 (CB3-111/131, C730, C730E, C735)
</td>
<td style="text-align:center;"> GNAWTY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Haier Chromebook G2
</td>
<td style="text-align:center;"> HELI
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>HP Chromebook 11 G3/G4<br>HP Chromebook 14 G4
</td>
<td style="text-align:center;"> KIP
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>AOpen Chromebox Commercial
</td>
<td style="text-align:center;"> NINJA
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo Ideapad 100S Chromebook
</td>
<td style="text-align:center;"> ORCO
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Asus Chromebook C300
</td>
<td style="text-align:center;"> QUAWKS
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Asus Chromebook C200
</td>
<td style="text-align:center;"> SQUAWKS
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>

<tr>
<td>AOpen Chromebase Commercial
</td>
<td style="text-align:center;"> SUMO
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Toshiba Chromebook 2 (2014)
</td>
<td style="text-align:center;"> SWANKY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Samsung Chromebook 2 (XE500C12)
</td>
<td style="text-align:center;"> WINKY
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Braswell</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Acer Chromebook 15 (CB3-532)
</td>
<td style="text-align:center;"> BANON
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="/images/b/bb/Banon_wp.jpg" class="internal" title="Banon wp.jpg">screw</a>
</td></tr>
<tr>
<td>Samsung Chromebook 3
</td>
<td style="text-align:center;"> CELES
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-celes_2-1" class="reference"><a href="#cite_note-celes-2">[2]</a></sup>
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Acer Chromebook R11 (C738T, CB5-132T)
</td>
<td style="text-align:center;"> CYAN
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Acer Chromebook 14 (CB3-431)
</td>
<td style="text-align:center;"> EDGAR
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a rel="nofollow noopener noreferrer" class="external text" href="https://www.ifixit.com/Teardown/Acer+Chromebook+14+Teardown/76353" target="_blank">screw</a>
</td></tr>
<tr>
<td>Dell Chromebook 11 3180/3189
</td>
<td style="text-align:center;"> KEFKA
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo N22/N42 Chromebook
</td>
<td style="text-align:center;"> REKS
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Acer Chromebook 11 N7 (C731)<br>CTL NL61 Chromebook<br>Edxis Education Chromebook (NL6D)<br>HP Chromebook 11 G5 EE<br>Mecer V2 Chromebook<br>Positivo Chromebook C216B
</td>
<td style="text-align:center;"> RELM
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="/images/5/54/C731_wp.jpg" class="internal" title="C731 wp.jpg">screw</a>
</td></tr>
<tr>
<td>HP Chromebook 11 G5
</td>
<td style="text-align:center;"> SETZER
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Asus Chromebook C202S/C202SA
</td>
<td style="text-align:center;"> TERRA
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="/images/0/08/C202sa_wp.jpg" class="internal" title="C202sa wp.jpg">screw</a>
</td></tr>
<tr>
<td>Asus Chromebook C300SA/C301SA
</td>
<td style="text-align:center;"> TERRA13
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo ThinkPad 11e/Yoga Chromebook (G3)
</td>
<td style="text-align:center;"> ULTIMA
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>CTL J5 Chromebook<br>Edugear CMT Chromebook<br>Haier Chromebook 11 C<br>Multilaser Chromebook M11C<br>PCMerge Chromebook PCM-116T-432B<br>Prowise Chromebook Proline<br>Viglen Chromebook 360
</td>
<td style="text-align:center;"> WIZPIG
</td>
<td>
</td>
<td style="text-align:center;"> <span style="color:#ff0000"><b>EOL</b></span>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Skylake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Dell Chromebook 13 3380
</td>
<td style="text-align:center;"> ASUKA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Samsung Chromebook Pro
</td>
<td style="text-align:center;"> CAROLINE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Asus Chromebook C302CA
</td>
<td style="text-align:center;"> CAVE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>HP Chromebook 13 G1
</td>
<td style="text-align:center;"> CHELL
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Acer Chromebook 14 for Work<br>Acer Chromebook 11 (C771/C771T)
</td>
<td style="text-align:center;"> LARS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td>Lenovo Thinkpad 13 Chromebook
</td>
<td style="text-align:center;"> SENTRY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> screw
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Apollolake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Acer Chromebook 11 (C732)
</td>
<td style="text-align:center;"> ASTRONAUT
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook C223NA
</td>
<td style="text-align:center;"> BABYMEGA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook C523NA
</td>
<td style="text-align:center;"> BABYTIGER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>CTL Chromebook NL7/NL7T<br>Edxis Chromebook 11/X11<br>Positivo Chromebook N2110/N2112<br>Viglen Chromebook 360C<br>
</td>
<td style="text-align:center;"> BLACKTIP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 15 (CB315)
</td>
<td style="text-align:center;"> BLUE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 15 (CP315)
</td>
<td style="text-align:center;"> BRUCE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 11 (R751T)
</td>
<td style="text-align:center;"> ELECTRO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 514
</td>
<td style="text-align:center;"> EPAULETTE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 11 CP311
</td>
<td style="text-align:center;"> LAVA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Dell Chromebook 11 5190
</td>
<td style="text-align:center;"> NASHER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Dell Chromebook 11 5190 2-in-1
</td>
<td style="text-align:center;"> NASHER360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo Thinkpad 11e/Yoga 11e (G4)
</td>
<td style="text-align:center;"> PYRO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook C423
</td>
<td style="text-align:center;"> RABBID
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip C213SA
</td>
<td style="text-align:center;"> REEF
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 100e Chromebook
</td>
<td style="text-align:center;"> ROBO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 500e Chromebook
</td>
<td style="text-align:center;"> ROBO360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 15 (CB515-1HT)
</td>
<td style="text-align:center;"> SAND
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 11 (CB311-8H)
</td>
<td style="text-align:center;"> SANTA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 11 G1 EE<br>HP Chromebook 11 G6<br>HP Chromebook 14 G5
</td>
<td style="text-align:center;"> SNAPPY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>CTL Chromebook J41/J41T<br>PCmerge Chromebook AL116<br>Prowise Chromebook Eduline<br>Sector 5 E3 Chromebook<br>Viglen Chromebook 11C
</td>
<td style="text-align:center;"> WHITETIP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Kabylake / Amberlake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Acer Chromebook 13
</td>
<td style="text-align:center;"> AKALI
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 13
</td>
<td style="text-align:center;"> AKALI360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Google Pixelbook Go (2019)
</td>
<td style="text-align:center;"> ATLAS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 715 (CB715)
</td>
<td style="text-align:center;"> BARD
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 714 (CB714)
</td>
<td style="text-align:center;"> EKKO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Google Pixelbook (2017)
</td>
<td style="text-align:center;"> EVE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Google Meet kit (KBL)
</td>
<td style="text-align:center;"> EXCELSIOR
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/a/a8/Excelsior_wp.jpg" class="internal" title="Excelsior wp.jpg">screw</a>
</td></tr>
<tr>
<td>AOpen Chromebox Commercial 2<br>Newline Chromebox A10
</td>
<td style="text-align:center;"> JAX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, screw
</td></tr>
<tr>
<td>Acer Chromebase 24I2
</td>
<td style="text-align:center;"> KARMA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, screw
</td></tr>
<tr>
<td>HP Chromebox G2
</td>
<td style="text-align:center;"> KENCH
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Asus Chromebook C425
</td>
<td style="text-align:center;"> LEONA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Samsung Chromebook Plus V2
</td>
<td style="text-align:center;"> NAUTILUS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Google Pixel Slate
</td>
<td style="text-align:center;"> NOCTURNE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo Yoga Chromebook C630
</td>
<td style="text-align:center;"> PANTHEON
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip C433/C434
</td>
<td style="text-align:center;"> SHYVANA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebox CXI3
</td>
<td style="text-align:center;"> SION
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>HP Chromebook x360 14
</td>
<td style="text-align:center;"> SONA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook X2
</td>
<td style="text-align:center;"> SORAKA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 15 G1
</td>
<td style="text-align:center;"> SYNDRA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebox 3 (CN65)
</td>
<td style="text-align:center;"> TEEMO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td>Dell Inspiron Chromebook 14 (7460)
</td>
<td style="text-align:center;"> VAYNE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>CTL Chromebox CBx1<br>Promethean Chromebox<br>SMART Chromebox G3<br>ViewSonic NMP660 Chromebox
</td>
<td style="text-align:center;"> WUKONG
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a rel="nofollow noopener noreferrer" class="external text" href="https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect" target="_blank">screw</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Geminilake</i> <sup id="cite_ref-glk_4-1" class="reference"><a href="#cite_note-glk-4">[4]</a></sup>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
<p><br>
</p>
</th></tr>
<tr>
<td>Asus Chromebook Flip C214/C234
</td>
<td style="text-align:center;"> AMPTON
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip C204
</td>
<td style="text-align:center;"> APEL
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 12b
</td>
<td style="text-align:center;"> BLOOG
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 14a
</td>
<td style="text-align:center;"> BLOOGLET
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 14a/14b
</td>
<td style="text-align:center;"> BLOOGUARD
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 315
</td>
<td style="text-align:center;"> BLORB
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Samsung Chromebook 4
</td>
<td style="text-align:center;"> BLUEBIRD
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 311<br>(CB311-9H, CB311-9HT, C733, C733U, C733T)
</td>
<td style="text-align:center;"> BOBBA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 311 (CP311-2H, CP311-2HN)<br>Acer Chromebook Spin 511 (R752T, R752TN)
</td>
<td style="text-align:center;"> BOBBA360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Samsung Chromebook 4+
</td>
<td style="text-align:center;"> CASTA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>NEC Chromebook Y2
</td>
<td style="text-align:center;"> DOOD
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 14 G6
</td>
<td style="text-align:center;"> DORP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 314 (CB314)<br>Packard Bell Chromebook 314 (PCB314)
</td>
<td style="text-align:center;"> DROID
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Dell Chromebook 3100
</td>
<td style="text-align:center;"> FLEEX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>CTL Chromebook VX11/VX11T<br>Poin2 Chromebook 11P
</td>
<td style="text-align:center;"> FOOB
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Poin2 Chromebook 11P
</td>
<td style="text-align:center;"> FOOB360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>ADVAN Chromebook 116<br>Axioo Chromebook<br>Baicells Chromebook BB01<br>CTL Chromebook NL71/CT/LTE<br>EVERCOSS Chromebook CB1<br>Edxis Chromebook 11 (S20-C)<br>JOI Chromebook C100<br>Multilaser Chromebook M11C-PC914<br>Pixart Rxart Chromebook<br>Poin2 Chromebook 11A<br>SPC Chromebook X1 Mini<br>Sector 5 E4 LTE Chromebook<br>WS Chromebook A101<br>Zyrex Chromebook M432
</td>
<td style="text-align:center;"> GARG
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Ascon Chromebook 11A<br>Axioo Chromebook 360<br>Baicells Chromebook BB01<br>CTL Chromebook NL71T/TW/TWB<br>EVERCOSS Chromebook CB1A<br>Edxis Chromebook 11 (S20-X)<br>JOI Chromebook C100<br>Multilaser Chromebook M11HC-PC915<br>Pixart Rxart Chromebook<br>Poin2 Chromebook 11A<br>SPC Chromebook X1 Mini<br>WS Chromebook A101<br>Zyrex Chromebook 360
</td>
<td style="text-align:center;"> GARG360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>CTL Chromebook NL81/NL81T
</td>
<td style="text-align:center;"> GARFOUR
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 311
</td>
<td style="text-align:center;"> GLK
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 311
</td>
<td style="text-align:center;"> GLK360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Dell Chromebook 3100 2-in-1
</td>
<td style="text-align:center;"> GRABBITER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo Chromebook C340
</td>
<td style="text-align:center;"> LASER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo Chromebook S340/IdeaPad 3
</td>
<td style="text-align:center;"> LASER14
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo Ideapad 3 Chromebook
</td>
<td style="text-align:center;"> LICK
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 11 G2 EE
</td>
<td style="text-align:center;"> MEEP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 11 G7 EE
</td>
<td style="text-align:center;"> MIMROCK
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook C424
</td>
<td style="text-align:center;"> NOSPIKE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Dell Chromebook 3400
</td>
<td style="text-align:center;"> ORBATRIX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 100e Chromebook Gen 2
</td>
<td style="text-align:center;"> PHASER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 300e Chromebook Gen 2/IdeaPad Flex 3<br>NEC Chromebook Y1
</td>
<td style="text-align:center;"> PHASER360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 500e Chromebook Gen 2
</td>
<td style="text-align:center;"> PHASER360S
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 512 (C851/C851T)
</td>
<td style="text-align:center;"> SPARKY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 512 (R851TN)
</td>
<td style="text-align:center;"> SPARKY360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 11 G8 EE
</td>
<td style="text-align:center;"> VORTICON
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 11 G3 EE
</td>
<td style="text-align:center;"> VORTININJA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Stoneyridge</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Acer Chromebook 315 (CB315-2H)
</td>
<td style="text-align:center;"> ALEENA
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-1" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 11A G6 EE<br>HP Chromebook 11A G8 EE
</td>
<td style="text-align:center;"> BARLA
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-2" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 14A G5
</td>
<td style="text-align:center;"> CAREENA
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-3" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 311 (C721)
</td>
<td style="text-align:center;"> KASUMI
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-4" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 311 (R721T)
</td>
<td style="text-align:center;"> KASUMI360
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-5" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 14e Chromebook (S345)
</td>
<td style="text-align:center;"> LIARA
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-6" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 100e Chromebook Gen 2 AMD
</td>
<td style="text-align:center;"> TREEYA
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-7" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 300e Chromebook Gen 2 AMD
</td>
<td style="text-align:center;"> TREEYA360
</td>
<td>
</td>
<td style="text-align:center;"> ✅ <sup id="cite_ref-stoney_3-8" class="reference"><a href="#cite_note-stoney-3">[3]</a></sup>
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Whiskeylake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Dell Latitude 5300 2-in-1 Chromebook Enterprise
</td>
<td style="text-align:center;"> ARCADA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">battery</a>
</td></tr>
<tr>
<td>Dell Latitude 5400 Chromebook Enterprise
</td>
<td style="text-align:center;"> SARIEN
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">battery</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Cometlake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Lenovo Ideapad Flex 5 Chromebook
</td>
<td style="text-align:center;"> AKEMI
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 14c
</td>
<td style="text-align:center;"> DRAGONAIR
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Dell Latitude 7410 Chromebook Enterprise
</td>
<td style="text-align:center;"> DRALLION
</td>
<td>
</td>
<td style="text-align:center;">  ✅
</td>
<td style="text-align:center;">  ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Pro c640 Chromebook
</td>
<td style="text-align:center;"> DRATINI
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebox 4
</td>
<td style="text-align:center;"> DUFFY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/a/ab/Duffy_wp_jumper.png" class="internal" title="Duffy wp jumper.png">jumper</a>
</td></tr>
<tr>
<td>Asus Fanless Chromebox
</td>
<td style="text-align:center;"> FAFFY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook Flip C436FA
</td>
<td style="text-align:center;"> HELIOS
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Elite c1030 Chromebook<br>HP Chromebook x360 13c
</td>
<td style="text-align:center;"> JINLON
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebox CXI4
</td>
<td style="text-align:center;"> KAISA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook 712 (C871)
</td>
<td style="text-align:center;"> KINDRED
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 713 (CP713-2W)
</td>
<td style="text-align:center;"> KLED
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Samsung Galaxy Chromebook
</td>
<td style="text-align:center;"> KOHAKU
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Samsung Galaxy Chromebook 2
</td>
<td style="text-align:center;"> NIGHTFURY
</td>
<td>
</td>
<td style="text-align:center;">
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebox G3
</td>
<td style="text-align:center;"> NOIBAT
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/9/9d/Noibat_wp.png" class="internal" title="Noibat wp.png">jumper</a>
</td></tr>
<tr>
<td>CTL Chromebox CBx2
</td>
<td style="text-align:center;"> WYVERN
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/b/b0/Wyvern_WP_jumper.png" class="internal" title="Wyvern WP jumper.png">jumper</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Picasso/Dali</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>HP Pro c645 Chromebook Enterprise
</td>
<td style="text-align:center;"> BERKNIP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook 14a
</td>
<td style="text-align:center;"> DIRINBOZ
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 514
</td>
<td style="text-align:center;"> EZKINIL
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 14a
</td>
<td style="text-align:center;"> GUMBOZ
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo ThinkPad C13 Yoga Chromebook
</td>
<td style="text-align:center;"> MORPHIUS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 100e Chromebook Gen 3
</td>
<td style="text-align:center;"> VILBOZ
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 14e Chromebook Gen 2
</td>
<td style="text-align:center;"> VILBOZ14
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 300e Chromebook Gen 3
</td>
<td style="text-align:center;"> VILBOZ360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip CM5
</td>
<td style="text-align:center;"> WOOMAX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;">
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>TigerLake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>FMV Chromebook 14F
</td>
<td style="text-align:center;"> CHRONICLER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip CX3
</td>
<td style="text-align:center;"> COLLIS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip CX5 (CX5400)
</td>
<td style="text-align:center;"> COPANO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip CX55, CX5 (CX5500), C536
</td>
<td style="text-align:center;"> DELBIN
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Asus Chromebook CX9 (CX9400)
</td>
<td style="text-align:center;"> DROBIT
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Chromebook x360 14c
</td>
<td style="text-align:center;"> ELDRID
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>HP Pro c640 G2 Chromebook
</td>
<td style="text-align:center;"> ELEMI
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo IdeaPad Flex 5i Chromebook
</td>
<td style="text-align:center;"> LILLIPUP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Lenovo 5i-14 Chromebook<br>Lenovo Slim 5 Chromebook
</td>
<td style="text-align:center;"> LINDAR
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 514 (CB514-2H)
</td>
<td style="text-align:center;"> VOEMA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 515 (CB515-1W, CB515-1WT)
</td>
<td style="text-align:center;"> VOLET
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook 514 (CB514-1W, CB514-1WT)
</td>
<td style="text-align:center;"> VOLTA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 713 (CP713-3W)
</td>
<td style="text-align:center;"> VOXEL
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50 (battery)</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>JasperLake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>Lenovo Flex 3i 15 / Ideapad Flex 3i Chromebook
</td>
<td style="text-align:center;"> BEETLEY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Lenovo 3i-15 Chromebook
</td>
<td style="text-align:center;"> BLIPPER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Lenovo 100e Chromebook Gen 3
</td>
<td style="text-align:center;"> BOOKEM
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/5/5c/Boten_wp.jpg" class="internal" title="Boten wp.jpg">jumper</a>
</td></tr>
<tr>
<td>Lenovo 500e Chromebook Gen 3
</td>
<td style="text-align:center;"> BOTEN
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/5/5c/Boten_wp.jpg" class="internal" title="Boten wp.jpg">jumper</a>
</td></tr>
<tr>
<td>Lenovo Flex 3i-11 / IdeaPad Flex 3i Chromebook
</td>
<td style="text-align:center;"> BOTENFLEX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/5/5c/Boten_wp.jpg" class="internal" title="Boten wp.jpg">jumper</a>
</td></tr>
<tr>
<td>Samsung Galaxy Chromebook 2 360
</td>
<td style="text-align:center;"> BUGZZY
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Dell Chromebook 3110
</td>
<td style="text-align:center;"> CRET
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Dell Chromebook 3110 2-in-1
</td>
<td style="text-align:center;"> CRET360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>HP Chromebook x360 11 G4 EE
</td>
<td style="text-align:center;"> DRAWCIA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/5/50/Drawcia_wp.jpg" class="internal" title="Drawcia wp.jpg">jumper</a>
</td></tr>
<tr>
<td>HP Chromebook 11 G9 EE
</td>
<td style="text-align:center;"> DRAWLAT
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/1/17/Drawlat_wp.jpg" class="internal" title="Drawlat wp.jpg">jumper</a>
</td></tr>
<tr>
<td>HP Chromebook 14 G7
</td>
<td style="text-align:center;"> DRAWMAN
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/5/52/Drawman_wp.jpg" class="internal" title="Drawman wp.jpg">jumper</a>
</td></tr>
<tr>
<td>HP Fortis 14 G10 Chromebook
</td>
<td style="text-align:center;"> DRAWPER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/5/52/Drawman_wp.jpg" class="internal" title="Drawman wp.jpg">jumper</a>
</td></tr>
<tr>
<td>Asus Chromebook CX1500CKA
</td>
<td style="text-align:center;"> GALITH
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook CX1500FKA
</td>
<td style="text-align:center;"> GALITH360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook CX1700CKA
</td>
<td style="text-align:center;"> GALLOP
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook CX1 CX1102
</td>
<td style="text-align:center;"> GALNAT
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook Flip CX1 CX1102
</td>
<td style="text-align:center;"> GALNAT360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook CX1
</td>
<td style="text-align:center;"> GALTIC
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook CX1400FKA
</td>
<td style="text-align:center;"> GALTIC360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>CTL Chromebook NL72
</td>
<td style="text-align:center;"> KRACKO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>CTL Chromebook NL72T <br>LG Chromebook 11TC50Q/11TQ50Q
</td>
<td style="text-align:center;"> KRACKO360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>HP Chromebook x360 14a-ca1
</td>
<td style="text-align:center;"> LANDIA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>HP Chromebook 15a-na0
</td>
<td style="text-align:center;"> LANDRID
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>HP Chromebook 14a
</td>
<td style="text-align:center;"> LANTIS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>HP Chromebook x360 14b
</td>
<td style="text-align:center;"> MADOO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook Spin 314
</td>
<td style="text-align:center;"> MAGISTER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook 512 [C852]
</td>
<td style="text-align:center;"> MAGLET
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook Spin 512 [R853TA/R853TNA]
</td>
<td style="text-align:center;"> MAGLIA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/b/b6/Maglia_wp.jpg" class="internal" title="Maglia wp.jpg">jumper</a>
</td></tr>
<tr>
<td>Acer Chromebook 511 [C733/C734]
</td>
<td style="text-align:center;"> MAGLITH
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook 315 [CB315-4H/4HT]
</td>
<td style="text-align:center;"> MAGMA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook 314 [CB314-3H/3HT, C934/C934T]
</td>
<td style="text-align:center;"> MAGNETO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook Spin 511 [R753T]
</td>
<td style="text-align:center;"> MAGOLOR
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Acer Chromebook 317 [CB317-1H]
</td>
<td style="text-align:center;"> MAGPIE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/3/3c/Magpie_wp_jumper.png" class="internal" title="Magpie wp jumper.png">jumper</a>
</td></tr>
<tr>
<td>NEC Chromebook Y3
</td>
<td style="text-align:center;"> METAKNIGHT
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, <a href="/images/3/3c/Magpie_wp_jumper.png" class="internal" title="Magpie wp jumper.png">jumper</a>
</td></tr>
<tr>
<td>Gateway Chromebook 15
</td>
<td style="text-align:center;"> PASARA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Axioo Chromebook P11<br>CTL Chromebook PX11E<br>SPC Chromebook Z1 Mini<br>Zyrex Chromebook M432-2
</td>
<td style="text-align:center;"> PIRETTE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Axioo Chromebook P14<br>Gateway Chromebook 14
</td>
<td style="text-align:center;"> PIRIKA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Samsung Galaxy Chromebook Go
</td>
<td style="text-align:center;"> SASUKE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook CR1100CKA
</td>
<td style="text-align:center;"> STORO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td>Asus Chromebook Flip CR1100FKA
</td>
<td style="text-align:center;"> STORO360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>, jumper
</td></tr>
<tr>
<td colspan="7">
</td></tr>

<tr>
<th colspan="7" style="text-align:left;"> <i>Alderlake</i>
</th></tr>
<tr>
<th scope="col"> Device Name
</th>
<th scope="col"> Board Name
</th>
<td>
</td>
<th scope="col"> RW_LEGACY <br> Firmware
</th>
<th scope="col"> UEFI Firmware <br>(Full ROM)
</th>
<td>
</td>
<th scope="col"> WP Method
</th></tr>
<tr>
<td>HP Elite c640 14 inch G3 Chromebook
</td>
<td style="text-align:center;"> ANAHERA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Framework Laptop Chromebook Edition
</td>
<td style="text-align:center;"> BANSHEE
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Dell Latitude 5430 Chromebook
</td>
<td style="text-align:center;"> CROTA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Dell Latitude 5430 2-in-1 Chromebook
</td>
<td style="text-align:center;"> CROTA360
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Asus Chromebook Flip CX5 (CX5601)
</td>
<td style="text-align:center;"> FELWINTER
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Acer Chromebook Spin 714 (CP714-1WN)
</td>
<td style="text-align:center;"> KANO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Asus Chromebook CX34 Flip<br>Asus Chromebook Vibe CX34 Flip
</td>
<td style="text-align:center;"> MITHRAX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Acer Chromebook 516 GE (CBG516-1H)
</td>
<td style="text-align:center;"> OSIRIS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Lenovo ThinkPad C14 Gen 1 Chromebook
</td>
<td style="text-align:center;"> PRIMUS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>HP Elite Dragonfly Chromebook
</td>
<td style="text-align:center;"> REDRIX
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Lenovo IdeaPad Gaming Chromebook 16
</td>
<td style="text-align:center;"> TANIKS
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Lenovo Flex 5i Chromebook / IdeaPad Flex 5i Chromebook
</td>
<td style="text-align:center;"> TAEKO
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Acer Chromebook Vero 514
</td>
<td style="text-align:center;"> VOLMAR
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td>Acer Chromebook Vero 712 (CV872, CV872T)
</td>
<td style="text-align:center;"> ZAVALA
</td>
<td>
</td>
<td style="text-align:center;"> ✅
</td>
<td style="text-align:center;"> ✅
</td>
<td>
</td>
<td style="text-align:center;"> <a href="https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection" title="Firmware Write Protect">CR50</a>
</td></tr>
<tr>
<td colspan="7">
</td></tr>

</tbody></table>

----
Originally from https://mrchromebox.tech/#devices

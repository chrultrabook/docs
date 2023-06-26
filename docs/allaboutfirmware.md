---
title: All About Firmware
layout: default
nav_order: 7
---


## All About Firmware

**RW_LEGACY**
* Updates/replaces the stock legacy boot payload (SeaBIOS) included on many models; supplements the ChromeOS / secure boot payload
* Leaves all stock functionality intact, including the Developer Mode boot screen and Recovery Mode functionality
* Allows device to dual-boot another OS alongside ChromeOS
* Does not require disabling the firmware write-protect
* Carries zero risk of bricking the device
* On many models, includes bugfixes and enables additional functionality

{: .highlight }
Do not run Windows on RWL. The RW_LEGACY firmware is for users who want to dual-boot ChromeOS + Linux, or users who want to run Linux without having to open the device/disable the firmware write-protect (and are ok with the accompanying limitations).


**(UEFI) Full ROM**
* A complete firmware image which includes updated/customized versions of the hardware init component (coreboot) and UEFI boot payload (Tianocore); Chromeboxes have the option of a Legacy Boot (SeaBIOS) firmware also, since some specialized Linux distros run on them are not yet UEFI compatible (e.g., roon)
* Removes the developer mode boot (white "OS verification is OFF") screen
* Completely removes the ability to run ChromeOS (and ChromeOS Recovery Mode), creating a small risk of bricking your device
* Offers the best support for booting all OSes besides ChromeOS
* Adds full hardware support for virtualization (vmx / VT-x)
* Fixes many bugs and/or idiosyncrasies associated with the stock firmware
* UEFI firmware contains updated EC firmware as well, which brings additional fixes on most Chromebooks (mainly keyboard related)
* Requires installation of a UEFI-compatible OS after flashing
* Essentially turns your ChromeOS device into a "regular" PC / laptop

{: .highlight }
The (UEFI) Full ROM firmware is the best option for all users who no longer need/want to run ChromeOS (ie, want to run Linux/Windows exclusively), and who don't mind opening their device to disable the firmware write-protect.

<br>

---------------

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="getting-started.html">← Getting Started</a> 
</td>
<td width="50%" style="text-align: right">
<a href="firmware.html">Flashing Firmware →</a> 
</td>
</tr>
</table>

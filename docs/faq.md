---
title: FAQ
layout: default
nav_order: 2
---

# FAQ

{: .highlight }
Please read this page before asking a question in the Discord. Your help request will be ignored if the answer is found on the FAQ.

-----

**Can I pay for Windows drivers using PayPal?**
* You can pay via PayPal in Patreon. 

**How do I buy the Windows audio/Thunderbolt drivers?**
* See [here](https://chrultrabook.github.io/docs/docs/csdriver.html)

**Can I get AVS or SOF drivers for free?**
* No.
 
**How come audio isn't working on Ubuntu / Ubuntu forks?**
* Because their packages are broken. Please switch to another distro that isn't based off of Ubuntu, like Arch Linux or Fedora.

**What Linux distros are recommended?**
* See [here](https://chrultrabook.github.io/docs/docs/installing-linux.html)

**Why is there a license error in Device Manager after installing audio drivers?**
* You messed up the license setup. Please refer to the [licensing guide](https://chrultrabook.github.io/docs/docs/signedlicense.html) and try again.

**Can I hackintosh my Celeron/Pentium CPU?**
* No.

**What OS should I use?**
* This depends on your use case. Only you can answer this question.

**Should I use Windows 10 or 11?**
* Windows 11 is required for TB4 users. If you don't have Thunderbolt 4, you may use both 10 or 11.

**How do I buy Windows audio drivers in bulk?**
* Please ping CoolStar in the [Chrultrabook Discord](https://discord.com/invite/ranFKmUeXc).

**Can I use one driver license across multiple devices?**
* No. One license per device.

**I want to buy a Chromebook to run Windows or Linux or macOS -- which should I buy?**
* Buying any Chromebook with the intention of running macOS, Windows or Linux is not a great idea. Many can't boot anything other than ChromeOS; Those that can boot Linux (or Windows) often have functional deficiencies -- DO NOT EXPECT EVERYTHING TO WORK OUT OF THE BOX. Older models may fair better compatibility wise, but there are still lots of caveats, and it's not recommended to buy a Chromebook as a cheap Linux device.

**How can I get audio working under Linux?**
* Please see [here](https://github.com/WeirdTreeThing/chromebook-linux-audio)

**I just want to boot Linux from USB on my Chromebook, what do I need to do?**
* Check the Supported Devices page, to ensure your device has functional RW_LEGACY firmware available. If so, then simply put your device into Developer Mode, then run my script and update the RW_LEGACY firmware (no need to disable the firmware write protect for this). Reboot, press CTRL+L to boot in Legacy Boot Mode/Alternative Bootloader Menu, then press ESC and select your USB from the boot menu.

**I just installed the UEFI firmware, and now my device boots to a black screen that says 'shell' - what do I do?**
* You're in the EFI shell; the firmware boots there when it can't find a valid UEFI boot device, either externally (USB, SD) or internally. Just type 'exit' to get back to the the UEFI settings menu, from which you can select your boot device or reboot.

You need to install a UEFI-boot capable OS from a properly formatted USB/SD device. If you're creating the install media from Windows, use Rufus to write the ISO to USB.
If writing a Windows ISO, select the ISO, then set the Partition scheme to 'MBR for UEFI' or 'GPT for UEFI;' 'MBR for UEFI-CSM' will not work since CSM = Legacy BIOS and the UEFI firmware doesn't support Legacy mode.
For a Linux ISO, select the ISO, then change the write mode from 'ISO Image' to 'DD Image' from the drop-down menu. As most Linux ISO images these days are compatible with both Legacy and UEFI booting, this ensures maximum compatibility.








<table>
<tr>
<td width="100%" style="text-align: left">
<a href="getting-started.html">← Getting Started</a> 
</td>
</tr>
</table>



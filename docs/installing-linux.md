---
title: Installing Linux
layout: default
nav_order: 12
---

## Installing Linux
Thanks to recent advancements in the chrultrabook community, Linux works really well on most Chromebooks.

----------------

### Recommended Distributions

{: .note } 
Only Linux kernel 6.1 LTS or newer is supported.

{: .warning } 
Ubuntu and Ubuntu-based distributions, such as Mint or ElementaryOS are unsupported.

**Recommended distros as of August 2023 (in no particular order) are:**

* Arch Linux
* Fedora
* OpenSUSE Tumbleweed
* Debian 12 (Bookworm)

----------------


### Installation:

1. Create a bootable Linux USB. See [here](bootableusb.html) for a guide.
2. Plug the USB Drive into the Chromebook.
3. Turn on the Chromebook, press `ESC` at the POST screen (when the boot logo appears), and select your USB to boot from. 
4. Install as you would on any other computer.


--------------


### Fixing Audio

 {: .warning }
 Using AVS on a device with max98357a will blow your speakers. You have been warned. 

**Prerequisites**
- Python 3.10 or newer
- Git

**Installation**
0. Open a terminal.
1. `git clone https://github.com/WeirdTreeThing/chromebook-linux-audio`
2. `cd chromebook-linux-audio`
3. `./setup-audio`

For more information please see [WeirdTreeThing's repo](https://github.com/WeirdTreeThing/chromebook-linux-audio)

{: .fs-5 }

**Stoneyridge Audio, Sleep support, and more.**
**for debian**

{: .warning }
please dont do this and main it, fire hazard risk


0. run inside a terminal `wget https://tree123.org/chrultrabook/stoney-emmcfix.tar.gz`
1. `tar -xf stoney-emmcfix.tar.gz`
2. Shalt be warned, shalt chromebook may explode.
3.`sudo apt-get install build-essential automake autoconf libtool pkg-config libcurl4-openssl-dev intltool libxml2-dev libgtk2.0-dev libnotify-dev libglib2.0-dev libevent-dev checkinstall`
4.`cd stoney-emmcfix`
5. `sudo checkinstall`
6. follow le prompts with desired info.

{: .note}
kernel ver is 6.4.3-dirty

7. have fun with your new fire starter
      
<table>
<tr>
<td class="navtable-l">
<a href="altos.html">← Installing altOS</a> 
</td>
<td class="navtable-r">
<a href="post-install.html">Post Install →</a> 
</td>
</tr>
</table>

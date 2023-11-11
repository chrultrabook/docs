## Installing Linux
Thanks to recent advancements in the chrultrabook community, Linux works really well on most Chromebooks.

----------------

### Recommended Distributions

{: .note } 
Only Linux kernel 6.4 or newer is supported.

{: .warning } 
Ubuntu and Ubuntu-based distributions that are not based on 23.10 or higher **may have issues**.

{: .warning } 
Debian versions older than Debian 12 (Bookworm) are **not supported**.

{: .warning } 
Debian 12 (Bookworm) requires a custom kernel, the [audio script](https://chrultrabook.github.io/docs/docs/installing-linux.html#fixing-audio) will automatically install it for you.

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
5. (Optional) Install Chultrabook Tools for fan controls, backlight controls, system information and more
   See [Chrultrabook Controller](https://github.com/death7654/Chrultrabook-Controller)


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

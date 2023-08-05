---
title: AltOS Pros/Cons
layout: default
nav_order: 10
---

## altOS Pros / Cons

-----------------------


**Windows:**

Pros:
* Works on most platforms with minimal tweaking¹
* Generally has better application support
* Better game support

Cons: 
* Audio driver is paid (10 USD)
* Thunderbolt driver is paid (20 USD)
* Requires the user to install many drivers
* AVS and SOF users experience instability at times

### [Installing Windows →](installing-windows.html) 

<br>

¹Some devices such as CELES need workarounds. Additionally, AMD Ryzen devices need to use CoolStar's RW_LEGACY script in order to boot Windows. Refer to the [known issues page](known-issues.html) to check whether you need patches.

----------

**Linux**

Pros:
* Free audio support 
* Lightweight and optimal for Chrultrabooks with low storage / slow CPUs
* Most hardware (biggest exception is audio) will work out of the box

Cons:
* Potentially difficult for a new user (depending on the distro of choice)
* Requires some work on the end user (running audio script, configuring keyboard mapping)
* AVS and SOF users experience instability at times

   {: .note }
   Anything Ubuntu based will **not** work, with the exception of PopOS. Linux Mint, Ubuntu, and ElementaryOS are some examples. 

<br>

### [Installing Linux →](installing-linux.html)


----------

**macOS**

Pros:
* OS experience is near identical to a Mac

Cons:
* Battery life is subpar
* Hardware based DRM (e.g AppleTV.app) is broken
* No audio, mic, or 3.5mm support¹
* Doesn't support all devices.
* Often takes up to a week or longer to set up.
* Limited support

{: .note }
Any Chromebook with a ARM, Celeron or Pentium CPU is not supported.

### [Installing macOS →](installing-macos.html)

<br>


<table>
<tr>
<td class="navtable">
<a href="firmware.html">← Flashing Coreboot Firmware</a> 
</td>
</tr>
</table>


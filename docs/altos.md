---
title: AltOS Pros/Cons
layout: default
nav_order: 8
---

### So you're wondering what OS you can install on your newly flashed chrultrabook. Here's a list of pros/cons of every OS.

----------

**Windows:**

Pros:
* Easy to setup 
* Works on most platforms with minimal tweaking¹
* Almost everything works OOTB

Cons: 
* Audio driver is paid (10 USD)
* Thunderbolt driver is paid (20 USD)
* AVS and SOF users experience instability at times

### [Installing Windows →](installing-windows.html) 

¹Some devices such as CELES need workarounds. Additionally, AMD Ryzen devices need several modifications to enable Windows support.

----------

**Linux**

Pros:
* Free audio support 
* Lightweight
* Optimal for Chrultrabooks with low storage / slow CPUs

Cons:
* Potentially diffucult for a new user (depending on the distro of choice)
* Requires some work on the end user
* Outdated audio driver packages on certain distros.

   {: .note }
   Anything Ubuntu based will **not** work. Linux Mint, Ubuntu, and ElementaryOS are some examples.

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
* Takes often up to a week or longer to setup.
* Limited support

  {: .note }
  **Any** Chromebook with a Celeron or Pentium CPU is not supported.

### [Installing macOS →](installing-macos.html)

<table>
<tr>
<td width="100%" style="text-align: left">
<a href="firmware.html">← Flashing Coreboot Firmware</a> 
</td>
</tr>
</table>

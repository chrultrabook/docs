---
prev: false
next: false
---
# Installing an OS

<br>

## Windows

### Pros:
* Works on most platforms with minimal tweaking¹
* Generally has better application support
* Better game support

### Cons: 
* Audio driver is paid (10 USD) for Skylake (6th generation) and newer devices
* USB4/Thunderbolt driver is paid (20 USD) for **TigerLake** (11th generation Intel processors) and **newer** generations on devices that require them
* Requires the user to install many drivers
* AVS and SOF users may experience instability at times

### [Installing Windows →](installing-windows) 

<br>

¹Some devices such as CELES need workarounds. Refer to the [known issues page](known-issues.html) to check whether you need patches.

---

## Linux

### Pros:
* Free audio support 
* Lightweight and optimal for Chrultrabooks with low storage / slow CPUs
* Most hardware (biggest exception is audio) will work out of the box

### Cons:
* Potentially difficult for a new user (depending on the distro of choice)
* Requires some work on the end user (running audio script, configuring keyboard mapping)
* AVS and SOF users experience instability at times

   ::: warning
   Ubuntu and Ubuntu-based distributions that are not based on 23.10 or higher **may have issues**.
   :::

<br>

### [Installing Linux →](installing-linux)

---

## macOS

### Pros:
* OS experience is near identical to a Mac

### Cons:
* Battery life is subpar
* Hardware based DRM (e.g AppleTV.app) is broken
* No audio, mic, or 3.5mm support¹
* Doesn't support all devices.
* Often takes up to a week or longer to set up.
* Limited support

::: tip
Any Chromebook with an ARM, Celeron or Pentium CPU is not supported. AMD Ryzen might have support in the future.
:::

### [Installing macOS →](installing-macos)

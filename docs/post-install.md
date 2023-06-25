---
title: Post Install 
layout: default
nav_order: 12
---

## Post Install for altOS

//WIP

### Windows
* Compress the install with `compact.exe /compactos:always` in a command prompt with admin privileges if necessary.
* Install [CoolStar's drivers](https://coolstar.org/chromebook/windows-install.html) if you haven't already 


### Linux
* Run the [audio script](https://github.com/WeirdTreeThing/chromebook-linux-audio) if you haven't already.
* Install [keyd](https://github.com/rvaiya/keyd) with the instructions in the README to remap top row FX keys.
  * Pick the relevant [keyboard layout](https://github.com/eupnea-linux/eupnea-utils/tree/main/configs/keyboard-layouts) and copy to `/etc/keyd/default.conf`


### macOS 
* [Remove Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html#macos-decluttering)
* [OpenCore GUI](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-opencore-s-gui)
* [Setup Emulated NVRAM](https://dortania.github.io/OpenCore-Post-Install/misc/nvram.html) if necessary.




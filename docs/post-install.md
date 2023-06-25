---
title: Post Install 
layout: default
nav_order: 12
---

## Post Install for altOS

WIP

### Windows
* compress the install with `compact.exe /compactos:always` in an admin command prompt if neccessary
* install [drivers](https://coolstar.org/chromebook/windows-install.html) if you haven't already 


### Linux
* run the [audio script](https://github.com/WeirdTreeThing/chromebook-linux-audio) if you haven't already
* install [keyd](https://github.com/rvaiya/keyd) with the instructions in the readme
* pick the relevent [keyboard layout](https://github.com/eupnea-linux/eupnea-utils/tree/main/configs/keyboard-layouts) and copy to `/etc/keyd/default.conf`


### macOS 
* [Remove Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html#macos-decluttering)
* [OpenCore GUI](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-opencore-s-gui)
* [Emulated NVRAM](https://dortania.github.io/OpenCore-Post-Install/misc/nvram.html) if neccessary
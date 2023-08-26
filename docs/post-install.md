---
title: Post Install 
layout: default
nav_order: 16
---

## Post Install for altOS


### Windows

** Drivers and QOL improvements**
* Compress the install with `compact.exe /compactos:always` in a Command Prompt with admin privileges if necessary.
* Install [CoolStar's drivers](https://coolstar.org/chromebook/windows-install.html) if you haven't already
* Buy audio drivers (if needed), see [the guide](csdriver.html) 

**CELES Post Install Workaround**

1. Boot the Windows install media you used to install Windows.
2. Click "Repair my computer" and select the Command Prompt option.
3. Type `bcdedit /set {default} useplatformclock true` and press Enter.
4. Reboot

-----------------------


### Linux

**General QOL Fixes**

* Run the [audio script](https://github.com/WeirdTreeThing/chromebook-linux-audio) if you haven't already.
* Install [keyd](https://github.com/rvaiya/keyd) with the instructions in the README to remap top row FX keys.
  * Pick the relevant [keyboard layout](https://github.com/chrultrabook/keydconfig) and copy to `/etc/keyd/default.conf`

**Fixing USB C on TigerLake and AlderLake**
1. Create a file called `chromebook-usbc.service` file in `/etc/systemd/system/`
2. Paste the following contents into the file:

    ```
   [Unit]
   Description=Enable USB-C on chromebook
   
   [Service]
   Type=oneshot
   RemainAfterExit=yes
   ExecStartPre=/sbin/modprobe -r -a cros-ec-typec intel-pmc-mux
   ExecStart=/sbin/modprobe -a intel-pmc-mux cros-ec-typec
   
   [Install]
   WantedBy=multi-user.target
   ```
3. Enable the systemd service by typing `systemctl enable  --now chromebook-usbc.service`, then reboot.

-----------------------


### macOS 
* [Remove Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html#macos-decluttering)
* [OpenCore GUI](https://dortania.github.io/OpenCore-Post-Install/cosmetic/gui.html#setting-up-opencore-s-gui)
* Disable `DevirtualizeMimo` if you're on CML (CometLake, 10th generation)


<br>
<table>
<tr>
<td class="navtable-l">
<a href="altos.html">← Installing altOS</a> 
</td>
</tr>
</table>

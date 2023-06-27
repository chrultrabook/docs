---
title: Home
layout: home
nav_order: 1
---

<h1><div align="center">Welcome to the Chrultrabook Docs!</div></h1>

### What is a Chrultrabook and who is this guide for?

A Chrultrabook is a modified Chromebook designed to run Windows, Linux, or even macOS by utilizing MrChromebox coreboot firmware and custom CoolStar drivers. The purpose of this repository is to provide comprehensive and user-friendly documentation on hardware, firmware, and operating systems.

{: .fs-7 }
{: .text-center }
[Getting Started →](docs/getting-started.html)


--------------------------------------

**The wiki focuses on two main things:**

*   Installing altOS on your Chromebook.
*   Learning in-depth information about your Chromebook.

Because of this, you will be expected to read, learn, and even use Google. This is not a one click procedure.

--------------------------------------

Finally, those who are still facing issues can ask for help in the [chrultrabook Discord](https://discord.com/invite/tkPTk5w).

Help us improve this documentation on [GitHub](https://github.com/chrultrabook/docs/)!

All About Firmware
Firmware Types
RW_LEGACY

Updates/replaces the stock RW_LEGAGY payload (SeaBIOS or edk2) included on many older models; supplements the ChromeOS / secure boot payload (depthcharge)
Leaves all stock functionality intact, including the Developer Mode boot screen and Recovery Mode functionality
Allows device to dual-boot another OS alongside ChromeOS
Does not require disabling the firmware write-protect
Carries zero risk of bricking the device
On many models, includes bugfixes and enables additional functionality
Required to boot windows on Zen2 devices (Ryzen 3000)
{: .highlight } Do not run Windows on RW_LEGACY unless you have a Ryzen device. The RW_LEGACY firmware is for users who want to dual-boot ChromeOS + Linux, or users who want to run Linux without having to open the device/disable the firmware write-protect (and are ok with the accompanying limitations). Or for Ryzen users that require booting from stock firmware for Windows to function properly.

(UEFI) Full ROM

A complete firmware image which includes updated/customized versions of the hardware init component (coreboot) and UEFI boot payload (edk2)
Removes the developer mode boot ("OS verification is OFF") screen
Completely removes the ability to run ChromeOS (and ChromeOS Recovery Mode), creating a small risk of bricking your device
Offers the best support for booting all OSes besides ChromeOS
Adds full hardware support for virtualization (vmx / VT-x)
Fixes many bugs and/or idiosyncrasies associated with the stock firmware
UEFI firmware contains updated EC firmware as well, which brings additional fixes on most Chromebooks (mainly keyboard related)
Requires installation of a UEFI-compatible OS after flashing
Essentially turns your ChromeOS device into a "regular" PC / laptop
{: .highlight } The (UEFI) Full ROM firmware is the best option for all users who no longer need/want to run ChromeOS (ie, want to run Linux/Windows/macOS exclusively), and who don't mind disabling write-protection on their device


← Getting Started	Flashing Firmware →

---
title: AltOS Pros/Cons
layout: default
nav_order: 9
---

## altOS Pros / Cons



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

¹Some devices such as CELES need workarounds. Additionally, AMD Ryzen devices need to use CoolStar's RW_LEGACY script in order to boot Windows.

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
<td width="100%" style="text-align: left">
<a href="firmware.html">← Flashing Coreboot Firmware</a> 
</td>
</tr>
</table>

---
title: Compiling Custom Firmware
layout: default
nav_order: 16
---

### Cloning & Building ROMs

{: .warning }
Building and flashing your own firmware has the potential to brick your device. Do not do this unless you are sure you know what you're doing/have a way to recover from a bad flash. Some level of knowledge with using the Linux command line is required.

1. **Install tools and libraries needed for coreboot:**
  * Debian based distros: `sudo apt-get install -y bison build-essential curl flex git gnat libncurses5-dev m4 zlib1g-dev`
  * Arch based distros: `sudo pacman -S base-devel curl git gcc-ada ncurses zlib`
  * Redhat based distros: `sudo dnf install git make gcc-gnat flex bison xz bzip2 gcc g++ ncurses-devel wget zlib-devel patch`
2. **Clone the repository:**
    * `git clone https://github.com/mrchromebox/coreboot --depth 1`
3. **`cd` to the coreboot folder, then build the coreboot toolchain**
    * `make crossgcc-i386 CPUS=$(nproc)`
4. **Make changes now, if needed.**
    * Common changes include:
        * Replacing the default logo (`Documentation/coreboot_logo.bmp`)
        * Changing version string (`CONFIG_LOCALVERSION`)
5. **Build the ROM**
    * create build dir: `mkdir -p ~/dev/firmware`
    * `./build-uefi.sh <boardname>`
      * For example, `./build-uefi.sh leona`
    * Roms will be stored in `~/dev/firmware`
6. **Download flashrom, then give it execute permission.**
    * `cd; curl -LO https://elly.rocks/tmp/coreboot-development/flashrom-alderlake; chmod +x flashrom-alderlake`
7. **Flash your custom ROM**
    * Backup your current rom, just in case things go wrong: `./flashrom-alderlake -p internal -r current.rom`
    * Flash your custom firmware: `sudo ./flashrom-alderlake -p internal -w ~/dev/firmware/coreboot_edk2-<boardname>-mrchromebox_<yearmonthdate>.rom` 
8. **Reboot**
    * Assuming it said `success` on all checks, reboot.

   {: .warning }
    Do not reboot if any of the checks failed. 
    ---
title: Purchasing Drivers
layout: default
nav_order: 13
---


## Purchasing CoolStar Drivers

### Step 1:

Go to [CoolStar's Driver Portal](https://coolstar.org/chromebook/driverlicense/login.html) and click "Sign Up with Patreon".
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step1.png">

--------

### Step 2:

Click "Sign Up with Patreon" one more time.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step2.png">

--------

### Step 3:

Sign in to Patreon. If you don't have an account, click "Sign Up" at the bottom of the screen and follow the on screen instructions. 
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step3.png">

--------

### Step 4:

After signing in, you should have been redirected to the screen below. Follow the prompts and click "Submit" when you are done.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step4.png">

--------

### Step 5:

Visit [CoolStar's Patreon](https://www.patreon.com/coolstar), sign in, then select the driver your Chromebook needs.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step5.png">

{: .note }
You may need to select "See all 5 levels" if you don't see the driver you want.

--------

### Step 6:

Enter your payment information. You can also pay via PayPal.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step6.png">

--------

### Step 7:

Go back to the [CoolStar driver portal](https://coolstar.org/chromebook/driverlicense/login.html), and sign in with the username and password you chose in Step 3. After you sign in, head to the "Account" tab, then click "Refresh" under the word "Patreon".
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step8.png">

{: .note }
It may take up to **two** (2) hours for the funds to show up. Do not panic, you **did not get scammed.**

--------

### Step 8:
Once the funds show up, head back to "Available Drivers", select the driver you want to buy, then click "Buy".
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step9.png">

--------

### Step 9:

Unsubscribe from the Patreon so you don't get charged double.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/step7.png">

{: .warning }
If you do not unsubscribe, you will get charged again next month. 

--------

### Step 10:
Reboot.

![image](https://github.com/chrultrabook/docs/assets/77316348/7202cae6-ac59-493b-b488-880ff313dd8b)

--------

<table>
<td width="50%" style="text-align: right">
<a href="signedlicense.html">License Activation →</a> 
</td>
</table>
---
title: FAQ
layout: default
nav_order: 2
---

# FAQ

{: .highlight }
Please read this page before asking a question in the Discord. Your help request will be ignored if the answer is found on the FAQ.

-----

**Can I pay using PayPal?**
* You can pay via PayPal in Patreon. 

**How do I buy the audio driver?**
* See [here](https://chrultrabook.github.io/docs/docs/csdriver.html)

**Can I get AVS or SOF drivers for free?**
* No.
 
**How come audio isn't working on Ubuntu / Ubuntu forks?**
* Because their packages are broken. Please switch to another distro that isn't based off of Ubuntu, like Arch Linux or Fedora.

**What Linux distros are recommended?**
* See [here](https://chrultrabook.github.io/docs/docs/installing-linux.html)

**Why is there a license error in Device Manager after installing audio drivers?**\
* You messed up the license setup. Please refer to the [licensing guide](https://chrultrabook.github.io/docs/docs/signedlicense.html) and try again.

**Can I hackintosh my Celeron/Pentium CPU?**
* No.

**What OS should I use?**
* This depends on your use case. Only you can answer this question.

**Should I use Windows 10 or 11?**
* Windows 11 is required for TB4 users. If you don't have Thunderbolt 4, you may use both 10 or 11.

**How do I buy audio drivers in bulk?**
* Please ping CoolStar in the Chrultrabook Discord.

**Can I use one license across multiple devices?**
* No. One license per device.


<table>
<tr>
<td width="100%" style="text-align: left">
<a href="getting-started.html">← Getting Started</a> 
</td>
</tr>
</table>


---
title: Flashing Firmware
layout: default
nav_order: 8
---

## Flashing Custom Firmware

Refer to [here](allaboutfirmware.html) for a overview of both RW_LEGACY and UEFI.

{: .warning }
**Flashing the firmware has the potential to brick your device**, requiring relatively inexpensive hardware and some technical knowledge to recover. Not all boards can be tested prior to release, and even then slight differences in hardware can lead to unforeseen failures. If you don't have the ability to recover from a bad flash, you're taking a risk. Flashing Full ROM firmware will remove your ability to run ChromeOS. 


To convert your machine from Google's firmware and ChromeOS to Coreboot and AltOS (Linux/Windows/macOS), you will need to first perform the following steps:

1. [Enable developer mode](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/developer_mode.md)
2. Refer to [supported devices](supported-devices.html) to figure out which method you need to use to disable write-protect on your device.
3. Run [MrChromebox's firmware utility script.](https://mrchromebox.tech/#fwscript)
4. Make sure to create firmware backup and **store it in safe place** (Google drive, another pc, etc), reverting to stock without backup is **very difficult**.
5. Power the machine down and boot it back up. It can take up to a minute for display to come up on first POST. 

{: .warning }
Do **not** interrupt the first boot. 

-------

With that done, let's move onto installing AltOS.

{: .fs-5 }

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="allaboutfirmware.html">← All About Firmware</a> 
</td>
<td width="50%" style="text-align: right">
<a href="altos.html">Installing altOS →</a> 
</td>
</tr>
</table>

---
title: Getting Started
layout: default
nav_order: 4
---

## Getting Started
Before we begin, we need to go over a few things.

-------------

### Supported Chromebooks:

Please refer to [this chart](supported-devices.html) for a full list of supported devices.

-------------

### Prerequisites
* Know your hardware 
  * Your CPU name and its generation
  * Your iGPU
  * Your storage devices (HDD/SSD, eMMC, NVMe, etc.)
  * **Your boardname**
*  **A basic knowledge of command lines and how to use a terminal/command prompt.**
  * We can't help you if you don't know how to cd to a directory or delete a file.
* When asking for help, ask in English. We can't help you if we don't understand the question. Using a translator is fine.
* A minimum of an 8GB USB drive for making a bootable USB.

------

### Asking for help properly:
If you are facing a issue, please read the [FAQ](faq.html) first.

When asking for help, **do not use manufacturer's model name** (i.e: HP Chromebook 14a), it doesn't help with identifying the machine. Provide the boardname, otherwise your support request will be ignored.


### Provide logs.

* If you're experiencing firmware bugs, provide output from `cbmem` console.
* If you're experiencing issues with Linux, provide output from `dmesg`, `dmidecode` and `journalct`l or `/var/log/messages`, respectively
* If you're experiencing issues with Windows, provide screenshots from Device Manager, Event Viewer, coredumps etc.
* If you're experiencing issues with macOS, please ask for help in the Chrultrabook Discord, under #hackintosh. 

--------------


With that out the way, let's move on to the fun stuff:

{: .fs-5 }


<table>
<tr>
<td width="50%" style="text-align: left">
<a href="https://chrultrabook.github.io/docs/">← Home</a> 
</td>
<td width="50%" style="text-align: right">
<a href="allaboutfirmware.html">All About Firmware →</a> 
</td>
</tr>
</table>

---
title: Installing Linux
layout: default
nav_order: 10
---

## Installing Linux
Thanks to recent advancements in the chrultrabook community, Linux works really well on most Chromebooks.

----------------

### Recommended Distributions

{: .note } 
Only Linux kernel 6.1 LTS or newer is supported.

{: .warning } 
Ubuntu and Ubuntu-based distributions, such as Mint or ElementaryOS are unsupported.

**Recommended distros as of June 2023 (in no particular order) are:**

* Arch Linux
* Fedora
* OpenSUSE Tumbleweed
* Pop!_OS
* Debian 12 (Bookworm)

----------------


### Installation:

1. Create a bootable Linux USB. Ubuntu and Ubuntu based distros have outdated packages and thus are not supported.
2. Plug the USB Drive into the Chromebook.
3. Turn on the Chromebook, press `ESC` at the POST screen, and select the USB to boot from. 
4. Install as you would on any other computer.


--------------


### Fixing Audio

 {: .warning }
 Using AVS on a device with max98357a will blow your speakers. You have been warned. 

<br>

1. Run WeirdTreeThing's [audio script.](https://github.com/WeirdTreeThing/chromebook-linux-audio)

{: .fs-5 }


<table>
<tr>
<td width="50%" style="text-align: left">
<a href="altos.html">← Installing altOS</a> 
</td>
<td width="50%" style="text-align: right">
<a href="post-install.html">Post Install →</a> 
</td>
</tr>
</table>

---
title: Installing macOS
layout: default
nav_order: 11
---

## Installing macOS


Before we begin, it's important to know whether your Chromebook is even supported:
- ARM/AMD CPUs are not supported.
- Intel Celeron / Pentium CPUs are not supported.
- Tiger Lake (11th gen) CPUs and newer are not supported.
- You need at least 32gb of eMMC storage

**You will also need:**
* Patience 
    * This is not a one click setup thing. It usually takes one or more weeks to have a stable hack.
* A USB drive 
  * 4 gigabytes or more for a online installer;
  * 32 gigabytes or more for offline installer
* The ability to use a command prompt 
  * We won't help you if you don't know how to cd to a directory.

-------

### Tested Devices:

{: .note }
This list is incomplete. Feel free to improve it.

- Asus C425 (LEONA)
- Asus C434 (SHYVANA)
- Asus C433 (SHYVANA)
- Acer C720 / C720P (PEPPY)
- Dell Chromebook 13 7310	 (LULU)
- Google Pixelbook (2017)	(EVE)
- Google Pixel Slate	(NOCTURNE)
- Google Pixelbook Go (2019) (ATLAS)
- Dell Latitude 7410 Chromebook Enterprise (DRALLION)
- Asus Chromebox 2 (CN62)	(GUADO)
- HP Chromebook x360 14c (DRAGONAIR)

**The following devices have dedicated guides written for them:**

* [ChromebookOSX](https://github.com/meghan06/ChromebookOSX):
* Asus C425 (LEONA)
* Asus C434 (SHYVANA)
* Asus C433 (SHYVANA)

* [PixelbookOSX](https://github.com/olm3ca/PixelbookOSX):
* Google Pixelbook (2017) (EVE)
* Google Pixel Slate	(NOCTURNE)
* Google Pixelbook Go (2019) (ATLAS)

* [macOS-Dragonair](https://github.com/mine-man3000/macOS-Dragonair):
* HP Chromebook x360 14c (DRAGONAIR)

-------

**Installing macOS**


**Getting Started:**

1. Follow the [Dortania guide](https://dortania.github.io/OpenCore-Install-Guide).
2. if you didn't follow the laptop guide for your CPU generation

**Chromebook Specific Modifications**

1. [ChromebookPS2](https://github.com/meghan06/ChromebookPS2/): Remaps top row FX keys to their intended purpose for Chromebook keyboards
2. [croscorebootpatch](https://github.com/meghan06/croscorebootpatch): Fixes freeze on booting with coreboot 4.20 and up.
3. [crossdxcdisable](https://github.com/meghan06/crossdxcdisable): Disables SD card reader as it is unsupported.
4. [croshdasdisable](https://github.com/meghan06/croshdasdisable): Disables the `HDAS` device in ACPI as there is no support for it in macOS.
5. [EmeraldSDHC](https://github.com/acidanthera/EmeraldSDHC/releases): eMMC driver
6. Take those files you downloaded and put the `.aml` files in the ACPI folder, and the `.kexts` into the kexts folder
7. Snapshot (cmd +r) or (ctrl + r) your `config.plist`. 


{: .note }
`croshdasdisable` and `crossdxcdisable` disable unsupported devices in macOS, such as speakers. Disabling unsupported devices in macOS saves battery life and increases stability.

{: .warning }
If you dualboot with the SSDTs mentioned above, you might run into issues on other OSes. A `OSI_` check is not present in these SSDTs.

{: .fs-5 }

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="altos.html">← Installing altOS</a> 
</td>
<td width="50%" style="text-align: right">
<a href="post-install.html">Post Install →</a> 
</td>
</tr>
</table>



---
title: Installing Windows
layout: default
nav_order: 12
---

## Installing Windows

{: .warning }
**Do not use RW_LEGACY for dualbooting Windows**. Windows will never run on RWL. Dual-booting Windows with RWL is generally buggy and will cause you issues in the long run. **Full ROM (UEFI) is recommended for the best experience.** 


### Installation:

1. Install Windows from a USB:
    1. On another computer, create a Windows 10 or 11 installer with Rufus as "GPT for UEFI"
    2. Plug the USB Drive into the Chromebook
    3. Plug a USB mouse in for installation (If you only have one USB port, use tab, enter, and space to navigate the menu)
    4. Turn on the Chromebook, press ESC at the POST screen, and select the USB to boot from.

    {: .note }
    If you need to select a different boot device, press any key in "Select Boot Option". Then select "Boot Manager" to select your boot drive.

   {: .warning }
    **Do NOT** unplug the install USB until the installation has completed. If you do so, the installation will fail as the Windows install file won't exist anymore.

3. Bypassing Windows 11 installation checks:
    1. At the Windows installer, press Shift + F10 (Volume Up) to open command prompt  
    2. Type in "regedit" and press enter
    3. Navigate to HKEY_LOCAL_MACHINE\SYSTEM\Setup
    4. Right click setup and create a new Key called "LabConfig"
    5. Right click LabConfig and create new DWORD (32 bit) called "BypassSecureBootCheck" and set it to 1
    6. Right click LabConfig and create new DWORD (32 bit) called "BypassTPMCheck" and set it to 1
    7. Close regedit and command prompt and proceed with installation normally

4. Install drivers:
   See https://coolstar.org/chromebook/windows-install.html for drivers.

---

### Paid Drivers

Please see [here](csdriver.html) for a step by step tutorial on purchasing drivers.

--------------

### **What drivers do I need to buy?**
   
| CPU Generation     | Paid Drivers     | Notes         |
| ----------------   | ---------------- | ------------- |
| **Sandybridge**    | n/a              |
| **Ivybridge**      | n/a              |
| **Haswell**        | n/a              |
| **Broadwell**      | n/a              | 
| **Baytrail**       | n/a              |
| **Braswell**       | n/a              |
| **Skylake**        | AVS              | Celeron and Pentium models are eligible for a AUE discount.
| **Apollo Lake**    | AVS or SOF       | Can use either SOF or AVS
| **Kaby Lake**      | AVS              |
| **Amber Lake**     | AVS              |
| **Gemini Lake**    | SOF              |
| **Comet Lake**     | SOF              |
| **Picasso / Dali** | n/a              | 
| **Tiger Lake**     | SOF, TB4         | TB4 and SOF can be purchased as a bundle.
| **Jasper Lake**    | SOF              |
| **Alder Lake**     | SOF, TB4         | TB4 and SOF can be purchased as a bundle.


{: .fs-5 }
{: .text-right }

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="altos.html">← Installing altOS</a> 
</td>
<td width="50%" style="text-align: right">
<a href="post-install.html">Post Install →</a> 
</td>
</tr>
</table>

---
title: Known Issues
layout: default
nav_order: 3
---

# Known Issues
The following page is aimed for documenting all issues Chrultrabooks face. Feel free to improve this page by contributing to it.

{: .highlight }
You should avoid buying any device in this list.

-----

## Devices:


### Intel:
* Samsung Chromebook 3 (CELES): Numerous hardware bugs
* Samsung Galaxy Chromebook (KOHAKU): Badly designed hardware, deteriorating trackpad grounding, possibly faulty backlight circuit.

### AMD:
* **All** AMD Chromebooks: AMD not caring to fix broken PSP blobs 


### ARM:
* **All** ARM Chromebooks: No support, though development is slowly starting.



----

## Operating Systems:

### Windows:

(todo)


### Linux:

(todo)



### macOS:


(todo)


-----

---
title: Post Install 
layout: default
nav_order: 15
---

## Post Install for altOS

WIP

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




---
title: License Activation
layout: default
nav_order: 14
---

## License Activation


### Step 1: 
Sign into [CoolStar's Driver Portal](https://coolstar.org/chromebook/driverlicense/login.html) and head towards "Signed Licenses". Then, click the driver you want to install. Click the download button. 
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step0.png">

------

### Step 2: 
Once downloaded, extract the zip file.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step1.png">

------

### Step 3: 
Read the README first. Then launch `csaudiosstavs.1.0.3-installer.exe`. Make sure you allow it to run as administrator.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step2.png">

------

### Step 4:
You might get a message like this when opening it for the first time. Click "More Info", then "Run anyway"  
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step3.png">

------

### Step 5: 
Click the install button. 
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step4.png">

{: .note }
Leave all of the boxes checked. Ones not for your system simply won't be installed.

------

### Step 6: 
Once the driver install has finished, head to the `gui` folder. Then open `GenLicense.exe`.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step5.png">

{: .note }
Make sure you allow it to run as administrator. You may get another SmartScreen warning, simply click "More Info", then "Run anyway".

------

### Step 7:
Follow the on screen instructions to generate a license.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step6.png">

{: .warning }
This step is crucial. The drivers will not work without a valid license.

------

### Step 8:
Reboot.

![image](https://github.com/chrultrabook/docs/assets/77316348/7202cae6-ac59-493b-b488-880ff313dd8b)

Thats it! If you followed all the steps correctly, your drivers should be working.

------

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="csdriver.html">← Purchasing CoolStar Drivers</a> 
</td>
<td width="50%" style="text-align: right">
<a href="post-install.html">Post Install →</a> 
</td>
</tr>
</table>

---
title: License Activation
layout: default
nav_order: 14
---

## License Activation


### Step 1: 
Sign into [CoolStar's Driver Portal](https://coolstar.org/chromebook/driverlicense/login.html) and head towards "Signed Licenses". Then, click the driver you want to install. Click the download button. 
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step0.png">

------

### Step 2: 
Once downloaded, extract the zip file.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step1.png">

------

### Step 3: 
Read the README first. Then launch `csaudiosstavs.1.0.3-installer.exe`. Make sure you allow it to run as administrator.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step2.png">

------

### Step 4:
You might get a message like this when opening it for the first time. Click "More Info", then "Run anyway"  
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step3.png">

------

### Step 5: 
Click the install button. 
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step4.png">

{: .note }
Leave all of the boxes checked. Ones not for your system simply won't be installed.

------

### Step 6: 
Once the driver install has finished, head to the `gui` folder. Then open `GenLicense.exe`.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step5.png">

{: .note }
Make sure you allow it to run as administrator. You may get another SmartScreen warning, simply click "More Info", then "Run anyway".

------

### Step 7:
Follow the on screen instructions to generate a license.
<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/docs/csdriver/driveractivation/step6.png">

{: .warning }
This step is crucial. The drivers will not work without a valid license.

------

### Step 8:
Reboot.

![image](https://github.com/chrultrabook/docs/assets/77316348/7202cae6-ac59-493b-b488-880ff313dd8b)

Thats it! If you followed all the steps correctly, your drivers should be working.

------

<table>
<tr>
<td width="50%" style="text-align: left">
<a href="csdriver.html">← Purchasing CoolStar Drivers</a> 
</td>
<td width="50%" style="text-align: right">
<a href="post-install.html">Post Install →</a> 
</td>
</tr>
</table>

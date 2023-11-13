---
prev: ./
next: post-install
---
# Installing Windows

::: warning
Do not use Windows 8 or older. Only recent Windows 10 and 11 builds are supported.
:::

::: danger
Do not use unofficial versions of Windows, such as Ghost Specter or tiny10/11. **They are not supported** and may contain **undetectable malware** and/or security vulnerabilities.
:::

::: tip
If you want to create a Windows installer from ChromeOS, see the [Installing Ventoy](../firmware/ventoy) page.
:::

1. Install Windows from a USB:

  1. On another computer, create a Windows 10 or 11 installer with Rufus as "GPT for UEFI". **Only Rufus and Ventoy can make a working Windows installer**
  2. Plug the USB drive into the Chromebook
  3. Plug a USB mouse in for installation (If you only have one USB port, use tab, enter, and space to navigate the menu)
  4. Turn on the Chromebook, press ESC at the POST screen, and select the USB to boot from

     ::: tip
     If you need to select a different boot device, press any key in "Select Boot Option". Then select "Boot Manager" to select your boot drive.
     :::

     ::: warning
     **DO NOT** unplug the install USB until the installation has completed. If you do so, the installation will fail as the Windows install file won't exist anymore.
     :::

2. Bypassing Windows 11 installation checks using Rufus (Windows on an another computer):

  1. Select your flash drive
  2. Select your Windows 11 ISO in Rufus
  3. Change Partition Scheme from MBR to GPT
  4. Click on `Start`
  5. On the window named `Windows User Experience` click on the option labeled `Remove Requirement for 4GB+ Ram, Secure Boot, and TPM 2.0`
  6. Click on `ok`
  7. You can now install Windows 11 normally without needing to follow step 3

3. Bypassing Windows 11 installation checks:

  1. At the Windows installer, press Shift + F10 (Volume Up) to open Command Prompt  
  2. Type in "regedit" and press Enter
  3. Navigate to HKEY_LOCAL_MACHINE\SYSTEM\Setup
  4. Right click Setup and create a new Key called "LabConfig"
  5. Right click LabConfig and create new DWORD (32-bit) called "BypassSecureBootCheck" and set its value to 1
  6. Right click LabConfig and create new DWORD (32-bit) called "BypassTPMCheck" and set its value to 1
  7. Close Registry Editor and Command Prompt and proceed with installation normally

4. Install drivers:
    - See [Coolstar's Windows Install Helper](https://coolstar.org/chromebook/windows-install.html) for drivers. Some of the drivers may be paid. 

---

## Paid Drivers

Please see [this page](csdriver) for a step by step tutorial on purchasing drivers.

---

### What drivers do I need to buy?
   
| CPU Generation     | Paid Drivers     | Notes         |
| ----------------   | ---------------- | ------------- |
| **Sandybridge**    | n/a              |
| **Ivybridge**      | n/a              |
| **Haswell**        | n/a              |
| **Broadwell**      | n/a              | 
| **Baytrail**       | n/a              |
| **Braswell**       | n/a              |
| **Skylake**        | AVS              | Models with a Celeron, Pentium, i3 or m3 CPU are eligible for a AUE discount.
| **Apollo Lake**    | AVS or SOF       | Can use either SOF or AVS
| **Kaby Lake**      | AVS              |
| **Amber Lake**     | AVS              |
| **Gemini Lake**    | SOF              |
| **Comet Lake**     | SOF              |
| **Picasso / Dali** | n/a              | 
| **Tiger Lake**     | SOF, TB4         | TB4 and SOF can be purchased as a bundle.
| **Jasper Lake**    | SOF              |
| **Alder Lake**     | SOF, TB4         | TB4 and SOF can be purchased as a bundle.
| **Cezanne**        | SOF              |
| **Mendocino**      | SOF              |

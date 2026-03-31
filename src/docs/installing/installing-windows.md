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

1. Get a USB containing a Windows image. Rufus, and the official Windows media creation tool are the only methods that can be used to create a Windows USB. If you want to skip step 2, you can use Rufus, as they can bypass Windows 11 requirements.

2. Bypassing Windows 11 installation checks:

   1. At the Windows installer, select "Repair my Computer".
   2. Select "Command prompt". (May be hidden under an advanced section)
   3. Type in `regedit` and press Enter
   4. Navigate to `HKEY_LOCAL_MACHINE\SYSTEM\Setup`
   5. Right click `Setup` and create a new `Key` called `LabConfig`
   6. Right click `LabConfig` and create new `DWORD` (32-bit) called `BypassSecureBootCheck` and set its value to 1
   7. Right click `LabConfig` and create new `DWORD` (32-bit) called `BypassTPMCheck` and set its value to 1
   8. Close Registry Editor.
   9. Run `setup` in the command prompt.
   10. Install Windows as you would normally.

3. Install drivers:

- See [Coolstar's Windows Install Helper](https://coolstar.org/chromebook/windows-install.html) for drivers. Some of the drivers may be paid.

## Installing `.cab` drivers

Cab drivers are a little weird, but they're easy to install.

1. Create a new folder.
2. Open your cab driver using Windows Explorer. 7Zip will not work.
3. Copy all the files to that empty folder.
4. Enable the option to show file extensions.
5. Right click on all the `.inf` files, and select install.
6. Reboot.

## Paid Drivers

Please see [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html) for a step by step tutorial on purchasing drivers.

### What drivers do I need to buy?

| CPU Generation     | Paid Drivers | Notes                                                                         |
| ------------------ | ------------ | ----------------------------------------------------------------------------- |
| **Sandybridge**    | n/a          |                                                                               |
| **Ivybridge**      | n/a          |                                                                               |
| **Haswell**        | n/a          |                                                                               |
| **Broadwell**      | n/a          |                                                                               |
| **Baytrail**       | n/a          |                                                                               |
| **Braswell**       | n/a          |                                                                               |
| **Skylake**        | AVS          | Models with a Celeron, Pentium, i3 or m3 CPU are eligible for a AUE discount. |
| **Apollo Lake**    | AVS or SOF   | Can use either SOF or AVS                                                     |
| **Kaby Lake**      | AVS          |                                                                               |
| **Amber Lake**     | AVS          |                                                                               |
| **Gemini Lake**    | SOF          |                                                                               |
| **Comet Lake**     | SOF          |                                                                               |
| **Picasso / Dali** | n/a          |                                                                               |
| **Tiger Lake**     | SOF, TB4     | TB4 and SOF can be purchased as a bundle.                                     |
| **Jasper Lake**    | SOF          |                                                                               |
| **Alder Lake**     | SOF, TB4     | TB4 and SOF can be purchased as a bundle.                                     |
| **Cezanne**        | SOF          |                                                                               |
| **Mendocino**      | SOF          |                                                                               |

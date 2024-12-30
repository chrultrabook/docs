# FAQ

::: tip
Please read this page before asking for help. Your help request will be pointed to the docs otherwise.
:::

## General questions

### What OS should I use?

- This depends on your use case. Only you can answer this question.

### Should I use rw-legacy or full rom?

- This depends on what you are looking to use your device for. If you are planning on installing Windows or macOS you need to use full rom. RW-legacy only supports linux.

### My internal keyboard doesn't work, can I use an external keyboard to get into developer mode?

- No. The hotkeys will only work on the internal keyboard. Chromeboxes do not have this restriction.

### I just want to boot Linux from USB on my Chromebook, what do I need to do?

- Check the Supported Devices page, to ensure your device has functional RW_LEGACY firmware available. If so, flash RWL (RW_LEGACY firmware) and use that.

### Can I disable power-on when I open my Chromebook?

- No. In what situation would you open your Chromebook without the intention of turning it on anyways.

### My Chromebook powers back on when I turn it off. How can I fix this?

- You Do not. Specific Chromebooks have this bug which takes too much effort to debug. If you were looking to disable power-on when you open the lid because of this, they are completely unrelated.

### I just installed the UEFI firmware, and now my device boots to a black screen that says 'shell' - what do I do?

- you are in the EFI shell; the firmware boots there when it can't find a valid UEFI boot device, either externally (USB, SD) or internally. Just type `exit` to get back to the the UEFI settings menu.

### Should I install 32 or 64-bit OS?

- The UEFI Full ROM firmware only supports 64-bit OS, so be sure to use the 'x86_64' version of whatever OS you want to install. USB media created from 32-bit ISOs will simply fail to boot.

### I'm running Legacy boot firmware now - can I switch to the UEFI firmware?

- If you are using SeaBIOS, you will likely need to re-install your operating system. Otherwise it should work fine.

### Help! I can't exit Developer Mode

- If you are trying to exit Developer Mode but get the error `WARNING: TONORM prohibited by GBB_FORCE_DEV_SWITCH_ON` or find the `Return to secure mode` button missing, you need to reset your GBB flags. You can do that by running [MrChromebox's firmware utility script](https://mrchromebox.tech/#fwscript) and selecting `3) Set Boot Options (GBB flags)`, followed by `5) Reset to factory default`.
  - Then exit developer mode by choosing "Return to secure mode" on the bootup screen

### Can I modify the fan speed?

- Yes, using ectool. To set the fan to auto, run: `ectool autofanctrl`. To specify a percentage, run `ectool fanduty [0-100]`.

### Can I overclock the fan?

- No.

### I want to buy a Chromebook to run Windows or Linux or macOS -- which should I buy?

- Any 64 bit Chromebook should work in Windows and Linux. Some require paid drivers (Windows only). For information on macOS requirements, see [this page](installing/installing-macos.md).

<br>

## Windows questions

### Should I use Windows 10 or 11?

- Windows 11 is required for TB4 users. If you Do not have Thunderbolt 4, you may use both 10 or 11.

### Can I pay for Windows drivers using PayPal?

- You can pay via PayPal in Patreon.

### My balance shows zero on coolstars portal, what should I do?

- It may take up to 48 hours for balance to appear in her portal, though it is normally less then 2.

### How do I buy the Windows audio/Thunderbolt drivers?

- Please see [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html) for a step by step tutorial on purchasing drivers.

### Can I get AVS or SOF drivers for free?

- No. Only the Linux drivers are free.

### Why is there a license error in Device Manager after installing audio drivers?

- You messed up the license setup. Please refer to [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html).

### Will the audio driver still work when re-installing Windows?

- Yes, on the device the license was created. If the internal drive was replaced, see below.

### I upgraded my Chromebooks' internal drive and my audio/Thunderbolt 4 license is not working, what do I do?

- The license is tied to the serial number of your internal drive. **You do not need to buy another license**. Send CoolStar a message through Patreon, and wait for about a week.

### Can I use one driver license across multiple devices?

- No. One license per device.

<br>

## Linux Questions

### Audio isn't working on Debian, Ubuntu or some other Distribution?

- Old (>1 year) LTS releases may have issues and are not supported, try switching to another distro.

### What Linux distros are recommended?

- See [this page](installing/installing-linux.md).

### How can I get audio working under Linux?

- Please see [this GitHub repo](https://github.com/WeirdTreeThing/chromebook-linux-audio)

### How do I get my top row keys on Linux to act like how they did on chromeOS?

- Follow the instructions [in this GitHub repo](https://github.com/WeirdTreeThing/cros-keyboard-map).

<br>

## Hackintosh questions

### Can I hackintosh my Celeron/Pentium CPU?

- No.

### Can I hackintosh an AMD CPU?

- In theory, it might be possible. It has never been tested, and can be considered unsupported.

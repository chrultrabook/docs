# FAQ

::: tip
Please read this page before asking for help. Your help request will be pointed to the docs otherwise.
:::

::: tip
For questions related to MrChromebox firmware, please visit [https://docs.mrchromebox.tech/docs/faq.html]
:::

## General questions

### What OS should I use?

- This depends on your use case. Only you can answer this question. <!-- Not ubuntu plz -->

### Why is your supported devices list different to MrChromebox's list?

- MrChromebox only provides firmware support. A device having firmware available does not mean that it has Windows/Linux/macOS support. If your device has firmware support but no OS support, open a post on the [Chrultrabook Forum](https://forum.chrultrabook.com) and someone will try to help.

### Should I use RW_LEGACY or Full ROM MrChromebox firmware?

- This depends on what you are looking to use your device for. If you are planning on installing Windows or macOS you need to use full ROM. RW_LEGACY only supports Linux.

### My internal keyboard doesn't work, can I use an external keyboard to enable Developer Mode?

- No. The hotkeys will only work on the internal keyboard. Chromeboxes do not have this restriction.

### Can I disable auto power-on when I open my Chromebook lid?

- No. In what situation would you open your Chromebook without the intention of turning it on anyways.

### My Chromebook powers back on when I turn it off. How can I fix this?

- It's a known issue. Specific Chromebooks have this bug which takes too much effort to debug. If you were looking to disable power-on when you open the lid because of this, they are two completely unrelated things.

### Should I install 32 or 64-bit OS?

- The UEFI Full ROM firmware only supports 64-bit OSes, so be sure to use the 'x86_64' or 'amd64' version of whatever OS you want to install. USB media created from 32-bit ISOs will simply fail to boot.

### Can I modify the fan speed?

- Yes, using ectool. To set the fan to auto, run: `ectool autofanctrl`. To specify a percentage, run `ectool fanduty [0-100]`. You can find more info about ectool [here]().

### Can I overclock the fan?

- No.

### I want to buy a Chromebook to run Windows or Linux or macOS -- which should I buy?

- Any 64-bit Chromebook up to Intel Core 13th gen (Raptor Lake) should work in Windows and Linux. We appreciate the community helping to test hardware, and your patience if not everything works immediately the way you expected it to. Some Chromebooks require paid audio drivers (Windows only). For information on macOS requirements, see [this page](installing/installing-macos.md). 

### Are there any Chromebooks/Chromeboxes I should avoid buying/converting to a chrultrabook?

- Please check [https://docs.mrchromebox.tech/known-issues.html] for a list of firmware issues that affect some platforms. Then check any device-specific notes section in the [supported devices list](/firmware/supported-devices.html)

<br>

## Windows questions

### Should I use Windows 10 or 11?

- Windows 11 is required for TB4 users. If you do not have Thunderbolt 4, you may use either 10 or 11.

### Can I pay for Windows drivers using PayPal?

- You can pay via PayPal in Patreon.

### How do I buy/download/install the Windows audio/Thunderbolt drivers after I've subscribed on Patreon?

- After logging into [CoolStar's driver portal](https://coolstar.org/chromebook/driverlicense/login.html) with your Patreon account, follow the instructions onscreen for a step by step tutorial.

### My balance shows zero on CoolStar's portal, what should I do?

- It may take up to 48 hours for the balance to be updated on the portal, though it is normally less than 2.

### Can I get AVS or SOF drivers for free?

- No. Only the Linux drivers are free.

### Why is there a license error in Device Manager after installing audio drivers?

- You messed up the license setup. Please refer to instructions on CoolStar's portal and the README contained within the files you downloaded when downloading the driver.

### Will the audio driver still work when re-installing Windows?

- Yes, on the device the license was created. If the internal drive was replaced, see below.

### I upgraded my Chromebook's internal drive and my audio/Thunderbolt 4 license is not working, what do I do?

- The license is tied to the serial number of your internal drive. **You do not need to buy another license**. Send CoolStar a message through Patreon, and wait for about a week.

### Can I use one driver license across multiple devices?

- No. One license per device.

<br>

## Linux Questions

### How come audio isn't working on Ubuntu / Ubuntu forks?

- Ubuntu and Ubuntu-based distros may have issues and are not supported, try switching to another distro. Debian is a great alternative if you are used to Ubuntu.

### Why are Ubuntu/Ubuntu based distros not supported?

- They consistently break packages.
- They have started to force snap on their users.
- They have published an LTS distro with a non-LTS kernel.

Becuse of these things, and the time and effort that would be required for the project to work around them, Ubuntu is unsupported. We will not help you fix issues on Ubuntu.

### What Linux distros are recommended by the chrultrabook project?

- Fedora, Ultramarine Linux, Arch Linux and Debian.

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

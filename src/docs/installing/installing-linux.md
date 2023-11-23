---
prev: ./
next: post-install
---
# Installing Linux
Thanks to recent advancements in the chrultrabook community, Linux works really well on most Chromebooks.

::: tip
Only Linux kernel 6.4 or newer is supported.
:::

## Recommended Distributions

::: warning
Ubuntu and Ubuntu-based distributions that are not based on 23.10 or higher **may have issues**.
:::

::: warning
Debian versions older than Debian 12 (Bookworm) are **not supported**. Debian 12 (Bookworm) requires a custom kernel, the [audio script](https://chrultrabook.github.io/docs/docs/installing-linux.html#fixing-audio) will automatically install it for you.
:::

**Recommended distros as of October 2023 (in no particular order) are:**

* Arch Linux and EndeavourOS
* Fedora
* openSUSE Tumbleweed
* Debian 12 (Bookworm)

---

## Installation

1. Create a bootable Linux USB. See [here](bootableusb.html) for a guide.
2. Plug the USB Drive into the Chromebook.
3. Turn on the Chromebook, press `ESC` at the POST screen (when the coreboot logo appears), and select your USB to boot from. 
4. Install as you would on any other computer.

---

## Fixing Audio

You will likely have audio issues after installing Linux. Run the following script to fix them. 

### Fixing Audio

::: danger
Using AVS on a device with max98357a will blow your speakers. You have been warned. 
:::

#### Prerequisites
- Python 3.10 or newer
- Git

#### How to run the script
1. Open a terminal.
2. `git clone https://github.com/WeirdTreeThing/chromebook-linux-audio.git`
3. `cd chromebook-linux-audio`
4. `./setup-audio`

For more information please see [WeirdTreeThing's repo](https://github.com/WeirdTreeThing/chromebook-linux-audio)

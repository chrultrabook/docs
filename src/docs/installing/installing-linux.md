---
prev: ./
next: post-install
---

# Installing Linux

Thanks to recent advancements in the chrultrabook community, Linux works really well on most Chromebooks.

::: tip
Only Linux kernel 6.19 or newer is supported.
:::

## Recommended Distributions

::: warning
Old (>1 year) LTS releases **may have issues** and are not supported.
One possible workaround for Ubuntu is using a third-party kernel. Note that not all issues can be solved with a custom kernel, as the rest of the software on the system might be still old.
:::

**Recommended distros as of December 2024 (in no particular order) are:**

- Arch Linux or EndeavourOS
- Fedora or Ultramarine Linux
- openSUSE Tumbleweed
- Pop!\_OS

## Installation

1. Create a bootable Linux USB.
2. Plug the USB Drive into the Chromebook.
3. Turn on the Chromebook, press ESC at the POST screen (when the coreboot logo appears), and select your USB to boot from.
4. Install as you would on any other computer.

## Fixing Audio

You will likely have audio issues after installing Linux. Run the following script to fix them.

### Prerequisites

- Python 3.10 or newer
- Git

::: danger
Using AVS on a device with max98357a will blow your speakers. You have been warned.
:::

#### How to run the script

1. Open a terminal.
2. `git clone https://github.com/WeirdTreeThing/chromebook-linux-audio.git`
3. `cd chromebook-linux-audio`
4. `./setup-audio`

For more information please see [WeirdTreeThing's repo](https://github.com/WeirdTreeThing/chromebook-linux-audio)

#### Atomic & Image-Based Systems

If you're using an `rpm-ostree` based system (EG: Fedora Silverblue, Fedora Kinoite, Project Bluefin, etc.) you can use [PVermeer's RPM package](https://copr.fedorainfracloud.org/coprs/pvermeer/chromebook-linux-audio) of WeirdTreeThing's script. 

1. Open terminal
2. `sudo dnf copr enable pvermeer/chromebook-linux-audio`
3. `rpm-ostree install chromebook-linux-audio`
4. Reboot

  

Here’s the scenario: You’ve got a Chromebook (or are thinking about getting one) and you’ve got a copy of Windows 10. And if you can just figure out how to install Windows on that Chromebook, you believe you’ll achieve the perfect marriage of form and functionality. Or maybe you work in IT, and you have ambitions of getting an entire fleet of ChromeOS devices to run Windows instead.

The logic behind that is understandable. But isn’t swapping out operating systems an extreme solution to a much simpler problem? Because, when you think about it, the real goal of carrying out a Chromebook Windows installation is the ability to run Windows software, not Windows itself.

So let’s proceed from that starting point instead. You want to run Windows apps seamlessly on your Chromebook. Is ditching ChromeOS for Windows 10 really the best way to do it?

The answer is no. And here’s why.

For starters, most Chromebook models aren’t made to run Windows. They’re designed to run ChromeOS, which is why they get such great battery life, why they’re so affordable, why they’re more manageable and why they have inherent security benefits. To put it bluntly, turning your Chromebook into a Windows laptop defeats the purpose of owning a Chromebook in the first place.

That also applies to a dual-boot setup, which is where you choose which operating system to use when you power on the computer. When you’re in the ChromeOS environment, you’ll get the customary Chromebook advantages. But when you’re booted in Windows, you sacrifice those advantages just for the sake of running Windows apps. You’ll also have to choose your operating system and skip OS verification every time you start your Chromebook!

To truly get the best of both worlds, Cameyo is the perfect solution. Cameyo’s Virtual App Delivery (VAD) platform gives Chromebook users seamless access to all of their business-critical Windows software, including legacy Windows apps, directly within the ChromeOS environment. They can work with the native Windows version of Microsoft Office or even specialized programs like AutoCAD or Quickbooks without the need for a compatibility layer.

Cameyo isn’t a remote desktop. Nor does it force you to use proprietary viewer clients or deploy on-prem infrastructure like VDI. VAD is a cloud-native technology that transforms full-featured desktop apps into progressive web apps (PWAs) with just a few clicks. On ChromeOS, they can integrate with the launcher and file system for a completely transparent cloud desktop experience.

In fact, Cameyo moves beyond the operating system entirely, opening up access to Windows apps across all devices. It’s able to deliver apps via any modern HTML5-capable web client like the Safari or Chrome browser, which means users can access desktop Windows apps on macOS devices as well as mobile devices like an iPhone. Also, our new Cameyo for Linux capabilities extend VAD’s capabilities to Linux apps too. Thanks to Cameyo’s pioneering VAD platform, it’s all done in a simple, secure, centralized and cost-effective way.

Instead of spending hours trying to hack Windows 10 to run on your Chromebook, take a minute to sign up for your free trial of Cameyo. You’ll be using Virtual App Delivery to access desktop-tier Windows apps from Chrome OS in no time. Or, if you’d like a little more insight into how Cameyo’s Virtual App Delivery works, schedule a demo to get an engineer’s take. Either way, you’ll gain a better understanding of why Cameyo is the optimal solution when your organization’s goal is using Windows software on its Chromebooks.

Still Determined to run Windows on your Chromebook? Keep Reading

If you’ve read to this point and you still think installing Windows is worth a try, below we offer some background on getting Windows 10 (and possibly other versions of Windows) onto your Chromebook.

However, these instructions come with a huge disclaimer! They are not a guaranteed, foolproof method of Windows installation on Chromebooks. We’re only providing them below to illustrate the cumbersome, potentially dangerous steps involved in the installation process.

Not only do these actions require some familiarity with a Linux-style terminal and confidence with computer hardware, there’s also a real risk of damaging your ChromeOS device and/or voiding your warranty because you’re making essential, unsupported changes to the BIOS (among other things).

In a nutshell, anything that goes wrong is entirely on you.

To start, you’ll need the following:

    The Chromebook you want to install Windows on
    A separate Windows PC or Windows laptop
    A USB flash drive for installation media
    A USB keyboard and mouse

To prepare your Chromebook:

    Turn off the Chromebook by shutting down or pressing the power button.
    Open the back of the Chromebook and remove the Write Protect Screw (consult teardown guides for its location).
    Press ESC + Refresh + Power to enter Recovery Mode.
    Press CTRL + D and then press Enter to enable Developer Mode.
    Press CTRL + D to boot Chrome OS.
    Press CTRL + ALT + T to open up a terminal.
    Type in shell and press Enter.
    Copy and paste this command into the terminal: cd ~; curl -L -O https://mrchromebox.tech/uefi-flash.sh && sudo bash uefi-flash.sh
    Press Enter.
    Select Full coreboot Firmware from the options.
    Press Y to confirm.
    Press U to install the UEFI firmware

To create Microsoft Windows installation media:

    Open a browser on your Windows PC or laptop.
    Go to Microsoft’s website and download the Windows 10 ISO (or whichever version of Windows is current).
    Open the file you downloaded and click Accept.
    Insert the USB flash drive.
    Select “Create Installation media” (USB flash drive, DVD, or ISO file) for another PC.
    Click Next.
    Choose “Use the recommended options for this PC” and click Next.
    Choose “USB flash drive” and click Next.
    Wait for the process to complete, then click Finish.
    Note: You can also use the tool Rufus to create bootable Windows and Linux installation media.

To install Windows on your Chromebook:

    Take the Windows installation media (i.e., USB flash drive) and plug it into the Chromebook.
    Your Chromebook should boot directly from the USB device. If nott, press ESC as soon as the Chromebook boots. Find your USB device in the menu and select it.
    Connect your USB keyboard and mouse to the Chromebook.
    Select your language and your region, then click Next.
    Click “Install now.”
    When asked to enter the product key, select “I don’t have a product key.”
    Select the version of Windows you want to install. This will likely be Windows 10 Home or Pro.
    Select “Custom: Install Windows only (advanced).”
    Delete all partitions listed. Ignore any warnings that might appear, then click Next.
    Let Windows finish installing and then reboot.
    Remove the USB drive if asked to do so.
    Set up Windows. Skip the Internet connection step.
    Install drivers for Windows.

Even if everything goes smoothly up to this point, this last step could be your undoing. Incorrect drivers can cause software crashes, random shutdowns and other ongoing problems. The right drivers will depend on variables like your system hardware (an Intel or an AMD CPU, for example) and your peripherals.

A developer known as CoolStar has some tips on solving the many issues and driver incompatibilities that occur when installing Windows on common ChromeOS devices from Acer, Samsung and other well-known manufacturers. Typing “Coolstar Windows install Chromebook” into your preferred search engine should get you closer to finding those resources.

Install Windows 10 on your Chromebook? Why endure the hassle?

In the event that you made it safely through those steps, you can’t escape the fact that running Windows on a Chromebook still negates many of the benefits of ChromeOS. And what’s more, it doesn’t exactly ensure a smooth Windows experience either! If you’d like to see a better way to access all your Windows apps on Chromebooks, schedule a demo with Cameyo today.

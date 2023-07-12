---
title: Installing Ventoy in chromeOS
layout: default
nav_order: 21
---


## Installing Ventoy to a USB drive in ChromeOS
Ventoy is a useful tool that allows you to have multiple OS installer images on a single drive. It is also the only way to properly create an installer for Windows.

### Backing up your drive
Before we begin, be sure to backup any data that may be on your USB drive as it will be erased during this process.

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/backup.png">

### Downloading Ventoy
Grab the latest Ventoy release from [github](https://github.com/ventoy/Ventoy/releases). Be sure to get the linux version.

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/download.png">

### Extracting Ventoy
Open crosh by pressing `Ctrl` + `Alt` + `T` and run the following commands:

1. `shell`
2. `sudo -E bash`
3. `cd /usr/local`
4. `mv /home/chronos/user/Downloads/ventoy-<ventoy version>-linux.tar.gz .`
5. `tar xf ventoy-<ventoy version>-linux.tar.gz`
6. `cd ventoy-<ventoy version>-linux`

{: .note }
On commands 4, 5, and 6, after typing ventoy, you can press tab to fill in the rest of the file name automatically.

You can then run `ls` to verify you have the correct files, it should look something like this

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/extract.png">

### Starting Ventoy
Run the following command to start the Ventoy web gui:
* `./VentoyWeb.sh`

Next, open chrome and type `http://localhost:24680` in the address bar and press enter.

You should see this on your screen now

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/ventoy.png">

### Installing Ventoy
Plug in your USB drive and click the green circle to refresh devices. You should see your USB drive get detected. Now click options, then Partition Style, then choose GPT.

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/gpt.png">

Once you have done that and your drive is detected, click on Install and click Ok twice when prompted and again once the installation has completed. Once installation is complete, unplug and plug back in your USB drive.

### Adding OS images
Download an image of any OS you want. For Windows we recommend that you only use official isos from Microsoft.

Open the ChromeOS files and click on your USB drive, you should then see a device named "Ventoy".

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/ventoy-drive.png">

Copy your images from Downloads to the Ventoy drive. Do not touch VTOYEFI. Once you have done that, eject your USB drive and now you're done.

<img src="https://raw.githubusercontent.com/chrultrabook/docs/main/assets/ventoy/isos.png">

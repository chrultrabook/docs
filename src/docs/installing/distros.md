# Notes for non-standard Linux distributions

::: warning
**Advanced users only!**  
This page is not meant for troubleshooting
:::

::: danger
**We will not help you if you get stuck while using an unsupported distribution!**
:::

This page contains informations useful to get non-standard or niche Distros to work.

## Audio

### alsa-ucm2 for Chromebooks

You need custon alsa-ucm2 configs that arent available upstream

You can get them [here](https://github.com/WeirdTreeThing/alsa-ucm-conf-cros)

If your distro isnt FHS-compliant, you can specify the ucm location via an enviromental variable

```bash
export ALSA_CONFIG_UCM2 = "/share/alsa/ucm2";
```

### Audio setup modprobes

You can find the right modprobe configs by browsing [the audio script](https://github.com/WeirdTreeThing/chromebook-linux-audio/blob/main/setup-audio)

## Keyboard mapping

### libinput configuration

Put this in `/etc/libinput/local-overrides.quirks`: ([Source](https://github.com/WeirdTreeThing/cros-keyboard-map/blob/main/local-overrides.quirks))

```ini
[keyd virtual keyboard]
MatchName=keyd virtual keyboard
AttrKeyboardIntegration=internal
ModelTabletModeNoSuspend=1
```

### keyd keymap

Install [keyd (Github)](https://github.com/rvaiya/keyd)

A configuration file can be accuired with [cros-keyboard-map](https://github.com/WeirdTreeThing/cros-keyboard-map). Some special cases have configs in the configs folder. For all other devices use `cros-keyboard-map.py`.

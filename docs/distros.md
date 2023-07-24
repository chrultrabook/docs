---
title: Linux distro-specific configuration
layout: default
---


# Linux distro-specific configuration

---------

## NixOS

- Enable and configure keyd (Example is cros-standard. Adjust as you need!)  
```nixos
# configuration.nix
services.keyd = {
    enable = true;
    keyboards.internal = {
      ids = [ "0001:0001" ];
      settings = {
        main = {
          f1 = "back";
          f2 = "forward";
          f3 = "refresh";
          f4 = "f11";
          f5 = "scale";
          f6 = "brightnessdown";
          f7 = "brightnessup";
          f8 = "mute";
          f9 = "volumedown";
          f10 = "volumeup";
          back = "back";
          forward = "forward";
          refresh = "refresh";
          zoom = "f11";
          scale = "scale";
          brightnessdown = "brightnessdown";
          brightnessup = "brightnessup";
          mute = "mute";
          volumedown = "volumedown";
          volumeup = "volumeup";
          sleep = "coffee";
        };
        meta = {
          f1 = "f1";
          f2 = "f2";
          f3 = "f3";
          f4 = "f4";
          f5 = "f5";
          f6 = "f6";
          f7 = "f7";
          f8 = "f8";
          f9 = "f9";
          f10 = "f10";
          back = "f1";
          forward = "f2";
          refresh = "f3";
          zoom = "f4";
          scale = "f5";
          brightnessdown = "f6";
          brightnessup = "f7";
          mute = "f8";
          volumedown = "f9";
          volumeup = "f10";
          sleep = "f12";
        };
        alt = {
          backspace = "delete";
          meta = "capslock";
          brightnessdown = "kbdillumdown";
          brightnessup = "kbdillumup";
          f6 = "kbdillumdown";
          f7 = "kbdillumup";
        };
        control = {
          f5 = "print";
          scale = "print";
        };
        controlalt = {
          backspace = "C-A-delete";
        };
      };
    };
};
```

- Audio setup (Does the same as the audio script)  
**Change the `CHANGEME` to your board generation!**  
Possible options: `adl` | `jsl` | `tgl` | `cml` | `glk` | `apl` | `cezanne` | `picasso` | `stoney` 
If your generationisnt liosted above you dont need this part
```nixos
# configuration.nix
nixpkgs.overlays = with pkgs; [ (final: prev:
  {
    alsa-ucm-conf = prev.alsa-ucm-conf.overrideAttrs (old: {
      srcs = [
        (fetchurl {
          url = "mirror://alsa/lib/alsa-ucm-conf-1.2.9.tar.bz2";
          hash = "sha256-N09oM7/XfQpGdeSqK/t53v6FDlpGpdRUKkWWL0ueJyo=";
        })
        (fetchurl {
          url = "https://github.com/WeirdTreeThing/chromebook-ucm-conf/archive/refs/heads/main.tar.gz";
          hash = "sha256-vXFixh2HZD5zs0wARxAHmwtvk1R8/7gBs2y+delCnGc=";
        })
      ];
      unpackPhase = ''
        runHook preUnpacl

        for _src in $srcs; do
          tar xf "$_src"
        done

        runHook postUnpack
      '';
      installPhase = ''
        runHook preInstall

        mkdir -p $out/share/alsa
        cp -r alsa-ucm-conf-1.2.9/ucm alsa-ucm-conf-1.2.9/ucm2 $out/share/alsa

        mkdir -p $out/share/alsa/ucm2/conf.d
        cp -r chromebook-ucm-conf-main/hdmi-common chromebook-ucm-conf-main/dmic-common chromebook-ucm-conf-main/CHANGEME/* $out/share/alsa/ucm2/conf.d

        runHook postInstall
      '';
    });
  }
  )];
```

- Audio setup modprobes 
```
# configuration.nix
#ToDo
```
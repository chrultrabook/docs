---
title: Distro Specific Configuration
layout: default
nav_order: 23
parent: Advanced
---


## Linux distro-specific Configuration

---------

### NixOS

- Enable and configure keyd (Example is cros-standard. Adjust as you need!)  
```nix
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
**Change the `GENERATION` to your board generation!**  
Possible options: `adl` | `jsl` | `tgl` | `cml` | `glk` | `apl` | 'avs' | `bsw` | `byt` | `mendocino` | `cezanne` | `picasso` | `stoney`

If your generation isn't listed above, you can skip this section
```nix
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
          url = "https://github.com/WeirdTreeThing/chromebook-ucm-conf/archive/792a6d5ef0d70ac1f0b4861f3d29da4fe9acaed1.tar.gz";
          hash = "sha256-Ae/k9vA5lWiomSa6WCfp+ROqEij11FPwlHAIG6L19JI=";
        })
      ];
      unpackPhase = ''
        runHook preUnpack

        for _src in $srcs; do
          tar xf "$_src"
        done

        ls

        runHook postUnpack
      '';
      installPhase = ''
        runHook preInstall

        mkdir -p $out/share/alsa
        cp -r alsa-ucm-conf-1.2.9/ucm alsa-ucm-conf-1.2.9/ucm2 $out/share/alsa

        mkdir -p $out/share/alsa/ucm2/conf.d
        cp -r chromebook-ucm-conf-792a6d5ef0d70ac1f0b4861f3d29da4fe9acaed1/hdmi-common \
        chromebook-ucm-conf-792a6d5ef0d70ac1f0b4861f3d29da4fe9acaed1/dmic-common \
        chromebook-ucm-conf-792a6d5ef0d70ac1f0b4861f3d29da4fe9acaed1/GENERATION/* \
        $out/share/alsa/ucm2/conf.d

        runHook postInstall
      '';
    });
  }
  )];
```

- Install and export the ucm config as a session variable
```nix
#configuration.nix
environment = {
  systemPackages = with pkgs; [\
    alsa-ucm-conf
  ];
  sessionVariables = {
    ALSA_CONFIG_UCM2 = "${pkgs.alsa-ucm-conf}/share/alsa/ucm2";
  };
};
```

- Audio setup modprobes 
  - SOF modprobe config for Alderlake, Jasperlake, Tigerlake, Cometlake, and Geminilake
```nix
# configuration.nix
boot.extraModprobeConfig = ''
  options snd-intel-dspcfg dsp_driver=3
'';
```

  - SOF modprobe config for Braswell and Baytrail
```nix
# configuration.nix
boot.extraModprobeConfig = ''
  options snd-intel-dspcfg dsp_driver=3
  options snd-sof sof_debug=1
'';
```

  - AVS modprobe config for Skylake, Kabylake, and Apollolake
```nix
# configuration.nix
boot.extraModprobeConfig = ''
  options snd-intel-dspcfg dsp_driver=4
'';
```

# Linux distro-specific Configuration

## NixOS

::: tip 
Note that the configurations are applied to `configuration.nix` located in `/etc/nixos`.
:::

::: tip 
Running the command `sudo nixos-rebuild switch` will rebuild your installation and apply the changes made.
:::

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

- For audio configuration, we will create `audio.nix`.
```bash
sudo touch /etc/nixos/audio.nix
```

- Then at the top of `configuration.nix` we import `audio.nix`. 
```nix
# configuration.nix
# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, ... }:

{
  imports =
    [
      # Include the results of the hardware scan.
      ./hardware-configuration.nix
      ./audio.nix
    ];

    # the rest of your configuration...
}

```

- Build the package in `audio.nix`
```nix
# audio.nix
{ config, pkgs, lib, ... }:

let
  cb-ucm-conf = with pkgs; alsa-ucm-conf.overrideAttrs {
    wttsrc = fetchFromGitHub {
      owner = "WeirdTreeThing";
      repo = "alsa-ucm-conf-cros";
      rev = "6b395ae73ac63407d8a9892fe1290f191eb0315b";
      hash = "sha256-GHrK85DmiYF6FhEJlYJWy6aP9wtHFKkTohqt114TluI=";
    };
    unpackPhase = ''
      runHook preUnpack
      tar xf "$src"
      runHook postUnpack
    '';

    installPhase = ''
      runHook preInstall
      mkdir -p $out/share/alsa
      cp -r alsa-ucm*/ucm2 $out/share/alsa
      runHook postInstall
    '';
  }; 
in
{
  # add your audio setup modprobes here

  environment = {
    systemPackages = with pkgs; [
      maliit-keyboard # optional
      sof-firmware
    ];
    sessionVariables.ALSA_CONFIG_UCM2 = "${cb-ucm-conf}/share/alsa/ucm2";
    # for 23.11 and unstable
    etc = {
      "wireplumber/main.lua.d/51-increase-headroom.lua".text = ''
         rule = {
           matches = {
             {
               { "node.name", "matches", "alsa_output.*" },
             },
           },
           apply_properties = {
             ["api.alsa.headroom"] = 4096,
           },
         }

         table.insert(alsa_monitor.rules,rule)
      '';
    };
  };

  system = {
    replaceRuntimeDependencies = [
      ({
        original = pkgs.alsa-ucm-conf;
        replacement = cb-ucm-conf;
      })
    ];
  };
}

```

- However, if you're on NixOS 24.05, remove this set of lines in `audio.nix`
```nix
# audio.nix

    # additonal configuration...

    # for 23.11 and unstable
    etc = {
      "wireplumber/main.lua.d/51-increase-headroom.lua".text = ''
         rule = {
           matches = {
             {
               { "node.name", "matches", "alsa_output.*" },
             },
           },
           apply_properties = {
             ["api.alsa.headroom"] = 4096,
           },
         }

         table.insert(alsa_monitor.rules,rule)
      '';
    };

    # additonal configuration...
```

- And from here replace it with this at the bottom of the `let...in` expression
```nix
# audio.nix
in 
{
  # additonal configuration...

  # for 24.05
  services.pipewire.wireplumber.configPackages = [
    (pkgs.writeTextDir "share/wireplumber/main.lua.d/51-increase-headroom.lua" ''
      rule = {
        matches = {
          {
            { "node.name", "matches", "alsa_output.*" },
          },
        },
        apply_properties = {
          ["api.alsa.headroom"] = 4096,
        },
      }

      table.insert(alsa_monitor.rules,rule)
    '')
  ];

  # additonal configuration...
}
```

- Audio setup modprobes
  - SOF modprobe config for Alderlake, Jasperlake, Tigerlake, Cometlake, and Geminilake
```nix
# audio.nix
in
{
  boot = {
    extraModprobeConfig = ''
      options snd-intel-dspcfg dsp_driver=3
    '';
  };

  # additonal configuration...
}

```

  - SOF modprobe config for Braswell and Baytrail
```nix
# audio.nix
in
{
  boot = {
    extraModprobeConfig = ''
      options snd-intel-dspcfg dsp_driver=3
      options snd-sof sof_debug=1
    '';
  };

  # additonal configuration...
}
```

  - AVS modprobe config for Skylake, Kabylake, and Apollolake
```nix
# audio.nix
in
{
  boot = {
    extraModprobeConfig = ''
      options snd-intel-dspcfg dsp_driver=4
    '';
  };

  # additonal configuration...
}
```

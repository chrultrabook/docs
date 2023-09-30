//node index.js to run

function generateHTML() {
    const chromebooks = {
        "Sandybridge/Ivybridge": [
            {
                "device": [
                    "HP Pavilion Chromebook 14"
                ],
                "boardname": "BUTTERFLY",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/hp-pavilion-14-chromebook\" target=\"_blank\">switch</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Google Chromebook Pixel (2013)"
                ],
                "boardname": "LINK",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Samsung Chromebook Series 5 550"
                ],
                "boardname": "LUMPY",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-sandy-bridge\" target=\"_blank\">jumper</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer C7/C710 Chromebook"
                ],
                "boardname": "PARROT",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c7-chromebook\" target=\"_blank\">jumper</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Lenovo Thinkpad X131e Chromebook"
                ],
                "boardname": "STOUT",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/lenovo-thinkpad-x131e-chromebook\" target=\"_blank\">switch</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Samsung Chromebox Series 3"
                ],
                "boardname": "STUMPY",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-sandy-bridge/\" target=\"_blank\">jumper</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "Haswell": [
            {
                "device": [
                    "HP Chromebook 14"
                ],
                "boardname": "FALCO",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/hp-chromebook-14\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Toshiba Chromebook 13 (CB30)"
                ],
                "boardname": "LEON",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/toshiba-cb30-chromebook\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebox CXI"
                ],
                "boardname": "McCLOUD",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "LG Chromebase 22"
                ],
                "boardname": "MONROE",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebox CN60"
                ],
                "boardname": "PANTHER",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer C720/C720P Chromebook"
                ],
                "boardname": "PEPPY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Dell Chromebox 3010"
                ],
                "boardname": "TRICKY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Dell Chromebook 11 (CB1C13)"
                ],
                "boardname": "WOLF",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/dell-chromebook-11\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebox CB1 / G1"
                ],
                "boardname": "ZAKO",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "Broadwell": [
            {
                "device": [
                    "Acer C740 Chromebook"
                ],
                "boardname": "AURON_PAINE",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer C910 Chromebook (CB5-571)"
                ],
                "boardname": "AURON_YUNA",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebase 24"
                ],
                "boardname": "BUDDY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Toshiba Chromebook2 (2015)"
                ],
                "boardname": "GANDOF",
                "rwLegacy": null,
                "fullrom": false,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebox 2 (CN62)"
                ],
                "boardname": "GUADO",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Dell Chromebook 13 7310"
                ],
                "boardname": "LULU",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/acer-c720-chromebook\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Acer Chromebox CXI2"
                ],
                "boardname": "RIKKU",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Google Chromebook Pixel (2015)"
                ],
                "boardname": "SAMUS",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel-2015#TOC-Firmware-Write-Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Lenovo ThinkCentre Chromebox"
                ],
                "boardname": "TIDUS",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "Baytrail": [
            {
                "device": [
                    "Acer Chromebook 15 (CB3-531)"
                ],
                "boardname": "BANJO",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 11 (3120)"
                ],
                "boardname": "CANDY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo N20/N20P Chromebook"
                ],
                "boardname": "CLAPPER",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo N21 Chromebook"
                ],
                "boardname": "ENGUARDE",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo ThinkPad 11e/Yoga Chromebook"
                ],
                "boardname": "GLIMMER",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 11 (CB3-111/131, C730, C730E, C735)"
                ],
                "boardname": "GNAWTY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Haier Chromebook G2"
                ],
                "boardname": "HELI",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 11 G3/G4",
                    "HP Chromebook 14 G4"
                ],
                "boardname": "KIP",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "AOpen Chromebox Commercial"
                ],
                "boardname": "NINJA",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Ideapad 100S Chromebook"
                ],
                "boardname": "ORCO",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C300"
                ],
                "boardname": "QUAWKS",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C200"
                ],
                "boardname": "SQUAWKS",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "AOpen Chromebase Commercial"
                ],
                "boardname": "SUMO",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Toshiba Chromebook 2 (2014)"
                ],
                "boardname": "SWANKY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Samsung Chromebook 2 (XE500C12)"
                ],
                "boardname": "WINKY",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            }
        ],
        "Braswell": [
            {
                "device": [
                    "Acer Chromebook 15 (CB3-532)"
                ],
                "boardname": "BANON",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a href=\"/images/b/bb/Banon_wp.jpg\" class=\"internal\" title=\"Banon wp.jpg\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Samsung Chromebook 3"
                ],
                "boardname": "CELES",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Requires platform clock workaround. (See <a href=\"post-install.html\">post install</a>)",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook R11 (C738T, CB5-132T)"
                ],
                "boardname": "CYAN",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 14 (CB3-431)"
                ],
                "boardname": "EDGAR",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.ifixit.com/Teardown/Acer+Chromebook+14+Teardown/76353\" target=\"_blank\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 11 3180/3189"
                ],
                "boardname": "KEFKA",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo N22/N42 Chromebook"
                ],
                "boardname": "REKS",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 11 N7 (C731)",
                    "CTL NL61 Chromebook",
                    "Edxis Education Chromebook (NL6D)",
                    "HP Chromebook 11 G5 EE",
                    "Mecer V2 Chromebook",
                    "Positivo Chromebook C216B"
                ],
                "boardname": "RELM",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a href=\"/images/5/54/C731_wp.jpg\" class=\"internal\" title=\"C731 wp.jpg\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 11 G5"
                ],
                "boardname": "SETZER",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C202S/C202SA"
                ],
                "boardname": "TERRA",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "<a href=\"/images/0/08/C202sa_wp.jpg\" class=\"internal\" title=\"C202sa wp.jpg\">screw</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C300SA/C301SA"
                ],
                "boardname": "TERRA13",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo ThinkPad 11e/Yoga Chromebook (G3)"
                ],
                "boardname": "ULTIMA",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL J5 Chromebook",
                    "Edugear CMT Chromebook",
                    "Haier Chromebook 11 C",
                    "Multilaser Chromebook M11C",
                    "PCMerge Chromebook PCM-116T-432B",
                    "Prowise Chromebook Proline",
                    "Viglen Chromebook 360"
                ],
                "boardname": "WIZPIG",
                "rwLegacy": null,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "No MacOS support."
            }
        ],
        "Skylake": [
            {
                "device": [
                    "Dell Chromebook 13 3380"
                ],
                "boardname": "ASUKA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Samsung Chromebook Pro"
                ],
                "boardname": "CAROLINE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebook C302CA"
                ],
                "boardname": "CAVE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebook 13 G1"
                ],
                "boardname": "CHELL",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebook 14 for Work",
                    "Acer Chromebook 11 (C771/C771T)"
                ],
                "boardname": "LARS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Lenovo Thinkpad 13 Chromebook"
                ],
                "boardname": "SENTRY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "Apollolake": [
            {
                "device": [
                    "Acer Chromebook 11 (C732)"
                ],
                "boardname": "ASTRONAUT",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C223NA"
                ],
                "boardname": "BABYMEGA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C523NA"
                ],
                "boardname": "BABYTIGER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL Chromebook NL7/NL7T",
                    "Edxis Chromebook 11/X11",
                    "Positivo Chromebook N2110/N2112",
                    "Viglen Chromebook 360C",
                    ""
                ],
                "boardname": "BLACKTIP",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 15 (CB315)"
                ],
                "boardname": "BLUE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 15 (CP315)"
                ],
                "boardname": "BRUCE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 11 (R751T)"
                ],
                "boardname": "ELECTRO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 514"
                ],
                "boardname": "EPAULETTE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 11 CP311"
                ],
                "boardname": "LAVA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 11 5190"
                ],
                "boardname": "NASHER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 11 5190 2-in-1"
                ],
                "boardname": "NASHER360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Thinkpad 11e/Yoga 11e (G4)"
                ],
                "boardname": "PYRO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C423"
                ],
                "boardname": "RABBID",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip C213SA"
                ],
                "boardname": "REEF",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 100e Chromebook"
                ],
                "boardname": "ROBO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 500e Chromebook"
                ],
                "boardname": "ROBO360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 15 (CB515-1HT)"
                ],
                "boardname": "SAND",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 11 (CB311-8H)"
                ],
                "boardname": "SANTA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 11 G1 EE",
                    "HP Chromebook 11 G6",
                    "HP Chromebook 14 G5"
                ],
                "boardname": "SNAPPY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL Chromebook J41/J41T",
                    "PCmerge Chromebook AL116",
                    "Prowise Chromebook Eduline",
                    "Sector 5 E3 Chromebook",
                    "Viglen Chromebook 11C"
                ],
                "boardname": "WHITETIP",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. Buggy SD card.",
                "linux": "MicroSD detection issues<br><br>No headphone jack on SOF<br><br>max98357a on AVS doesn't have a volume limiter so speakers could get fried",
                "mac": "No MacOS support."
            }
        ],
        "Kabylake / Amberlake": [
            {
                "device": [
                    "Acer Chromebook 13"
                ],
                "boardname": "AKALI",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebook Spin 13"
                ],
                "boardname": "AKALI360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Google Pixelbook Go (2019)"
                ],
                "boardname": "ATLAS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. No webcam support.",
                "linux": "Cameras don't work.",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Acer Chromebook 715 (CB715)"
                ],
                "boardname": "BARD",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebook 714 (CB714)"
                ],
                "boardname": "EKKO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Google Pixelbook (2017)"
                ],
                "boardname": "EVE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Asus Google Meet kit (KBL)"
                ],
                "boardname": "EXCELSIOR",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/a/a8/Excelsior_wp.jpg\" class=\"internal\" title=\"Excelsior wp.jpg\">screw</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "AOpen Chromebox Commercial 2",
                    "Newline Chromebox A10"
                ],
                "boardname": "JAX",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebase 24I2"
                ],
                "boardname": "KARMA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, screw",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebox G2"
                ],
                "boardname": "KENCH",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebook C425"
                ],
                "boardname": "LEONA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Samsung Chromebook Plus V2"
                ],
                "boardname": "NAUTILUS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Camera on the keyboard doesn't work.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Google Pixel Slate"
                ],
                "boardname": "NOCTURNE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid. No webcam support.",
                "linux": "Cameras don't work.",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Lenovo Yoga Chromebook C630"
                ],
                "boardname": "PANTHEON",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebook Flip C433/C434"
                ],
                "boardname": "SHYVANA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Tested, Supported."
            },
            {
                "device": [
                    "Acer Chromebox CXI3"
                ],
                "boardname": "SION",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebook x360 14"
                ],
                "boardname": "SONA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebook X2"
                ],
                "boardname": "SORAKA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebook 15 G1"
                ],
                "boardname": "SYNDRA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebox 3 (CN65)"
                ],
                "boardname": "TEEMO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Dell Inspiron Chromebook 14 (7460)"
                ],
                "boardname": "VAYNE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "CTL Chromebox CBx1",
                    "Promethean Chromebox",
                    "SMART Chromebox G3",
                    "ViewSonic NMP660 Chromebox"
                ],
                "boardname": "WUKONG",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://kodi.wiki/view/Archive:Chromebox#Disable_Firmware_Write_Protect\" target=\"_blank\">screw</a>",
                "windows": "Audio driver is paid.",
                "linux": "max98357a doesn't have a volume limiter so speakers could get fried.",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "Geminilake": [
            {
                "device": [
                    "Asus Chromebook Flip C214/C234"
                ],
                "boardname": "AMPTON",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip C204"
                ],
                "boardname": "APEL",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 12b"
                ],
                "boardname": "BLOOG",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 14a"
                ],
                "boardname": "BLOOGLET",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 14a/14b"
                ],
                "boardname": "BLOOGUARD",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 315"
                ],
                "boardname": "BLORB",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Samsung Chromebook 4"
                ],
                "boardname": "BLUEBIRD",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 311",
                    "(CB311-9H, CB311-9HT, C733, C733U, C733T)"
                ],
                "boardname": "BOBBA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 311 (CP311-2H, CP311-2HN)",
                    "Acer Chromebook Spin 511 (R752T, R752TN)"
                ],
                "boardname": "BOBBA360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Samsung Chromebook 4+"
                ],
                "boardname": "CASTA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "NEC Chromebook Y2"
                ],
                "boardname": "DOOD",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 14 G6"
                ],
                "boardname": "DORP",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 314 (CB314)",
                    "Packard Bell Chromebook 314 (PCB314)"
                ],
                "boardname": "DROID",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 3100"
                ],
                "boardname": "FLEEX",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL Chromebook VX11/VX11T",
                    "Poin2 Chromebook 11P"
                ],
                "boardname": "FOOB",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Poin2 Chromebook 11P"
                ],
                "boardname": "FOOB360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "ADVAN Chromebook 116",
                    "Axioo Chromebook",
                    "Baicells Chromebook BB01",
                    "CTL Chromebook NL71/CT/LTE",
                    "EVERCOSS Chromebook CB1",
                    "Edxis Chromebook 11 (S20-C)",
                    "JOI Chromebook C100",
                    "Multilaser Chromebook M11C-PC914",
                    "Pixart Rxart Chromebook",
                    "Poin2 Chromebook 11A",
                    "SPC Chromebook X1 Mini",
                    "Sector 5 E4 LTE Chromebook",
                    "WS Chromebook A101",
                    "Zyrex Chromebook M432"
                ],
                "boardname": "GARG",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Ascon Chromebook 11A",
                    "Axioo Chromebook 360",
                    "Baicells Chromebook BB01",
                    "CTL Chromebook NL71T/TW/TWB",
                    "EVERCOSS Chromebook CB1A",
                    "Edxis Chromebook 11 (S20-X)",
                    "JOI Chromebook C100",
                    "Multilaser Chromebook M11HC-PC915",
                    "Pixart Rxart Chromebook",
                    "Poin2 Chromebook 11A",
                    "SPC Chromebook X1 Mini",
                    "WS Chromebook A101",
                    "Zyrex Chromebook 360"
                ],
                "boardname": "GARG360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL Chromebook NL81/NL81T"
                ],
                "boardname": "GARFOUR",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 311"
                ],
                "boardname": "GLK",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 311"
                ],
                "boardname": "GLK360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 3100 2-in-1"
                ],
                "boardname": "GRABBITER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Chromebook C340"
                ],
                "boardname": "LASER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Chromebook S340/IdeaPad 3"
                ],
                "boardname": "LASER14",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Ideapad 3 Chromebook"
                ],
                "boardname": "LICK",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 11 G2 EE"
                ],
                "boardname": "MEEP",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 11 G7 EE"
                ],
                "boardname": "MIMROCK",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook C424"
                ],
                "boardname": "NOSPIKE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 3400"
                ],
                "boardname": "ORBATRIX",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 100e Chromebook Gen 2"
                ],
                "boardname": "PHASER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 300e Chromebook Gen 2/IdeaPad Flex 3",
                    "NEC Chromebook Y1"
                ],
                "boardname": "PHASER360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 500e Chromebook Gen 2"
                ],
                "boardname": "PHASER360S",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 512 (C851/C851T)"
                ],
                "boardname": "SPARKY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 512 (R851TN)"
                ],
                "boardname": "SPARKY360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 11 G8 EE"
                ],
                "boardname": "VORTICON",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 11 G3 EE"
                ],
                "boardname": "VORTININJA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "No MacOS support."
            }
        ],
        "Whiskeylake": [
            {
                "device": [
                    "Dell Latitude 5300 2-in-1 Chromebook Enterprise"
                ],
                "boardname": "ARCADA",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">battery</a>",
                "windows": "?",
                "linux": "?",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Dell Latitude 5400 Chromebook Enterprise"
                ],
                "boardname": "SARIEN",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">battery</a>",
                "windows": "?",
                "linux": "?",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "Cometlake": [
            {
                "device": [
                    "Lenovo Ideapad Flex 5 Chromebook"
                ],
                "boardname": "AKEMI",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebook x360 14c"
                ],
                "boardname": "DRAGONAIR",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Fingerprint reader doesn't work",
                "mac": "Tested, Supported.<br><br>Requires `DevirtualiseMmio` to be disabled."
            },
            {
                "device": [
                    "Dell Latitude 7410 Chromebook Enterprise"
                ],
                "boardname": "DRALLION",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Supported",
                "mac": "Tested, Supported.<br><br>Requires `DevirtualiseMmio` to be disabled."
            },
            {
                "device": [
                    "HP Pro c640 Chromebook"
                ],
                "boardname": "DRATINI",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Fingerprint reader doesn't work",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebox 4"
                ],
                "boardname": "DUFFY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/a/ab/Duffy_wp_jumper.png\" class=\"internal\" title=\"Duffy wp jumper.png\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Fanless Chromebox"
                ],
                "boardname": "FAFFY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Asus Chromebook Flip C436FA"
                ],
                "boardname": "HELIOS",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Elite c1030 Chromebook",
                    "HP Chromebook x360 13c"
                ],
                "boardname": "JINLON",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Fingerprint reader doesn't work",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebox CXI4"
                ],
                "boardname": "KAISA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebook 712 (C871)"
                ],
                "boardname": "KINDRED",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Acer Chromebook Spin 713 (CP713-2W)"
                ],
                "boardname": "KLED",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Tested, Supported.<br><br>Requires `DevirtualiseMmio` to be disabled."
            },
            {
                "device": [
                    "Samsung Galaxy Chromebook"
                ],
                "boardname": "KOHAKU",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Fingerprint reader doesn't work.<br><br>Sleep issues related to EC (wakes up with lid closed)",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "Samsung Galaxy Chromebook 2"
                ],
                "boardname": "NIGHTFURY",
                "rwLegacy": false,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "HP Chromebox G3"
                ],
                "boardname": "NOIBAT",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/9/9d/Noibat_wp.png\" class=\"internal\" title=\"Noibat wp.png\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            },
            {
                "device": [
                    "CTL Chromebox CBx2"
                ],
                "boardname": "WYVERN",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/b/b0/Wyvern_WP_jumper.png\" class=\"internal\" title=\"Wyvern WP jumper.png\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Supported",
                "mac": "Not tested. Celeron/Pentium devices unsupported."
            }
        ],
        "TigerLake": [
            {
                "device": [
                    "FMV Chromebook 14F"
                ],
                "boardname": "CHRONICLER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CX3"
                ],
                "boardname": "COLLIS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CX5 (CX5400)"
                ],
                "boardname": "COPANO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CX55, CX5 (CX5500), C536"
                ],
                "boardname": "DELBIN",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX9 (CX9400)"
                ],
                "boardname": "DROBIT",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 14c"
                ],
                "boardname": "ELDRID",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Pro c640 G2 Chromebook"
                ],
                "boardname": "ELEMI",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo IdeaPad Flex 5i Chromebook"
                ],
                "boardname": "LILLIPUP",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 5i-14 Chromebook",
                    "Lenovo Slim 5 Chromebook"
                ],
                "boardname": "LINDAR",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 514 (CB514-2H)"
                ],
                "boardname": "VOEMA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 515 (CB515-1W, CB515-1WT)"
                ],
                "boardname": "VOLET",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 514 (CB514-1W, CB514-1WT)"
                ],
                "boardname": "VOLTA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 713 (CP713-3W)"
                ],
                "boardname": "VOXEL",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            }
        ],
        "JasperLake": [
            {
                "device": [
                    "Lenovo Flex 3i 15 / Ideapad Flex 3i Chromebook"
                ],
                "boardname": "BEETLEY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 3i-15 Chromebook"
                ],
                "boardname": "BLIPPER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 100e Chromebook Gen 3"
                ],
                "boardname": "BOOKEM",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/5/5c/Boten_wp.jpg\" class=\"internal\" title=\"Boten wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 500e Chromebook Gen 3"
                ],
                "boardname": "BOTEN",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/5/5c/Boten_wp.jpg\" class=\"internal\" title=\"Boten wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Flex 3i-11 / IdeaPad Flex 3i Chromebook"
                ],
                "boardname": "BOTENFLEX",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/5/5c/Boten_wp.jpg\" class=\"internal\" title=\"Boten wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Samsung Galaxy Chromebook 2 360"
                ],
                "boardname": "BUGZZY",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 3110"
                ],
                "boardname": "CRET",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Chromebook 3110 2-in-1"
                ],
                "boardname": "CRET360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 11 G4 EE"
                ],
                "boardname": "DRAWCIA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/5/50/Drawcia_wp.jpg\" class=\"internal\" title=\"Drawcia wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 11 G9 EE"
                ],
                "boardname": "DRAWLAT",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/1/17/Drawlat_wp.jpg\" class=\"internal\" title=\"Drawlat wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 14 G7"
                ],
                "boardname": "DRAWMAN",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/5/52/Drawman_wp.jpg\" class=\"internal\" title=\"Drawman wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Fortis 14 G10 Chromebook"
                ],
                "boardname": "DRAWPER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/5/52/Drawman_wp.jpg\" class=\"internal\" title=\"Drawman wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX1500CKA"
                ],
                "boardname": "GALITH",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX1500FKA"
                ],
                "boardname": "GALITH360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX1700CKA"
                ],
                "boardname": "GALLOP",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX1 CX1102"
                ],
                "boardname": "GALNAT",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CX1 CX1102"
                ],
                "boardname": "GALNAT360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX1"
                ],
                "boardname": "GALTIC",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX1400FKA"
                ],
                "boardname": "GALTIC360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL Chromebook NL72"
                ],
                "boardname": "KRACKO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "CTL Chromebook NL72T",
                    "LG Chromebook 11TC50Q/11TQ50Q"
                ],
                "boardname": "KRACKO360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 14a-ca1"
                ],
                "boardname": "LANDIA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 15a-na0"
                ],
                "boardname": "LANDRID",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 14a"
                ],
                "boardname": "LANTIS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 14b"
                ],
                "boardname": "MADOO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 314"
                ],
                "boardname": "MAGISTER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 512 [C852]"
                ],
                "boardname": "MAGLET",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 512 [R853TA/R853TNA]"
                ],
                "boardname": "MAGLIA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/b/b6/Maglia_wp.jpg\" class=\"internal\" title=\"Maglia wp.jpg\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 511 [C733/C734]"
                ],
                "boardname": "MAGLITH",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 315 [CB315-4H/4HT]"
                ],
                "boardname": "MAGMA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 314 [CB314-3H/3HT, C934/C934T]"
                ],
                "boardname": "MAGNETO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 511 [R753T]"
                ],
                "boardname": "MAGOLOR",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 317 [CB317-1H]"
                ],
                "boardname": "MAGPIE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/3/3c/Magpie_wp_jumper.png\" class=\"internal\" title=\"Magpie wp jumper.png\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "NEC Chromebook Y3"
                ],
                "boardname": "METAKNIGHT",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, <a href=\"/images/3/3c/Magpie_wp_jumper.png\" class=\"internal\" title=\"Magpie wp jumper.png\">jumper</a>",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Gateway Chromebook 15"
                ],
                "boardname": "PASARA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Axioo Chromebook P11",
                    "CTL Chromebook PX11E",
                    "SPC Chromebook Z1 Mini",
                    "Zyrex Chromebook M432-2"
                ],
                "boardname": "PIRETTE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Axioo Chromebook P14",
                    "Gateway Chromebook 14"
                ],
                "boardname": "PIRIKA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Samsung Galaxy Chromebook Go"
                ],
                "boardname": "SASUKE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CR1100CKA"
                ],
                "boardname": "STORO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CR1100FKA"
                ],
                "boardname": "STORO360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Audio driver is paid.",
                "linux": "Cameras untested.",
                "mac": "No MacOS support."
            }
        ],
        "Alderlake": [
            {
                "device": [
                    "HP Elite c640 14 inch G3 Chromebook"
                ],
                "boardname": "ANAHERA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Framework Laptop Chromebook Edition"
                ],
                "boardname": "BANSHEE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Latitude 5430 Chromebook"
                ],
                "boardname": "CROTA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Latitude 5430 2-in-1 Chromebook"
                ],
                "boardname": "CROTA360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CX5 (CX5601)"
                ],
                "boardname": "FELWINTER",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 14c-cd0"
                ],
                "boardname": "GIMBLE",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 714 (CP714-1WN)"
                ],
                "boardname": "KANO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CX34 Flip",
                    "Asus Chromebook Vibe CX34 Flip"
                ],
                "boardname": "MITHRAX",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 516 GE (CBG516-1H)"
                ],
                "boardname": "OSIRIS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo ThinkPad C14 Gen 1 Chromebook"
                ],
                "boardname": "PRIMUS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Elite Dragonfly Chromebook"
                ],
                "boardname": "REDRIX",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "Touchpad needs fix, no camera, see <a href=\"https://github.com/chrultrabook/docs/issues/72\">#72</a>",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo IdeaPad Gaming Chromebook 16"
                ],
                "boardname": "TANIKS",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Flex 5i Chromebook / IdeaPad Flex 5i Chromebook"
                ],
                "boardname": "TAEKO",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Vero 514"
                ],
                "boardname": "VOLMAR",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Vero 712 (CV872, CV872T)"
                ],
                "boardname": "ZAVALA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "Audio and Thunderbolt drivers are paid.",
                "linux": "No fingerprint functionality on models that have it.<br><br>USB4 requires systemd service (See <a href=\"post-install.html\">post install</a>)",
                "mac": "No MacOS support."
            }
        ],
        "Intel Alderlake-N": [
            {
                "device": [
                    "Acer Chromebook Spin 512"
                ],
                "boardname": "CRAASK",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 511"
                ],
                "boardname": "CRAASKBOWL",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 511"
                ],
                "boardname": "CRAASKVIN",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 314"
                ],
                "boardname": "CRAASNETO",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 500e Yoga Chromebook Gen 4"
                ],
                "boardname": "PUJJO",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo IdeaPad Flex 3i Chromebook"
                ],
                "boardname": "PUJJOFLEX",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 14e Chromebook Gen 3"
                ],
                "boardname": "PUJJOTEEN",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo Ideapad Slim 3i Chromebook"
                ],
                "boardname": "PUJJOTEEN15W",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CR11 [CR1102C]"
                ],
                "boardname": "XIVU",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook CR11 [CR1102F]"
                ],
                "boardname": "XIVU360",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 15.6\""
                ],
                "boardname": "YAVIKS",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>",
                "windows": "WIP Windows support.",
                "linux": "Audio may not work.",
                "mac": "No MacOS support."
            }
        ],
        "Stoneyridge": [
            {
                "device": [
                    "Acer Chromebook 315 (CB315-2H)"
                ],
                "boardname": "ALEENA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 11A G6 EE",
                    "HP Chromebook 11A G8 EE"
                ],
                "boardname": "BARLA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 14A G5"
                ],
                "boardname": "CAREENA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook 311 (C721)"
                ],
                "boardname": "KASUMI",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 311 (R721T)"
                ],
                "boardname": "KASUMI360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 14e Chromebook (S345)"
                ],
                "boardname": "LIARA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 100e Chromebook Gen 2 AMD"
                ],
                "boardname": "TREEYA",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 300e Chromebook Gen 2 AMD"
                ],
                "boardname": "TREEYA360",
                "rwLegacy": true,
                "fullrom": true,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "No Windows support.",
                "linux": "Needs kernel compiled with AMDGPU=Y instead of =M and firmware built-in to get working audio<br><br>eMMC is only detected on a cold boot unless you have a patched kernel",
                "mac": "No MacOS support."
            }
        ],
        "Picasso/Dali": [
            {
                "device": [
                    "HP Pro c645 Chromebook Enterprise"
                ],
                "boardname": "BERKNIP",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook 14a"
                ],
                "boardname": "DIRINBOZ",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Spin 514"
                ],
                "boardname": "EZKINIL",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Chromebook x360 14a"
                ],
                "boardname": "GUMBOZ",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo ThinkPad C13 Yoga Chromebook"
                ],
                "boardname": "MORPHIUS",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 100e Chromebook Gen 3"
                ],
                "boardname": "VILBOZ",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 14e Chromebook Gen 2"
                ],
                "boardname": "VILBOZ14",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Lenovo 300e Chromebook Gen 3"
                ],
                "boardname": "VILBOZ360",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Asus Chromebook Flip CM5"
                ],
                "boardname": "WOOMAX",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50 (battery)</a>",
                "windows": "Supported",
                "linux": "Needs to add \"iommu=pt\" to cmdline<br><br>eMMC models need to put /boot/efi and /boot on USB",
                "mac": "No MacOS support."
            }
        ],
        "AMD Cezanne": [
            {
                "device": [
                    "Acer Chromebook Spin 514 [CP514-3H, CP514-3HH, CP514-3WH]"
                ],
                "boardname": "DEWATT",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>,jumper",
                "windows": "Not supported.",
                "linux": "Audio WIP.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "HP Elite c645 G2 Chromebook"
                ],
                "boardname": "NIPPERKIN",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Not supported.",
                "linux": "Audio WIP.",
                "mac": "No MacOS support."
            }
        ],
        "AMD Mendocino": [
            {
                "device": [
                    "TBD"
                ],
                "boardname": "CRYSTALDRIFT",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>,jumper",
                "windows": "Support WIP.",
                "linux": "Audio WIP.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "ASUS Chromebook CM34 Flip"
                ],
                "boardname": "FROSTFLOW",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Support WIP.",
                "linux": "Audio WIP.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Acer Chromebook Plus 514"
                ],
                "boardname": "MARKARTH",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Support WIP.",
                "linux": "Audio WIP.",
                "mac": "No MacOS support."
            },
            {
                "device": [
                    "Dell Latitude 3445 Chromebook"
                ],
                "boardname": "WHITERUN",
                "rwLegacy": true,
                "fullrom": false,
                "wpMethod": "<a href=\"https://wiki.mrchromebox.tech/Firmware_Write_Protect#Hardware_Write_Protection\" title=\"Firmware Write Protect\">CR50</a>, jumper",
                "windows": "Support WIP.",
                "linux": "Audio WIP.",
                "mac": "No MacOS support."
            }
        ]
    };
    
    let html = `
<table>
    <tbody>`;
    let first = true;
    for (const generation in chromebooks) {
        let devices = chromebooks[generation];
        if (first) {
            first = false;
        } else {
            html += `
        <tr>
            <td colspan="8"></td>
        </tr>`;
        }
        html += `
        <tr>
            <th colspan="8" style="text-align:left;"> <i>${generation}</i></th>
        </tr>
        <tr>
            <th scope="col"> Device Name</th>
            <th scope="col"> Board Name</th>
            <th scope="col"> RW_LEGACY <br> Firmware</th>
            <th scope="col"> UEFI Firmware <br>(Full ROM)</th>
            <th scope="col"> WP Method</th>
            <th scope="col"> Windows Notes</th>
            <th scope="col"> Linux Notes</th>
            <th scope="col"> MacOS Notes</th>
        </tr>`;
        
        let windows;
        let linux;
        let mac;
        
        devices.forEach((device, index) => {
            let devicename = device.device.join("<br>");
            let rw_legacy = "";
            if (device.rwLegacy === null) {
                rw_legacy = "<span style=\"color:#ff0000\"><b>EOL</b></span>";
            } else if (device.rwLegacy === true) {
                rw_legacy = "✅";
            }
            let full_rom = device.fullrom ? "✅" : "";
            
            let win_out = "";
            let linux_out = "";
            let mac_out = "";
            if (windows !== device.windows) {
                let length = 0;
                windows = device.windows;
                for (let i=index; i<devices.length; i++) {
                    if (devices[i].windows === windows) length++;
                    else break;
                }
                win_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${windows}</td>`;
            }
            if (linux !== device.linux) {
                let length = 0;
                linux = device.linux;
                for (let i=index; i<devices.length; i++) {
                    if (devices[i].linux === linux) length++;
                    else break;
                }
                linux_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${linux}</td>`;
            }
            if (mac !== device.mac) {
                let length = 0;
                mac = device.mac;
                for (let i=index; i<devices.length; i++) {
                    if (devices[i].mac === mac) length++;
                    else break;
                }
                mac_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${mac}</td>`;
            }
            
            
            html += `
        <tr>
            <td>${devicename}</td>
            <td style="text-align:center;"> ${device.boardname}</td>
            <td style="text-align:center;"> ${rw_legacy}</td>
            <td style="text-align:center;"> ${full_rom}</td>
            <td style="text-align:center;"> ${device.wpMethod}</td>${win_out}${linux_out}${mac_out}
        </tr>`;
        
        })
    }
    html += `
    </tbody>
</table>`;
    return html;
}

console.log("Loading...");
const fs = require("fs");
let data = fs.readFileSync("template.md", "utf8");
data = data.replace("${{TABLE}}", generateHTML());
fs.writeFileSync("../docs/supported-devices.md", data);
console.log("File written to ../docs/supported-devices.md")

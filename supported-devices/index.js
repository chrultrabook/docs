//node index.js to run

/*
  devices.json should not be modified independently from the one in mrchromebox's website.
*/

/*
  os-support.json overrides/adds to any data existing in devices.json from mrchromebox.
  How the formatting in os-support.json works

{
    "cpu generation": {
        "default_windows": "Default Windows support message.",
        "default_mac": "Default macos support message.",
        "default_linux": "Default linux support message.",
        "default_rwLegacy": false, //null = EOL (display red EOL message), true = supported (display checkbox), false = not supported
        "default_fullrom": true, //true = supported, false = not supported.
        "default_wpmethod": ""<a rel=\"nofollow noopener noreferrer\" class=\"external text\" href=\"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/hp-pavilion-14-chromebook\" target=\"_blank\">switch</a>", //default wp method link.
        "devices": [ //This is an array
            {
                "device": [
                    "Array of chromebook models",
                    "that this boardname",
                    "is known by."
                ],
                "boardname": "BOARDNAME",
                "linux": "Display linux support message **instead of** the default message."
            },
            {
                "device": [
                    "Coolio chromebook name"
                ],
                "boardname": "BOARDNAME",
                "rwLegacy": null,
                "wpMethod": "Different wp method link/method",
                "windows": "Display Windows support message **instead of** the default message."
            },
        ]
    }
}

*/

// modified version of https://stackoverflow.com/a/34749873
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}
function mergeDevices(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDevices(target[key], source[key]);
      } else if (source[key] instanceof Array && target[key] instanceof Array && key === "devices") {
        for (const entry of source[key]) {
          let dest = target[key].findIndex(i => i.boardname === entry.boardname);
          if (dest >= 0) Object.assign(target[key][dest], entry);
        }
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDevices(target, ...sources);
}

console.log("Loading...");

const path = require("path");
const fs = require("fs");

fs.writeFileSync(
  path.join(__dirname, "../src/.vuepress/public/devices.json"),
  JSON.stringify(
    mergeDevices(
      JSON.parse(fs.readFileSync(path.join(__dirname, "devices.json"), "utf-8")),
      JSON.parse(fs.readFileSync(path.join(__dirname, "os-support.json"), "utf-8"))
    )
  )
);

console.log("Done!");

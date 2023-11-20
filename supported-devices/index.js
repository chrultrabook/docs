//node index.js to run

/**
  How the formatting in devices.json works

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

*/


function generateHTML(chromebooks) {
    let html = `
<table style="font-size: 14px !important;">
    <tbody>`;
    let first = true;
    for (const generation in chromebooks) {
        let devices = chromebooks[generation];
        devices.devices.forEach(device => {
            //set defaults
            if (device.windows === undefined) device.windows = devices.default_windows;
            if (device.linux === undefined) device.linux = devices.default_linux;
            if (device.mac === undefined) device.mac = devices.default_mac;
            if (device.wpMethod === undefined) device.wpMethod = devices.default_wpmethod;
            if (device.fullrom === undefined) device.fullrom = devices.default_fullrom;
            if (device.rwLegacy === undefined) device.rwLegacy = devices.default_rwLegacy;
        })
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
        
        devices.devices.forEach((device, index) => {
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
                for (let i=index; i<devices.devices.length; i++) {
                    if (devices.devices[i].windows === windows) length++;
                    else break;
                }
                win_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${windows}</td>`;
            }
            if (linux !== device.linux) {
                let length = 0;
                linux = device.linux;
                for (let i=index; i<devices.devices.length; i++) {
                    if (devices.devices[i].linux === linux) length++;
                    else break;
                }
                if (!linux) linux=devices.default_linux;
                linux_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${linux}</td>`;
            }
            if (mac !== device.mac) {
                let length = 0;
                mac = device.mac;
                for (let i=index; i<devices.devices.length; i++) {
                    if (devices.devices[i].mac === mac) length++;
                    else break;
                }
                if (!mac) mac=devices.default_mac;
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

const path = require("path");

console.log("Loading...");
const fs = require("fs");
let data = fs.readFileSync(path.join(__dirname, "template.md"), "utf8");
data = data.replace("${{TABLE}}", generateHTML(require('./devices.json')));

//Putting this in the template file causes the template be be showed in the listing
fs.writeFileSync(path.join(__dirname, "../src/docs/firmware/supported-devices.md"), data);

//Dont question the function.toString.... Javascript is funny
fs.writeFileSync(path.join(__dirname, "../src/.vuepress/public/supported-devices.js"), fs.readFileSync(path.join(__dirname, "search.js"), "utf-8").replace("{{script}}", generateHTML.toString()));
fs.copyFileSync(path.join(__dirname, "devices.json"), path.join(__dirname, "../src/.vuepress/public/devices.json"));

console.log("Done!");

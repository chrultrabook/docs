//This file cleans up the "nav_order" headers found at the beginning of the files, marking the order they should be displayed properly.

const fs = require("fs");
const path = require('path');

//The path to the file.
//If the file is not listed below, it will not be displayed in the navaigation menu.
const order = [
    "../index.md",
    "faq.md",
    "known-issues.md",
    "getting-started.md",
    "system-info.md",
    "terminology.md",
    "supported-devices.md",
    "allaboutfirmware.md",
    "firmware.md",
    "altos.md",
    "installing-windows.md",
    "installing-linux.md",
    "installing-macos.md",
    "csdriver.md",
    "signedlicense.md",
    "post-install.md",
    "updating-firmware.md",
    "recovery-mode.md",
    "entering-developer-mode.md",
    "exiting-developer-mode.md",
    {
        "file": "advanced.md",
        "children": [
            "debugging.md",
            "compiling-coreboot.md",
            "unbricking.md",
            "distros.md",
            "unbrick-flipper.md"
        ]
    },
    "contributing.md",
    "reverting.md",
    "ventoy.md",
    "bootableusb.md",
    "bugreport.md"
]

function processFile(file, index) {
    const isObj = typeof file !== "string";
    const filePath = path.join(__dirname, (isObj ? file.file : file));
    const contents = fs.readFileSync(filePath, "utf-8");
    if (!contents.includes("nav_order:")) {
        console.warn("Missing nav_order on file", filePath);
        return;
    }
    const currentHeader = contents.split("---")[1].split("---")[0];
    const currentOrder = currentHeader.split("nav_order:").pop().split("\n")[0];
    const lineEnding = currentOrder.endsWith("\r") ? "\r" : "";
    const newHeader = currentHeader.replace("nav_order:" + currentOrder, "nav_order: " + index + lineEnding);
    const newContents = contents.replace(currentHeader, newHeader);

    fs.writeFileSync(filePath, newContents);

    if (isObj && file.children) {
        processDir(file.children);
    }
}

function processDir(files) {
    if (!Array.isArray(files)) return;
    files.forEach((file, i) => {
        processFile(file, i + 1);
    });
}

console.log("Processing...");
processDir(order);
console.log("Done!");

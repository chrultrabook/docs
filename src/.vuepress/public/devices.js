function generateHTML(devicesJson) {
  let html = `
<table style="font-size: 14px !important;">
    <tbody>`;
  let first = true;
  for (const generation in devicesJson) {
    let devices = devicesJson[generation];
    if (devices.isExperimental === true && !window.hasOwnProperty("showExperimental")) continue;
    devices.devices.forEach((device) => {
      //set defaults
      if (device.windows === undefined)
        device.windows = devices.default_windows;
      if (device.linux === undefined) device.linux = devices.default_linux;
      if (device.mac === undefined) device.mac = devices.default_mac;
      if (device.wpMethod === undefined)
        device.wpMethod = devices.default_wpmethod;
      if (device.fullrom === undefined)
        device.fullrom = devices.default_fullrom;
      if (device.rwLegacy === undefined)
        device.rwLegacy = devices.default_rwLegacy;
    });
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
            <th scope="col"> macOS Notes</th>
        </tr>`;

    let windows;
    let linux;
    let mac;

    devices.devices.forEach((device, index) => {
      let devicename = device.device.join("<br>");
      let rw_legacy = "";
      if (device.rwLegacy === null) {
        rw_legacy = '<span style="color:#ff0000"><b>EOL</b></span>';
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
        for (let i = index; i < devices.devices.length; i++) {
          if (devices.devices[i].windows === windows) length++;
          else break;
        }
        win_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${windows}</td>`;
      }
      if (linux !== device.linux) {
        let length = 0;
        linux = device.linux;
        for (let i = index; i < devices.devices.length; i++) {
          if (devices.devices[i].linux === linux) length++;
          else break;
        }
        if (!linux) linux = devices.default_linux;
        linux_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${linux}</td>`;
      }
      if (mac !== device.mac) {
        let length = 0;
        mac = device.mac;
        for (let i = index; i < devices.devices.length; i++) {
          if (devices.devices[i].mac === mac) length++;
          else break;
        }
        if (!mac) mac = devices.default_mac;
        mac_out = `\n            <td rowspan="${length}" style=\"text-align:center;\">${mac}</td>`;
      }

      html += `
        <tr>
            <td>${devicename}</td>
            <td style="text-align:center;"> ${device.boardname}</td>
            <td style="text-align:center;"> ${rw_legacy}</td>
            <td style="text-align:center;"> ${full_rom}</td>
            <td style="text-align:center;"> ${device.wpMethod}</td>
            ${win_out}${linux_out}${mac_out}
        </tr>`;
    });
  }
  html += `
    </tbody>
</table>`;
  return html;
}

(async () => {
    const table = document.querySelector(".deviceTable");
    const searchbox = document.querySelector(".deviceSearch");
    let devices = [];
    try {
        devices = JSON.parse(await (await fetch("../../devices.json")).text());
    } catch(e) {
        console.warn(e);
        searchbox.parentElement.remove();
        return;
    }

    table.innerHTML = generateHTML(JSON.parse(JSON.stringify(devices)));

    function search(keyword) {
        let dv = JSON.parse(JSON.stringify(devices));
        keyword = keyword.toLowerCase().trim();
        if (keyword === "show hidden!") {
            searchbox.value = "";
            keyword = "";
            window.showExperimental = true;
        }
        if (!keyword) {
            table.innerHTML = generateHTML(dv);
            return;
        }
        for (const k in dv) {
            for (let i=0; i<dv[k].devices.length; i++) {
                let hasTerm = dv[k].devices[i].device.filter(e => e.toLowerCase().includes(keyword)).length !== 0 || dv[k].devices[i].boardname.toLowerCase().includes(keyword);
                if (!hasTerm) {
                    dv[k].devices.splice(i, 1);
                    i--;
                }
            }
            if (dv[k].devices.length === 0) {
                delete dv[k];
            }
        }
        if (Object.keys(dv).length === 0) {
            table.innerHTML = "";
            table.innerText = "Device not found. Did you make a typo?";
            return;
        }
        table.innerHTML = generateHTML(dv);
    }
    searchbox.addEventListener("keyup", (e) => search(e.target.value));
})();

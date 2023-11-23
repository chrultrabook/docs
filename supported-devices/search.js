{{script}}

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

    function search(keyword) {
        keyword = keyword.toLowerCase().trim();
        let dv = JSON.parse(JSON.stringify(devices));
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
    searchbox.addEventListener("keydown", (e) => search(e.target.value));
    searchbox.addEventListener("keyup", (e) => search(e.target.value));
})();

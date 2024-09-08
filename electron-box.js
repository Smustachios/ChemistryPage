const elementParent = document.getElementById("elements-area");

const elements = [
    {
        atomNo: 1,
        symbol: "H",
        weight: "1.008",
        name: "Vesinik",
        desc: "Aatomis 1 prooton, neutron, elektron. Elektronkihte on 1. Kihis on 1 paardumata elektron.",
        config: "Elektronskeem: H+1|1)",
        formula: "Elektronvalem: 1s1",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 6,
        symbol: "C",
        weight: "12.01",
        name: "Süsinik",
        desc: "Aatomis 6 prootonit, neutronit, elektroni. Elektronkihte on 2. Viimasel kihil neli elektroni - üks elektronpaar ja 2 paardumata elektroni.",
        config: "Elektronskeem: C+6|2)4)",
        formula: "Elektronvalem: 1s2 2s2 2p2",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&nbsp;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 7,
        symbol: "N",
        weight: "14.01",
        name: "Lämmastik",
        desc: "Aatomis 7 prootonit, neutronit, elektroni. Elektronkihte on 2. Viimasel kihil viis elektroni - üks elektronpaar ja 3 paardumata elektroni.",
        config: "Elektronskeem: N+7|2)5)",
        formula: "Elektronvalem: 1s2 2s2 2p3",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 8,
        symbol: "O",
        weight: "16.00",
        name: "Hapnik",
        desc: "Aatomis 8 prootonit, neutronit, elektroni. Elektronkihte on 2. Viimasel kihil kuus elektroni - kaks elektronpaari ja 2 paardumata elektroni.",
        config: "Elektronskeem: O+8|2)6)",
        formula: "Elektronvalem: 1s2 2s2 2p4",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 11,
        symbol: "Na",
        weight: "22.99",
        name: "Naatrium",
        desc: "Aatomis 11 prootonit, neutronit, elektroni. Elektronkihte on 3. Viimasel kihil üks elektron.",
        config: "Elektronskeem: Na+11|2)8)1)",
        formula: "Elektronvalem: 1s2 2s2 2p6 3s1",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">3s</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 12,
        symbol: "Mg",
        weight: "24.31",
        name: "Magneesium",
        desc: "Aatomis 12 prootonit, neutronit, elektroni. Elektronkihte on 3. Viimasel kihil kaks elektroni - üks elektron paar.",
        config: "Elektronskeem: Mg+12|2)8)2)",
        formula: "Elektronvalem: 1s2 2s2 2p6 3s2",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">3s</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 15,
        symbol: "P",
        weight: "30.97",
        name: "Fosfor",
        desc: "Aatomis 15 prootonit, neutronit, elektroni. Elektronkihte on 3. Viimasel kihil viis elektroni - üks elektron paar ja 3 paardumata elektroni.",
        config: "Elektronskeem: P+15|2)8)5)",
        formula: "Elektronvalem: 1s2 2s2 2p6 3s2 3p3",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">3s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">3p</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 16,
        symbol: "S",
        weight: "32.07",
        name: "Väävel",
        desc: "Aatomis 16 prootonit, neutronit, elektroni. Elektronkihte on 3. Viimasel kihil kuus elektroni - kaks elektron paari ja 2 paardumata elektroni.",
        config: "Elektronskeem: S+16|2)8)6)",
        formula: "Elektronvalem: 1s2 2s2 2p6 3s2 3p4",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">3s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">3p</div>
                </div>
            </div>
        `,
    },
    {
        atomNo: 27,
        symbol: "Co",
        weight: "58,93",
        name: "Koobalt",
        desc: "Aatomis 27 prootonit, neutronit, elektroni. Elektronkihte on 4. Viimasel kihil kaks elektroni - üks elektron paar.",
        config: "Elektronskeem: S+27|2)8)15)2)",
        formula: "Elektronvalem: 1s2 2s2 2p6 3s2 3p6 4s2 3d7",
        boxes: `
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">1s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">2p</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">3s</div>
                </div>
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">3p</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="box-name">4s</div>
                </div>
            </div>
            <div class="box-group">
                <div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;&darr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="electron-box">&uarr;</div>
                    <div id="box-name">3d</div>
                </div>
            </div>
        `,
    },
]

function buildElements(){
    elements.forEach((element) => {
        elementParent.innerHTML += 
        `   <div id="element">
                <div id="element-info">
                    <h3>${element.name}</h3>
                    <p>${element.desc}</p>
                    <p class="electron-config">${element.config}</p>
                    <p class="electron-config">${element.formula}</p>
                    <div class="electron-boxes">
                        ${element.boxes}
                    </div>
                </div>
                <div id="element-pic">
                    <div id="element-no">${element.atomNo}</div>
                    <div id="element-symbol">${element.symbol}</div>
                    <div id="element-desc">${element.name}</div>
                    <div id="element-weight">${element.weight}</div>
                </div>
            </div>
        `;
    });
}

buildElements(elements);
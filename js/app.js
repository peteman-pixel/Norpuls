/*
==========================================================
NORPULS
Application
==========================================================
*/
import { createCard } from "./components/card.js";
import { config } from "./config.js";
import DataHub from "./datahub.js";

console.log(config);

async function start() {

    console.log("Starting Norpuls...");

    await DataHub.refresh();

    document.getElementById("sidebar").innerHTML = `
        <h2 style="padding:20px;">🇳🇴 Norpuls</h2>

        <div style="padding:20px;color:#94a3b8;">
            Dashboard
        </div>

        <div style="padding:20px;color:#94a3b8;">
            Energi
        </div>

        <div style="padding:20px;color:#94a3b8;">
            Valuta
        </div>

        <div style="padding:20px;color:#94a3b8;">
            Markeder
        </div>

        <div style="padding:20px;color:#94a3b8;">
            Geopolitikk
        </div>

    `;

    document.getElementById("topbar").innerHTML = `

        <h1>Norpuls</h1>

        <div>
            Norge Dashboard
        </div>

    `;

    document.getElementById("dashboard").innerHTML = `

        <div class="hero">

            <div class="panel">

                <h2>Norge Score</h2>

                <div class="score">

                    82

                </div>

                <p>
                    Beregnes automatisk.
                </p>

            </div>

            <div class="panel">

                <h2>AI-oppsummering</h2>

                <p>

                    Norpuls er startet.

                    Neste steg er å koble til ekte markedsdata.

                </p>

            </div>

        </div>

        <div class="grid">

           ${createCard({
    title:"Brent",
    value:"--",
    unit:"USD",
    change:"",
    trend:"neutral"
})}

${createCard({
    title:"USD/NOK",
    value:"--",
    change:"",
    trend:"neutral"
})}

${createCard({
    title:"OSEBX",
    value:"--",
    change:"",
    trend:"neutral"
})}

${createCard({
    title:"TTF Gass",
    value:"--",
    unit:"EUR/MWh",
    change:"",
    trend:"neutral"
})}

${createCard({
    title:"Nord Pool",
    value:"--",
    unit:"kr/kWh",
    change:"",
    trend:"neutral"
})}

${createCard({
    title:"EU Gasslager",
    value:"--",
    unit:"%",
    change:"",
    trend:"neutral"
})}

        </div>

    `;

}

function createCard(title,value,change){

    return `

        <div class="card">

            <div class="card-title">

                ${title}

            </div>

            <div class="card-value">

                ${value}

            </div>

            <div class="card-change">

                ${change}

            </div>

        </div>

    `;

}

start();

/*
==========================================================
NORPULS
Dashboard Component
==========================================================
*/

import { createCard } from "./card.js";

export function renderDashboard(data) {

    const dashboard = document.getElementById("dashboard");

    dashboard.innerHTML = `

        <section class="hero">

            <div class="panel">

                <h2>Norge Score</h2>

                <div class="score">82</div>

                <p>
                    Beregnes automatisk basert på
                    energi, økonomi og geopolitikk.
                </p>

            </div>

            <div class="panel">

                <h2>AI Analyse</h2>

                <p>

                    Norpuls er startet.

                    Datakildene kobles inn fortløpende.

                </p>

            </div>

        </section>

        <section class="grid">

            ${renderCards(data)}

        </section>

    `;

}

function renderCards(data){

    return `

        ${createCard({
            title:"Brent",
            value:data.energy.brent.value,
            unit:data.energy.brent.unit
        })}

        ${createCard({
            title:"WTI",
            value:data.energy.wti.value,
            unit:data.energy.wti.unit
        })}

        ${createCard({
            title:"TTF",
            value:data.energy.ttf.value,
            unit:data.energy.ttf.unit
        })}

        ${createCard({
            title:"USD/NOK",
            value:data.currency.usdnok.value
        })}

        ${createCard({
            title:"EUR/NOK",
            value:data.currency.eurnok.value
        })}

        ${createCard({
            title:"EU Gasslager",
            value:data.energy.gasStorage.value,
            unit:data.energy.gasStorage.unit
        })}

    `;

}

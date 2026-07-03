/*
==========================================================
NORPULS
Application
==========================================================
*/
import { renderSidebar } from "./components/sidebar.js";
import { renderDashboard } from "./components/dashboard.js";

import EnergyService from "./services/energy.js";
import CurrencyService from "./services/currency.js";

async function start() {

    console.log("Starting Norpuls...");

    const energy = await EnergyService.refresh();
    const currency = await CurrencyService.refresh();

    document.getElementById("sidebar").innerHTML =
        renderSidebar();

    document.getElementById("topbar").innerHTML = `
        <h1>Norpuls</h1>
        <div>🇳🇴 Norge Dashboard</div>
    `;

    renderDashboard({
        energy,
        currency
    });

}

start();

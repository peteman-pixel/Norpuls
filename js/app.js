/*
==========================================================
NORPULS
Application
==========================================================
*/
import EnergyService from "./services/energy.js";
import CurrencyService from "./services/currency.js";

import { renderDashboard } from "./components/dashboard.js";

async function start() {

    console.log("Starting Norpuls...");

    const energy = await EnergyService.refresh();

    const currency = await CurrencyService.refresh();

    renderDashboard({

        energy,
        currency

    });

}

start();

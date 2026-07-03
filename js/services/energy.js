/*
==========================================================
NORPULS
Energy Service
==========================================================
*/

class EnergyService {

    constructor() {

        this.data = {

            brent: {
                value: "--",
                unit: "USD/fat",
                change: "--"
            },

            wti: {
                value: "--",
                unit: "USD/fat",
                change: "--"
            },

            ttf: {
                value: "--",
                unit: "EUR/MWh",
                change: "--"
            },

            nordpool: {
                value: "--",
                unit: "NOK/kWh",
                change: "--"
            },

            gasStorage: {
                value: "--",
                unit: "%",
                change: "--"
            }

        };

    }

    async refresh() {

        /*
         Her kobler vi inn ekte API senere.

         Denne funksjonen skal ALLTID returnere
         samme datastruktur.
        */

        return this.data;

    }

    getBrent() {

        return this.data.brent;

    }

    getWTI() {

        return this.data.wti;

    }

    getTTF() {

        return this.data.ttf;

    }

    getNordPool() {

        return this.data.nordpool;

    }

    getGasStorage() {

        return this.data.gasStorage;

    }

}

export default new EnergyService();

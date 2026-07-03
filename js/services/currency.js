/*
==========================================================
NORPULS
Currency Service
==========================================================
*/

class CurrencyService {

    constructor() {

        this.data = {

            usdnok: {
                value: "--",
                change: "--"
            },

            eurnok: {
                value: "--",
                change: "--"
            },

            gbpnok: {
                value: "--",
                change: "--"
            },

            seknok: {
                value: "--",
                change: "--"
            }

        };

    }

    async refresh() {

        return this.data;

    }

    getAll() {

        return this.data;

    }

}

export default new CurrencyService();

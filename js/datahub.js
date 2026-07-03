/*
==========================================================
NORPULS
DataHub
==========================================================
*/

class DataHub {

    constructor() {

        this.data = {

            energy: {},
            currency: {},
            markets: {},
            norway: {},
            geopolitics: {},
            news: {}

        };

    }

    set(module, value) {

        this.data[module] = value;

    }

    get(module) {

        return this.data[module];

    }

    getAll() {

        return this.data;

    }

    async refresh() {

        console.log("Refreshing dashboard...");

        // Her kobles de virkelige tjenestene inn senere

        return this.data;

    }

}

export default new DataHub();

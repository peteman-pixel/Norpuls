/*
==========================================================
NORPULS
Configuration
==========================================================
*/

export const config = {

    app: {

        name: "Norpuls",

        version: "1.0.0",

        language: "no",

        theme: "dark"

    },

    refresh: {

        dashboard: 300,

        prices: 60,

        news: 600

    },

    modules: {

        energy: true,

        currency: true,

        markets: true,

        norway: true,

        geopolitics: true,

        news: true,

        ai: true

    },

    dashboard: {

        cardsPerRow: 4,

        showCharts: true,

        showNews: true,

        showAnalysis: true

    }

};

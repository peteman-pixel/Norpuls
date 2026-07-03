/*
==========================================================
NORPULS
Card Component
==========================================================
*/

export function createCard(options = {}) {

    const {

        title = "Ingen tittel",
        value = "--",
        unit = "",
        change = "",
        trend = "neutral"

    } = options;

    return `

        <div class="card">

            <div class="card-title">

                ${title}

            </div>

            <div class="card-value">

                ${value}
                <span style="font-size:.8rem;">
                    ${unit}
                </span>

            </div>

            <div class="card-change ${trend}">

                ${change}

            </div>

        </div>

    `;

}

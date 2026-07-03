export function renderSidebar() {

    return `

        <div class="sidebar-header">

            <h2>🇳🇴 Norpuls</h2>

            <p>v1.0 Foundation</p>

        </div>

        <nav class="sidebar-menu">

            <a href="#" class="active">🏠 Dashboard</a>

            <a href="#">⚡ Energi</a>

            <a href="#">💰 Valuta</a>

            <a href="#">📈 Markeder</a>

            <a href="#">🇳🇴 Norge</a>

            <a href="#">🌍 Geopolitikk</a>

            <a href="#">📰 Nyheter</a>

            <a href="#">⚙ Innstillinger</a>

        </nav>

    `;

}

Commit:

Add sidebar component
Nå trenger vi litt CSS

Legg nederst i css/main.css:

/* ======================================
   SIDEBAR
====================================== */

.sidebar-header{

    padding:30px;

    border-bottom:1px solid var(--border);

}

.sidebar-header p{

    margin-top:8px;

    color:var(--text-secondary);

    font-size:.9rem;

}

.sidebar-menu{

    display:flex;

    flex-direction:column;

    padding:15px;

}

.sidebar-menu a{

    padding:14px 18px;

    margin-bottom:8px;

    border-radius:10px;

    color:var(--text-secondary);

    transition:.2s;

}

.sidebar-menu a:hover{

    background:var(--surface-light);

    color:white;

}

.sidebar-menu .active{

    background:var(--primary);

    color:white;

}

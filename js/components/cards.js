/* =========================================
   Cards Component
========================================= */

const Cards = {

    create(title, value, icon, trendClass = "", trend = "") {

        return `
            <div class="summary-card hover-lift">

                <div class="card-header">

                    <div class="card-title">${title}</div>

                    <div class="card-icon">
                        <i data-lucide="${icon}"></i>
                    </div>

                </div>

                <div class="card-value">${value}</div>

                <div class="card-footer">
                    <span class="card-status">Overall</span>
                    <span class="card-trend ${trendClass}">${trend}</span>
                </div>

            </div>
        `;
    }

};
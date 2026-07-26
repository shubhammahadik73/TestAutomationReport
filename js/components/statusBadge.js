/* =========================================
   Status Badge
========================================= */

const StatusBadge = {

    create(status) {

        return `
            <span class="status-badge status-${status.toLowerCase()}">
                ${status}
            </span>
        `;

    }

};
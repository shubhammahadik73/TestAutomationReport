/* =========================================
   Filter
========================================= */

const Filter = {

    byStatus(status) {

        document.querySelectorAll(".test-row").forEach(row => {

            if (status === "All") {

                row.style.display = "";
                return;

            }

            const value = row
                .querySelector(".status-badge")
                .textContent
                .trim();

            row.style.display =
                value.toLowerCase() === status.toLowerCase()
                    ? ""
                    : "none";

        });

    }

};
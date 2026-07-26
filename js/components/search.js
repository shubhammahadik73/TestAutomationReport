/* =========================================
   Search
========================================= */

const Search = {

    init(inputId, rowSelector) {

        const input = document.getElementById(inputId);

        if (!input) return;

        input.addEventListener("keyup", e => {

            const value = e.target.value.toLowerCase();

            document.querySelectorAll(rowSelector).forEach(row => {

                row.style.display =
                    row.innerText.toLowerCase().includes(value)
                        ? ""
                        : "none";

            });

        });

    }

};
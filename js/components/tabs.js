/* =========================================
   Tabs Component
========================================= */

const Tabs = {

    init() {

        document.querySelectorAll(".tab").forEach(tab => {

            tab.addEventListener("click", () => {

                const target = tab.dataset.tab;

                document.querySelectorAll(".tab").forEach(t =>
                    t.classList.remove("active")
                );

                document.querySelectorAll(".tab-panel").forEach(panel =>
                    panel.classList.remove("active")
                );

                tab.classList.add("active");

                document
                    .getElementById(target)
                    .classList.add("active");

            });

        });

    }

};
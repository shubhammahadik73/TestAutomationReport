/* =========================================
   Method Tabs
========================================= */

const MethodTabs = {

    init() {

        document.querySelectorAll(".method-card").forEach(card => {

            const tabs = card.querySelectorAll(".method-tab");

            const panels = card.querySelectorAll(".method-panel");

            tabs.forEach(tab => {

                tab.addEventListener("click", () => {

                    tabs.forEach(t => t.classList.remove("active"));

                    panels.forEach(p => p.classList.remove("active"));

                    tab.classList.add("active");

                    card
                        .querySelector(`#${tab.dataset.tab}`)
                        .classList.add("active");

                });

            });

        });

    }

};
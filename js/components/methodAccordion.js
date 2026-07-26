/* =========================================
   Method Accordion
========================================= */

const MethodAccordion = {

    init() {

        document.querySelectorAll(".method-header").forEach(header => {

            header.addEventListener("click", () => {

                const body = header.nextElementSibling;

                const arrow = header.querySelector(".method-arrow");

                body.classList.toggle("open");

                arrow.classList.toggle("open");

            });

        });

    }

};
/* =========================================
   Router
========================================= */

const Router = {

    pages: [
        "dashboard",
        "failures",
        "tests",
        "trace",
        "analytics"
    ],

    show(page) {

        this.pages.forEach(id => {

            document
                .getElementById(id)
                .classList.remove("active");

        });

        document
            .getElementById(page)
            .classList.add("active");

        document
            .querySelectorAll(".nav-item")
            .forEach(item => {

                item.classList.toggle(
                    "active",
                    item.dataset.page === page
                );

            });

        AppState.currentPage = page;

    }

};
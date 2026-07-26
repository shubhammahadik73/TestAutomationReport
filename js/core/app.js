/* =========================================
   App Entry
========================================= */

document.addEventListener("DOMContentLoaded", async () => {

    await ReportLoader.load();

    Sidebar.render();

    Header.render();

    Dashboard.render();

    Failures.render();

    Tests.render();

    Trace.render();

    Analytics.render();

    Router.show("dashboard");

    lucide.createIcons();

});
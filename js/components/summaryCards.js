/* =========================================
   Summary Cards
========================================= */

const SummaryCards = {

    create(summary) {

        return `

            ${Cards.create("Total Test Cases", summary.total, "list-checks")}

            ${Cards.create("Passed", summary.passed, "badge-check", "success",
            Formatter.percentage(summary.passed, summary.total))}

            ${Cards.create("Failed", summary.failed, "circle-x", "failed",
            Formatter.percentage(summary.failed, summary.total))}

            ${Cards.create("Skipped", summary.skipped, "circle-minus", "warning",
            Formatter.percentage(summary.skipped, summary.total))}

            ${Cards.create("Execution", summary.duration, "timer")}

        `;

    }

};
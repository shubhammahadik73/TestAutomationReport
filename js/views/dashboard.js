/* =========================================
   Dashboard View
========================================= */

const Dashboard = {

    render() {

        const summary = ReportLoader.getSummary();
        const env = ReportLoader.getEnvironment();
        const tests = ReportLoader.getTestCases();

        document.getElementById("dashboard").innerHTML = `

        <div class="dashboard">

            <div class="summary-grid">

    ${SummaryCards.create(summary)}

</div>

            <div class="overview-grid">

                <div class="chart-container">

                    <div class="chart-header">

                        <div class="chart-title">
                            Execution Summary
                        </div>

                    </div>

                    <div class="chart-body">

                        <canvas id="summaryChart"></canvas>

                    </div>

                </div>

                <div class="panel">

                    ${EnvironmentTable.create(env)}

                </div>

            </div>

            <div class="table-section">

    <div class="panel-title">

        Executed Test Cases

    </div>

    ${TableToolbar.create()}

    ${Table.create(tests)}

</div>

        </div>

        `;

        Charts.summary("summaryChart", summary);

        lucide.createIcons();
        document.querySelectorAll(".test-row").forEach(row => {
        Search.init("testSearch", ".test-row");

document
    .getElementById("statusFilter")
    .addEventListener("change", e => {

        Filter.byStatus(e.target.value);

    });
    row.addEventListener("click", () => {

        Router.show("tests");

        TestExplorer.show(row.dataset.id);

    });

});

    }

};
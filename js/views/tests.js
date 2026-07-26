/* =========================================
   Tests View
========================================= */

const Tests = {

    render() {

        const testCases = ReportLoader.getTestCases();

        document.getElementById("tests").innerHTML = `

            <div class="explorer">

                <div class="explorer-sidebar">

                    ${TestCaseList.create(testCases)}

                </div>

                <div class="explorer-content">

                    <div class="test-header">

                        <div class="test-name-title"></div>

                    </div>

                    <div class="execution-content"></div>

                </div>

            </div>

        `;

        Search.init(
            "testCaseSearch",
            ".test-case-card"
        );

        document
            .querySelectorAll(".test-case-card")
            .forEach(card => {

                card.addEventListener("click", () => {

                    document
                        .querySelectorAll(".test-case-card")
                        .forEach(c => c.classList.remove("active"));

                    card.classList.add("active");

                    TestExplorer.show(card.dataset.id);

                });

            });

    }

};
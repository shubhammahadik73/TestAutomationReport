/* =========================================
   Test Summary
========================================= */

const TestSummary = {

    create(testCase){

        return `

        <div class="summary-grid-info">

            <div class="info-card">

                <div class="info-label">

                    Status

                </div>

                <div>

                    ${StatusBadge.create(testCase.status)}

                </div>

            </div>

            <div class="info-card">

                <div class="info-label">

                    Suite

                </div>

                <div class="info-value">

                    ${testCase.suite}

                </div>

            </div>

            <div class="info-card">

                <div class="info-label">

                    Duration

                </div>

                <div class="info-value">

                    ${Formatter.duration(testCase.duration)}

                </div>

            </div>

            <div class="info-card">

                <div class="info-label">

                    Methods

                </div>

                <div class="info-value">

                    ${testCase.methods.length}

                </div>

            </div>

        </div>

        `;

    }

};
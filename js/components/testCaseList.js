/* =========================================
   Test Case List
========================================= */

const TestCaseList = {

    create(testCases){

        return `

            <input
                id="testCaseSearch"
                class="test-search"
                placeholder="Search Test Cases...">

            <div class="test-case-list">

                ${testCases.map(testCase=>`

                <div
                    class="test-case-card"
                    data-id="${testCase.id}">

                    <div class="test-case-top">

                        <div class="test-case-id">

                            ${testCase.id}

                        </div>

                        ${StatusBadge.create(testCase.status)}

                    </div>

                    <div class="test-case-title">

                        ${testCase.name}

                    </div>

                    <div class="test-case-footer">

                        <span>${testCase.suite}</span>

                        <span>${testCase.methods.length} Methods</span>

                    </div>

                </div>

                `).join("")}

            </div>

        `;

    }

};
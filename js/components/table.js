/* =========================================
   Table Component
========================================= */

const Table = {

    create(tests) {

        return `

            <div class="table-container">

                <table class="table">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Test Name</th>
                            <th>Suite</th>
                            <th>Status</th>
                            <th>Duration</th>

                        </tr>

                    </thead>

                    <tbody>

                        ${tests.map(test => `

                            <tr
                                class="test-row"
                                data-id="${test.id}">

                                <td>${test.id}</td>

                                <td>${test.name}</td>

                                <td>${test.suite}</td>

                                <td>${StatusBadge.create(test.status)}</td>

                                <td>${Formatter.duration(test.duration)}</td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        `;

    }

};
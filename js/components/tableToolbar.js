/* =========================================
   Table Toolbar
========================================= */

const TableToolbar = {

    create() {

        return `

            <div class="table-toolbar">

                <input
                    id="testSearch"
                    class="search-box"
                    type="text"
                    placeholder="Search tests...">

                <select
                    id="statusFilter"
                    class="status-filter">

                    <option>All</option>
                    <option>Passed</option>
                    <option>Failed</option>
                    <option>Skipped</option>

                </select>

            </div>

        `;

    }

};
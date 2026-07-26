/* =========================================
   Environment Table
========================================= */

const EnvironmentTable = {

    create(environment) {

        return `

            <div class="panel">

                <div class="panel-title">

                    Environment

                </div>

                <div class="table-container">

                    <table class="table">

                        <tbody>

                            ${Object.entries(environment).map(([key, value]) => `

                                <tr>

                                    <td>${Formatter.capitalize(key)}</td>

                                    <td>${value}</td>

                                </tr>

                            `).join("")}

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }

};
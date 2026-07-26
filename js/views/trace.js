/* =========================================
   Trace View
========================================= */

const Trace = {

    render() {

        document.getElementById("trace").innerHTML = `

            <div class="panel">

                <div class="panel-title">
                    Playwright Trace
                </div>

                <div class="table-container">

                    <table class="table">

                        <thead>

                            <tr>
                                <th>Time</th>
                                <th>Action</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>00:00:01</td>
                                <td>Navigate</td>
                                <td>Success</td>
                            </tr>

                            <tr>
                                <td>00:00:02</td>
                                <td>Click Login</td>
                                <td>Success</td>
                            </tr>

                            <tr>
                                <td>00:00:03</td>
                                <td>Fill Username</td>
                                <td>Success</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                <br>

                <button class="theme-toggle">
                    Open Original Trace
                </button>

            </div>

        `;

    }

};
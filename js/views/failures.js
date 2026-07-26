/* =========================================
   Failures View
========================================= */

const Failures = {

    render() {

        document.getElementById("failures").innerHTML = `

            <div class="panel">

                <div class="panel-title">
                    Failure Summary
                </div>

                <div class="table-container">

                    <table class="table">

                        <thead>
                            <tr>
                                <th>Exception</th>
                                <th>Test Case</th>
                                <th>Duration</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>TimeoutError</td>
                                <td>Login Test</td>
                                <td>5.2 s</td>
                            </tr>

                            <tr>
                                <td>AssertionError</td>
                                <td>Checkout Test</td>
                                <td>3.7 s</td>
                            </tr>

                            <tr>
                                <td>ElementNotFound</td>
                                <td>Payment Test</td>
                                <td>4.8 s</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }

};
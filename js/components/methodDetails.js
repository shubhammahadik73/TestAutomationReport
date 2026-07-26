/* =========================================
   Method Details
========================================= */

const MethodDetails={

    create(method){

        return`

        <div class="method-tabs">

            <div class="method-tab active"
                 data-tab="logs-${method.name}">

                 Logs

            </div>

            <div class="method-tab"
                 data-tab="console-${method.name}">

                 Console

            </div>

            <div class="method-tab"
                 data-tab="network-${method.name}">

                 Network

            </div>

            <div class="method-tab"
                 data-tab="screenshots-${method.name}">

                 Screenshots

            </div>

            <div class="method-tab"
                 data-tab="performance-${method.name}">

                 Performance

            </div>

        </div>

        <div
            id="logs-${method.name}"
            class="method-panel active">

            <div class="placeholder">

                No logs available.

            </div>

        </div>

        <div
            id="console-${method.name}"
            class="method-panel">

            <div class="placeholder">

                No console output.

            </div>

        </div>

        <div
            id="network-${method.name}"
            class="method-panel">

            <div class="placeholder">

                No network requests.

            </div>

        </div>

        <div
            id="screenshots-${method.name}"
            class="method-panel">

            <div class="placeholder">

                No screenshots.

            </div>

        </div>

        <div
            id="performance-${method.name}"
            class="method-panel">

            <div class="placeholder">

                No performance metrics.

            </div>

        </div>

        `;

    }

};
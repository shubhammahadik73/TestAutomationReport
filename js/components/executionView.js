/* =========================================
   Execution View
========================================= */

const ExecutionView = {

    create(testCase){

        return `

            <div class="execution-header">

    Execution

</div>

            <div class="method-list">

                ${testCase.methods.map(method=>`

                    <div class="method-card">

                        <div class="method-header">

                            <div class="method-left">

                                <i
                                    class="method-arrow"
                                    data-lucide="chevron-right">
                                </i>

                                <div>

                                    <div class="method-name">

                                        ${method.name}

                                    </div>

                                    <div class="method-duration">

                                        ${Formatter.duration(method.duration)}

                                    </div>

                                </div>

                            </div>

                            ${StatusBadge.create(method.status)}

                        </div>

                        <div class="method-body">

                            ${MethodDetails.create(method)}

                        </div>

                    </div>

                `).join("")}

            </div>

        `;

    }

};
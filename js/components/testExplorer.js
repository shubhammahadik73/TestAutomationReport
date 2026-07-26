/* =========================================
   Test Explorer
========================================= */

const TestExplorer = {
  show(testId) {
    const test = ReportLoader.getTestCases().find((t) => t.id === testId);

    if (!test) return;

    AppState.selectedTest = test;

    document.querySelector(".test-name-title").innerHTML = `

<div class="test-top">

    <span>

        ${StatusBadge.create(test.status)}

    </span>

    <a
        href="${test.azureUrl}"
        target="_blank"
        class="azure-link">

        ${test.id}

    </a>

</div>

<div class="test-title">

    ${test.name}

</div>

`;

    document.querySelector(".test-name-title").innerHTML = `

    <div class="test-top">

        ${StatusBadge.create(test.status)}

        <a
            href="${test.azureUrl}"
            target="_blank"
            class="azure-link">

            ${test.id}

        </a>

    </div>

    <div class="test-title">

        

    </div>

    <div class="test-meta">

        ${test.suite}
        &bull;
        ${Formatter.duration(test.duration)}
        &bull;
        ${test.methods.length} Methods

    </div>

`;

document.querySelector(".execution-content").innerHTML =
    ExecutionView.create(test);

    MethodAccordion.init();

    MethodTabs.init();

    lucide.createIcons();
  },
};

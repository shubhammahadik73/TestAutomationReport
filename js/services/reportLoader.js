/* =========================================
   Report Loader
========================================= */

const ReportLoader = {

    async load() {

        try {

            const response = await fetch("data/report.json");

            AppState.report = await response.json();

            return AppState.report;

        } catch (error) {

            console.error("Failed to load report.", error);

        }

    },

    getSummary() {

        return AppState.report.summary;

    },

    getEnvironment() {

        return AppState.report.environment;

    },

    getTestCases() {

    return AppState.report.testCases;

}

};
/* =========================================
   Charts
========================================= */

const Charts = {

    summary(id, summary) {

        const canvas = document.getElementById(id);

        if (!canvas) return;

        new Chart(canvas, {

            type: "doughnut",

            data: {

                labels: [
                    "Passed",
                    "Failed",
                    "Skipped"
                ],

                datasets: [{

                    data: [
                        summary.passed,
                        summary.failed,
                        summary.skipped
                    ],

                    backgroundColor: [
                        "#22C55E",
                        "#EF4444",
                        "#F59E0B"
                    ],

                    borderWidth: 0,

                    cutout: "68%"

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            color: "#F8FAFC",

                            padding: 20,

                            usePointStyle: true,

                            pointStyle: "circle"

                        }

                    }

                }

            }

        });

    }

};
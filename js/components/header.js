/* =========================================
   Header Component
========================================= */

const Header = {

    render() {

        const env = ReportLoader.getEnvironment();
        const summary = ReportLoader.getSummary();

        document.querySelector(".header").innerHTML = `

            <div class="header-left">

                <div class="header-title">

                    UI Automation Report

                </div>

                <div class="header-meta">

                    <div class="meta-item">
                        <span class="meta-label">Build</span>
                        <span class="meta-value">${env.build}</span>
                    </div>

                    <div class="meta-item">
                        <span class="meta-label">Environment</span>
                        <span class="meta-value">${env.environment}</span>
                    </div>

                    <div class="meta-item">
                        <span class="meta-label">Browser</span>
                        <span class="meta-value">${env.browser}</span>
                    </div>

                    <div class="meta-item">
                        <span class="meta-label">Duration</span>
                        <span class="meta-value">${summary.duration}</span>
                    </div>

                </div>

            </div>

            <div class="header-right">

                <button class="theme-toggle">

                    <i data-lucide="moon"></i>

                </button>

            </div>

        `;

    }

};
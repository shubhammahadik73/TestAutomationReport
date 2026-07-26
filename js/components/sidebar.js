/* =========================================
   Sidebar Component
========================================= */

const Sidebar = {

    items: [
        { id: "dashboard", icon: "layout-dashboard", text: "Dashboard" },
        { id: "failures", icon: "circle-x", text: "Failures" },
        { id: "tests", icon: "flask-conical", text: "Tests" },
        { id: "trace", icon: "activity", text: "Trace" },
        { id: "analytics", icon: "chart-column", text: "Analytics" }
    ],

    render() {

        const sidebar = document.querySelector(".sidebar");

        sidebar.innerHTML = `

            <div class="sidebar-header">

                <div class="sidebar-logo">
                    <i data-lucide="bot"></i>
                </div>

                <div class="sidebar-title">
                    Automation Report
                </div>

            </div>

            <nav class="sidebar-nav">

                ${this.items.map(item => `

                    <button
                        class="nav-item ${item.id === "dashboard" ? "active" : ""}"
                        data-page="${item.id}">

                        <span class="nav-icon">
                            <i data-lucide="${item.icon}"></i>
                        </span>

                        <span class="nav-text">
                            ${item.text}
                        </span>

                    </button>

                `).join("")}

            </nav>

        `;

        sidebar.querySelectorAll(".nav-item").forEach(item => {

            item.addEventListener("click", () => {

                Router.show(item.dataset.page);

            });

        });

    }

};
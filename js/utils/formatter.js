/* =========================================
   Formatter
========================================= */

const Formatter = {

    duration(ms) {

        if (ms < 1000) return `${ms} ms`;

        return `${(ms / 1000).toFixed(2)} s`;

    },

    percentage(value, total) {

        if (total === 0) return "0%";

        return `${((value / total) * 100).toFixed(1)}%`;

    },

    capitalize(text) {

        return text.charAt(0).toUpperCase() + text.slice(1);

    }

};
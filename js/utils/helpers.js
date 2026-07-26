/* =========================================
   Helper Functions
========================================= */

const Helpers = {

    qs(selector) {
        return document.querySelector(selector);
    },

    qsa(selector) {
        return document.querySelectorAll(selector);
    },

    byId(id) {
        return document.getElementById(id);
    },

    create(tag) {
        return document.createElement(tag);
    }

};
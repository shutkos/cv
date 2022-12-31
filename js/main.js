'use strict';

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
        if (tab.classList.contains("active")) {
            tab.classList.remove("active");
        } else {
            tab.classList.add("active");
        }
    });
});
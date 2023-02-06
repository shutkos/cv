'use strict';

const tabs = document.querySelectorAll(".tab");
const jobs = document.querySelectorAll(".job");

tabs.forEach(onTabClick);

function onTabClick(tab) {
    tab.addEventListener("click", (event) => {
        let currentTab = tab;
        let tabId = currentTab.getAttribute("data-tab");
        let currentJob = document.querySelector(tabId);

        if (!currentTab.classList.contains("active")) {
            tabs.forEach(tab => {
                tab.classList.remove("active");
            });
            jobs.forEach(job => {
                job.classList.remove("show");
            });

            currentTab.classList.add("active");
            currentJob.classList.add("show");

        }


    });
}
document.querySelector(".tab").click();


const burger = document.querySelector(".header_burger_button");
const menu = document.querySelector(".header_menu");
const menuItem = document.querySelectorAll(".header_menu_item");
const logo = document.querySelector(".header_logo_item");


burger.addEventListener("click", (event) => {
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
    burger.classList.toggle("close");
});

logo.addEventListener("click", (event) => {
    setTimeout(() => {
        menu.classList.remove("show");
        burger.classList.toggle("close");
    }, 500);
})

menuItem.forEach(item => {
    item.addEventListener("click", (event) => {
        setTimeout(() => {
            menu.classList.remove("show");
            burger.classList.toggle("close");
        }, 500);
    })
});



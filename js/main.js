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


const burger = document.querySelector("#burger");

burger.addEventListener("click", (event) => {
    //console.log(burger);
})

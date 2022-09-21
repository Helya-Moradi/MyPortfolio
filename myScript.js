import {
    Project
} from "./components/project/project.js";
window.customElements.define('simple-project', Project);


var list = document.querySelectorAll(".list"),
    tabs = document.querySelectorAll(".tabs");

list.forEach((item, index) => item.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    list.forEach((item) => item.classList.remove("active"));
    tabs[index].classList.add("active");
    list[index].classList.add("active");
}));
import "../styles/style.scss";
import "./apps/WeatherForecast/index.jsx";
import "./apps/ToDoList/index.jsx";
import "./apps/ToDoList/js/scrollBarFix.jsx";

//open app-menu
document.addEventListener("click", function (e) {
    if (e.target.closest(".about-app-section__button-cls")) {
        const menu = e.target.closest(".about-app-section");
        menu.style.transition = "right 0.15s ease-in";
        console.log(menu.offsetWidth);
        menu.style.right = "-" + menu.offsetWidth + "px";
    }
});
//close app-menu
document.addEventListener("click", function (e) {
    const target = e.target.closest(".about-app-section-open");
    if (target) {
        const menu = document.querySelector(`#${target.dataset.id}`);
        menu.style.transition = "right 0.1s linear";
        menu.style.right = "0";
    }
});

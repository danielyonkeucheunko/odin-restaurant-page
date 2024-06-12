import "./css/styles.css";
import "./css/normalize.css";
import { loadHomePage } from "./scripts/home";
import { loadMenuPage } from "./scripts/menu";
import { loadAboutPage } from "./scripts/about";

document.getElementById("home").addEventListener("click", () => {
    loadHomePage();
});

document.getElementById("menu").addEventListener("click", () => {
    loadMenuPage();
});

document.getElementById("about").addEventListener("click", () => {
    loadAboutPage();
});

loadHomePage();

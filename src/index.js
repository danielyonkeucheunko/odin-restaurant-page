import "./css/styles.css";
import "./css/normalize.css";
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadAboutPage } from "./about";

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

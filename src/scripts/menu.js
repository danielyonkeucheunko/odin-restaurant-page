import burgerImage from "../images/burger.jpg";

function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuPage = document.createElement("div");
    menuPage.className = "menu-page";

    const menuTitle = document.createElement("div");
    menuTitle.className = "menu-title";
    menuTitle.textContent = "Menu";

    const menu = document.createElement("div");
    menu.className = "menu";

    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const burger = new Image();
    burger.src = burgerImage;
    burger.alt = "A Picture of a Burger";
    burger.className = "food";

    const itemInfo = document.createElement("div");
    itemInfo.className = "item-info";

    const itemTitle = document.createElement("div");
    itemTitle.className = "item-title";
    itemTitle.textContent = "So Real Burger";

    const itemDesc = document.createElement("div");
    itemDesc.className = "item-desc";
    itemDesc.textContent = "A completely real burger that totally exists!";

    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(itemDesc);

    menuItem.appendChild(burger);
    menuItem.appendChild(itemInfo);

    for (let i = 0; i < 8; i++) {
        menu.appendChild(menuItem.cloneNode(true));
    }

    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menu);

    content.appendChild(menuPage);
}

export { loadMenuPage };

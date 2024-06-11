function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heroSection = document.createElement("div");
    heroSection.className = "hero";

    const heroSectionTitle = document.createElement("div");
    heroSectionTitle.className = "hero-title";
    heroSectionTitle.textContent = "Welcome to McFakes";

    const heroSectionSubtitle = document.createElement("div");
    heroSectionSubtitle.className = "hero-subtitle";
    heroSectionSubtitle.textContent =
        "Home of the best totally real fast food around!";

    heroSection.appendChild(heroSectionTitle);
    heroSection.appendChild(heroSectionSubtitle);

    const customerSection = document.createElement("div");
    customerSection.className = "customers";
    customerSection.textContent = "Serving customers in 87 countries!";

    const menuButton = document.createElement("button");
    menuButton.className = "menu";
    menuButton.textContent = "See Our Menu!";

    customerSection.appendChild(menuButton);

    content.appendChild(heroSection);
    content.appendChild(customerSection);
}

export { loadHomePage };

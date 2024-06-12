function loadAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const aboutPage = document.createElement("div");
    aboutPage.className = "about-page";

    const aboutCard = document.createElement("div");
    aboutCard.className = "about-card";

    const aboutCardTitle = document.createElement("div");
    aboutCardTitle.className = "about-card-title";
    aboutCardTitle.textContent = "Serving Customers Since the Dawn of Time!";

    const aboutCardDesc = document.createElement("div");
    aboutCardDesc.className = "about-card-desc";
    aboutCardDesc.textContent =
        "Welcome to McFakes, the world's premier destination for non-existent culinary delights! Founded by the visionary Dr. Fictitious McNonsense in 2035 in an alternate universe, McFakes has revolutionized dining with its HoloMunch technology, offering gastronomical illusions so vivid, you'll swear you've tasted them. Our mission is to transform hunger into hilarity with eco-friendly, quantum cuisine that includes Phantom Fries, Quantum Quiche, and Spectral Shakes, all designed to cater to beings from all dimensions.";

    const aboutCardDesc1 = document.createElement("div");
    aboutCardDesc1.className = "about-card-desc";
    aboutCardDesc1.textContent =
        "At McFakes, our culinary creations are as imaginative as they are impossible. Phantom Fries are invisibly crunchy and seasoned with particles from a supernova, while our Quantum Quiche changes flavor with every thought you have about it, featuring Schrödinger's cheese. Spectral Shakes, made from the dreams of unicorns and whispers of ancient stars, complete our menu of extraordinary non-meals that leave you full of laughter and imagination.";

    const aboutCardDesc2 = document.createElement("div");
    aboutCardDesc2.className = "about-card-desc";
    aboutCardDesc2.textContent =
        "With over 42 billion locations across multiple realities, McFakes has become a cosmic phenomenon. From the dark side of the moon to the whimsical world of fairy tales, we provide a dining experience that transcends reality. Step into the surreal and experience the impossible at McFakes, where the food is always fake, but the fun is 100% real.";

    aboutCard.appendChild(aboutCardTitle);
    aboutCard.appendChild(aboutCardDesc);
    aboutCard.appendChild(aboutCardDesc1);
    aboutCard.appendChild(aboutCardDesc2);

    aboutPage.appendChild(aboutCard);

    content.appendChild(aboutPage);
}

export { loadAboutPage };

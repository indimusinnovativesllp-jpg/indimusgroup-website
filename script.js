// ===============================
// INDIMUS GROUP WEBSITE
// Premium JavaScript
// ===============================

// Navbar background on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,20,15,0.90)";
    } else {
        navbar.style.background = "rgba(5,20,15,0.55)";
    }

});

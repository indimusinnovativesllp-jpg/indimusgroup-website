//==============================
// INDIMUS SCRIPT V1
//==============================

// Sticky Navbar
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Hero Image Floating
const heroImage = document.querySelector(".hero-img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/45;

let y=(window.innerHeight/2-e.pageY)/45;

heroImage.style.transform="translate("+x+"px,"+y+"px)";

});

}

// Loading Fade
window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// Console
console.log("INDIMUS Website Loaded Successfully");

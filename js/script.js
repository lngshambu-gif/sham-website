/*=========================================
      FERRARI SHOWROOM
      SCRIPT.JS - PART 1
=========================================*/

// ===============================
// Sticky Navigation
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

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

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#d40000";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Button Hover Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// ===============================
// Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".car-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ===============================
// Footer Year
// ===============================

const footerParagraph = document.querySelector("footer p:last-child");

if (footerParagraph) {

    footerParagraph.innerHTML =
        `© ${new Date().getFullYear()} Ferrari Showroom | Student Portfolio Project`;

}

console.log("Ferrari Showroom Loaded Successfully 🚗");

/*=========================================
      SCRIPT.JS - PART 2
      Ferrari Showroom Website
=========================================*/

// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

    ".car-card, .service-card, .team-card, .review, .feature-box, .plan-card"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition = "0.8s ease";

});

// ===============================
// Animated Statistics Counter
// ===============================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace(/\D/g, "");

        const current = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 100);

        if (current < target) {

            const next = current + increment;

            counter.setAttribute("data-count", next);

            counter.innerText = next + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// ===============================
// Hero Text Animation
// ===============================

const heroTitle = document.querySelector(".hero-content h1");

if (heroTitle) {

    heroTitle.style.opacity = "0";

    heroTitle.style.transform = "translateY(40px)";

    heroTitle.style.transition = "1s";

    setTimeout(() => {

        heroTitle.style.opacity = "1";

        heroTitle.style.transform = "translateY(0px)";

    }, 300);

}

// ===============================
// Hero Paragraph Animation
// ===============================

const heroText = document.querySelector(".hero-content p");

if (heroText) {

    heroText.style.opacity = "0";

    heroText.style.transition = "1.3s";

    setTimeout(() => {

        heroText.style.opacity = "1";

    }, 700);

}

// ===============================
// Gallery Image Hover
// ===============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.filter = "brightness(1.15)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.filter = "brightness(1)";

    });

});

// ===============================
// Contact Form Message
// ===============================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

// ===============================
// Console Message
// ===============================

console.log("Ferrari Animations Loaded Successfully 🚀");

/*=========================================
      SCRIPT.JS - PART 3
      FINAL FEATURES
=========================================*/

// ===============================
// FAQ Toggle
// ===============================

const faqItems = document.querySelectorAll(".faq-box");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if (answer) {

        answer.style.display = "none";

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            if (answer.style.display === "block") {

                answer.style.display = "none";

            } else {

                answer.style.display = "block";

            }

        });

    }

});

// ===============================
// Gallery Lightbox
// ===============================

const galleryImages2 = document.querySelectorAll(".gallery-grid img");

galleryImages2.forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const bigImage = document.createElement("img");

        bigImage.src = image.src;
        bigImage.style.maxWidth = "90%";
        bigImage.style.maxHeight = "90%";
        bigImage.style.borderRadius = "12px";

        overlay.appendChild(bigImage);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});

// ===============================
// Navbar Highlight on Hover
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.color = "#d40000";

    });

    link.addEventListener("mouseleave", () => {

        if (!link.classList.contains("active")) {

            link.style.color = "";

        }

    });

});

// ===============================
// Welcome Message
// ===============================

setTimeout(() => {

    console.log("🏎️ Welcome to Ferrari Showroom");

}, 1000);

// ===============================
// Disable Right Click (Optional)
// ===============================

// Uncomment if your project guide asks for it

/*
document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});
*/

// ===============================
// Keyboard Shortcut
// Press H = Go Home
// ===============================

document.addEventListener("keydown", function(e){

    if(e.key === "h" || e.key === "H"){

        window.location.href="index.html";

    }

});

// ===============================
// Scroll Progress Bar
// ===============================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#d40000";
progress.style.width = "0%";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

// ===============================
// Footer Message
// ===============================

console.log("Ferrari Showroom Website Ready ✅");

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for contacting Ferrari Showroom! We will get back to you soon.");

        contactForm.reset();
    });
}
// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });


    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

}

// ======================================
// MOBILE NAVIGATION
// ======================================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ======================================
// STICKY HEADER
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.10)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";
        header.style.background = "#ffffff";

    }

});

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

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

// ======================================
// ANIMATED COUNTERS
// ======================================

const counters = document.querySelectorAll(".counter-box h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = parseInt(counter.innerText);

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (count < target) {

                    count += increment;

                    if (counter.innerText.includes("%")) {

                        counter.innerText = Math.ceil(count) + "%";

                    } else {

                        counter.innerText = Math.ceil(count) + "+";

                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    if (counter.innerText.includes("%")) {

                        counter.innerText = target + "%";

                    } else {

                        counter.innerText = target + "+";

                    }

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ======================================
// CONTACT FORM VALIDATION
// ======================================

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const text = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {

        message.style.color = "red";
        message.textContent = "Please enter your name.";
        return;

    }

    if (!emailPattern.test(email)) {

        message.style.color = "red";
        message.textContent = "Please enter a valid email.";
        return;

    }

    if (subject === "") {

        message.style.color = "red";
        message.textContent = "Please enter the subject.";
        return;

    }

    if (text === "") {

        message.style.color = "red";
        message.textContent = "Please enter your message.";
        return;

    }

    message.style.color = "green";
    message.textContent = "✅ Message sent successfully!";

    form.reset();

});

// ======================================
// BACK TO TOP BUTTON
// ======================================

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 300) {

        backTop.style.opacity = "1";
        backTop.style.visibility = "visible";

    } else {

        backTop.style.opacity = "0";
        backTop.style.visibility = "hidden";

    }

});

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .about-content, .about-image, .service-card, .counter-box, .testimonial, .contact form"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

    revealObserver.observe(element);

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,
                behavior: "smooth"

            });

        }

    });

});

console.log("NorthPeak Digital Website Loaded Successfully 🚀");
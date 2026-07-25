/* ==========================================
   Eye Gallery Optics
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Sticky Navbar
    =============================== */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";
            navbar.style.background = "#ffffff";

        } else {

            navbar.style.boxShadow = "none";
            navbar.style.background = "#ffffff";

        }

    });

    /* ===============================
       Mobile Menu
    =============================== */

    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".desktop-menu");

    if (toggle && menu) {

        toggle.addEventListener("click", () => {

            menu.classList.toggle("mobile-open");

        });

    }

    /* ===============================
       Close Menu on Click
    =============================== */

    document.querySelectorAll(".desktop-menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("mobile-open");

        });

    });

    /* ===============================
       Smooth Scroll
    =============================== */

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

    /* ===============================
       Reveal Animation
    =============================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(
        ".feature,.service-card,.review-card,.gallery-grid img,.faq-item,.about,.contact"
    ).forEach(el => {

        el.classList.add("fade-up");

        observer.observe(el);

    });

    /* ===============================
       FAQ Accordion
    =============================== */

    document.querySelectorAll(".faq-item").forEach(item => {

        const answer = item.querySelector("p");

        if (!answer) return;

        answer.style.display = "none";

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            const visible = answer.style.display === "block";

            document.querySelectorAll(".faq-item p").forEach(p => {

                p.style.display = "none";

            });

            answer.style.display = visible ? "none" : "block";

        });

    });

    /* ===============================
       Gallery Lightbox
    =============================== */

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (galleryImages.length) {

        const overlay = document.createElement("div");

        overlay.id = "lightbox";

        overlay.style.cssText = `
            display:none;
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.92);
            justify-content:center;
            align-items:center;
            z-index:9999;
            padding:30px;
            cursor:pointer;
        `;

        const img = document.createElement("img");

        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "15px";
        img.style.boxShadow = "0 20px 50px rgba(0,0,0,.5)";

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        galleryImages.forEach(photo => {

            photo.addEventListener("click", () => {

                img.src = photo.src;

                overlay.style.display = "flex";

            });

        });

        overlay.addEventListener("click", () => {

            overlay.style.display = "none";

        });

    }

    /* ===============================
       Active Navigation
    =============================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".desktop-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (pageYOffset >= top) {

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

    /* ===============================
       Back To Top Button
    =============================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "topBtn";

    topBtn.style.cssText = `
        position:fixed;
        bottom:100px;
        right:25px;
        width:52px;
        height:52px;
        border:none;
        border-radius:50%;
        background:#0f4c81;
        color:#fff;
        font-size:22px;
        cursor:pointer;
        display:none;
        z-index:999;
        box-shadow:0 12px 30px rgba(0,0,0,.25);
    `;

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===============================
       Lazy Loading
    =============================== */

    document.querySelectorAll("img").forEach(img => {

        img.loading = "lazy";

    });

    /* ===============================
       Current Year
    =============================== */

    const year = new Date().getFullYear();

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            `© ${year} Eye Gallery Optics. All Rights Reserved.`;

    }

    console.log("Eye Gallery Optics Website Loaded");

});
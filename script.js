document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-button");

    // Scroll to section on nav-button click
    navLinks.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Add active class on scroll
    window.addEventListener("scroll", () => {
        const top = window.scrollY;

        sections.forEach(section => {
            const offset = section.offsetTop - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("data-target") === id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#555555";
        });
        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "";
        });
    });

    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("active");
        });
    });
});

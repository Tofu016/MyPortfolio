document.addEventListener("DOMContentLoaded", function () {
    const headerTitle = document.getElementById("header-title");
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionHeading = entry.target.querySelector("h2, h3, h4, h5");
                    if (sectionHeading) {
                        headerTitle.textContent = sectionHeading.textContent;
                    }
                }
            });
        },
        { rootMargin: "-50px 0px -70% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});
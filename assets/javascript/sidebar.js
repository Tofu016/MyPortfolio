document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-btn");

    sidebar.classList.add("closed");

    toggleButton.style.left = "20px";

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("closed");

        if (sidebar.classList.contains("closed")) {
            toggleButton.style.left = "20px";
        } else {
            toggleButton.style.left = "260px";
        }
    });
});

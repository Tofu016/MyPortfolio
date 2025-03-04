document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-btn");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("closed");

            // Move the button when sidebar toggles
            if (sidebar.classList.contains("closed")) {
                toggleButton.style.left = "20px";
            } else {
                toggleButton.style.left = "260px";
            }
        });
    } else {
        console.error("Toggle button not found!");
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();

    if (!name || !email || !subject) {
        alert("Please fill out all fields.");
        return;
    }

    let recipient = "cristopherpondoc047@gmail.com";

    let mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(subject)}`;

    console.log("Opening email client:", mailtoLink);

    window.location.href = mailtoLink;
});
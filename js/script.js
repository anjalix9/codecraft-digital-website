document.getElementById("contactForm")?.addEventListener("submit", function(e) {

    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    } else {
        alert("Message sent successfully!");
    }

});
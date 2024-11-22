document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting me, " + name + "!");
        // Optionally, you could send the form data to a server here using fetch or XMLHttpRequest.
    } else {
        alert("Please fill in all fields.");
    }
});

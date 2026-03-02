document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault(); // form submit थांबवतो

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    successMessage.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    // Email validation using regex
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Enter valid email";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.innerText = "Message is required";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerText = "Form submitted successfully!";
    }

});
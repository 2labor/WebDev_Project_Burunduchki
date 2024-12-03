function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phonenum = document.getElementById("phonenum").value.trim();
    let message = document.getElementById("message").value.trim();

    // error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phonenumError = document.getElementById("phonenumError");
    let messageError = document.getElementById("messageError");

    // clears past error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phonenumError.textContent = "";
    messageError.textContent = "";

    // validation element
    let isValid = true;

    // name validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        nameError.setAttribute("aria-live", "assertive");
        isValid = false;
    } else if (name.length < 2) {
        nameError.textContent = "Name must be at least 2 characters long.";
        nameError.setAttribute("aria-live", "assertive");
        isValid = false;
    }

    // email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.setAttribute("aria-live", "assertive");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.setAttribute("aria-live", "assertive");
        isValid = false;
    }

    // phonenum validation
    let phoneRegex = /^\d{8,15}$/;
    if (phonenum === "") {
        phonenumError.textContent = "Phone number is required.";
        phonenumError.setAttribute("aria-live", "assertive");
        isValid = false;
    } else if (!phoneRegex.test(phonenum)) {
        phonenumError.textContent = "Please enter a valid phone number (8-15 digits).";
        phonenumError.setAttribute("aria-live", "assertive");
        isValid = false;
    }

    // message validation
    if (message === "") {
        messageError.textContent = "Message is required.";
        messageError.setAttribute("aria-live", "assertive");
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        messageError.setAttribute("aria-live", "assertive");
        isValid = false;
    }

    // focus on the first invalid field
    if (!isValid) {
        if (nameError.textContent) {
            document.getElementById("name").focus();
        } else if (emailError.textContent) {
            document.getElementById("email").focus();
        } else if (phonenumError.textContent) {
            document.getElementById("phonenum").focus();
        } else if (messageError.textContent) {
            document.getElementById("message").focus();
        }
    }

    return isValid;
}
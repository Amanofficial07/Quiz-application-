document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const phoneError = document.getElementById("phoneError");
    const dobError = document.getElementById("dobError");
    const genderError = document.getElementById("genderError");
    const addressError = document.getElementById("addressError");

    let isValid = true;

    // Validate Name
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Password
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Validate Date of Birth
    if (dob === "") {
        dobError.textContent = "Date of birth is required.";
        isValid = false;
    } else {
        dobError.textContent = "";
    }

    // Validate Gender
    if (gender === "") {
        genderError.textContent = "Please select your gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    // Validate Address
    if (address === "") {
        addressError.textContent = "Address is required.";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    if (isValid) {
        alert("Registration successful!");
        // Add redirection logic here
    }
});

// Password Strength Indicator
document.getElementById("password").addEventListener("input", function () {
    const passwordStrength = document.getElementById("passwordStrength");
    const password = this.value;

    let strength = "Weak";
    let strengthClass = "text-danger";

    if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
        strength = "Strong";
        strengthClass = "text-success";
    } else if (password.length >= 6) {
        strength = "Moderate";
        strengthClass = "text-warning";
    }

    passwordStrength.textContent = `Password Strength: ${strength}`;
    passwordStrength.className = strengthClass;
});

document.addEventListener("DOMContentLoaded", () => {
    // Form Validation
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent form submission
            validateForm(form);
        });
    });

    // Validate Individual Form
    function validateForm(form) {
        const inputs = form.querySelectorAll(".form-control");
        let isValid = true;

        inputs.forEach(input => {
            const inputType = input.getAttribute("type");
            const value = input.value.trim();

            // Clear previous error messages
            clearError(input);

            // Required field validation
            if (input.hasAttribute("required") && value === "") {
                showError(input, `${getLabel(input)} is required.`);
                isValid = false;
            } else if (inputType === "email" && !validateEmail(value)) {
                // Email validation
                showError(input, "Please enter a valid email address.");
                isValid = false;
            } else if (inputType === "password") {
                // Password strength validation
                const strengthMessage = validatePassword(value);
                if (strengthMessage) {
                    showError(input, strengthMessage);
                    isValid = false;
                }
            } else if (input.id === "confirmPassword") {
                // Confirm password validation
                const password = document.getElementById("password").value.trim();
                if (value !== password) {
                    showError(input, "Passwords do not match.");
                    isValid = false;
                }
            } else {
                showSuccess(input);
            }
        });

        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    }

    // Email Validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password Validation
    function validatePassword(password) {
        if (password.length < 8) {
            return "Password must be at least 8 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must include at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must include at least one lowercase letter.";
        }
        if (!/[0-9]/.test(password)) {
            return "Password must include at least one number.";
        }
        return null;
    }

    // Show Error Message
    function showError(input, message) {
        const parent = input.parentElement;
        parent.classList.add("has-error");
        const errorElement = document.createElement("div");
        errorElement.className = "error-message text-danger";
        errorElement.innerText = message;
        parent.appendChild(errorElement);
    }

    // Clear Error Message
    function clearError(input) {
        const parent = input.parentElement;
        parent.classList.remove("has-error");
        const errorElement = parent.querySelector(".error-message");
        if (errorElement) {
            parent.removeChild(errorElement);
        }
    }

    // Show Success
    function showSuccess(input) {
        clearError(input);
        input.classList.add("is-valid");
    }

    // Get Field Label for Error Messages
    function getLabel(input) {
        const label = input.previousElementSibling;
        return label ? label.innerText : "Field";
    }
});
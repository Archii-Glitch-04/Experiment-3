function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Check if any field is empty
    if (!username || !email || !phone || !password || !confirmPassword) {
        alert("All fields must be filled.");
        return false;
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    // Validate password (at least 7 characters, 1 uppercase, 1 digit, 1 special char)
    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[&,$,#@]).{7,}/.test(password)) {
        alert("Password must be at least 7 characters long, with 1 uppercase letter, 1 digit, and 1 special character.");
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords must match.");
        return false;
    }

    // Validate email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,3}$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

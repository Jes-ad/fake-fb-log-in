document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        alert("Login Attempt:\nEmail: " + email + "\nPassword: " + password);
    } else {
        alert("Please enter both email and password.");
    }
});

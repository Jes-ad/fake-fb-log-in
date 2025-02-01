document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get email and password from input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would normally send data to a backend server
    // For the purpose of this mock-up, we'll simply show it in the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Store data (for educational purposes only, no real storage here)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Simulate login success
    if (email && password) {
        alert('Logged in successfully!');
        window.location.href = 'welcome.html'; // Redirect to another page (e.g., a "Welcome" page)
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid email or password';
    }
});

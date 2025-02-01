document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('errorMessage');

            // Clear previous error messages
            errorMessage.textContent = '';

            if (email === '' || password === '') {
                errorMessage.textContent = 'Please enter both email and password';
                return;
            }

            // Save login data (for educational purposes only)
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            console.log('Email:', email);
            console.log('Password:', password);

            // Simulate successful login
            alert('Logged in successfully!');
            window.location.href = 'welcome.html'; // Redirect to another page
        });
    }
});

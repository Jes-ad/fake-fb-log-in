document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.createElement('p');
            errorMessage.style.color = 'red';
            errorMessage.style.fontSize = '14px';
            errorMessage.style.marginTop = '10px';

            // Clear previous error messages
            if (document.querySelector('.error-message')) {
                document.querySelector('.error-message').remove();
            }

            if (email === '' || password === '') {
                errorMessage.textContent = 'Please enter both email and password.';
                errorMessage.classList.add('error-message');
                loginForm.appendChild(errorMessage);
                return;
            }

            // Simulate successful login
            alert('Logged in successfully!');
            window.location.href = 'welcome.html'; // Redirect to another page
        });
    }
});

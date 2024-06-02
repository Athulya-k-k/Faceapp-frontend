document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        password: document.getElementById('password').value,
        confirm_password: document.getElementById('confirmPassword').value
    };
    fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            alert('User registered successfully');
        } else {
            alert('Error: ' + JSON.stringify(data));
        }
    })
    .catch(error => console.error('Error:', error));
});

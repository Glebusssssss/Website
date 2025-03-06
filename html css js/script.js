// Contact form validation and submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('feedback').textContent = "Please fill out all fields.";
        document.getElementById('feedback').style.color = 'red';
    } else {
        document.getElementById('feedback').textContent = "Thank you for your message!";
        document.getElementById('feedback').style.color = 'green';
    }
});

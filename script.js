// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

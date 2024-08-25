// scripts.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Display a message to the user (you could also send this data to a server)
    alert(`Thank you, ${name}. Your message has been received!`);

    // Clear form fields
    document.getElementById('contactForm').reset();
});

// Toggle navigation menu on small screens
document.querySelector('.toggle_button').addEventListener('click', () => {
    const navLinks = document.querySelector('.right ul');
    navLinks.classList.toggle('active');
});

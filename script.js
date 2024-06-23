// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add an event listener for the form submission
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Fetch the form input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Check if any of the fields are empty
        if (name === '' || email === '' || message === '') {
            // Display an alert if any field is empty
            alert('Please fill in all fields.');
            return; // Exit the function early
        }

        // If all fields are filled, simulate form submission (replace with actual logic)
        // For example, you could send data to a server using fetch or XMLHttpRequest
        // Here, we'll just log the values to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optionally, reset the form after submission
        contactForm.reset();

        // Display a success message (you can replace this with your own confirmation)
        alert('Form submitted successfully!');
    });
});

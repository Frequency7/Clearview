// Function to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to your server or an API
    // For demonstration, we will log it and show a success message
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Simulating a successful message response
    const contactMessage = document.getElementById('contact-message');
    contactMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Reset form fields
    document.getElementById('contact-form').reset();
});

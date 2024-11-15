document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const frequency = document.getElementById('frequency').value;

    if (name && email && frequency) {
        document.getElementById('response-message').textContent = `Thank you for subscribing, ${name}! You'll receive our newsletter ${frequency}.`;
        document.getElementById('response-message').style.color = 'green';
        document.getElementById('newsletter-form').reset(); // Reset form fields
    } else {
        document.getElementById('response-message').textContent = 'Please fill in all fields.';
        document.getElementById('response-message').style.color = 'red';
    }
});

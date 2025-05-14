// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission message
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from actually submitting

    alert('Thank you for contacting me!');
    
    // Optionally clear the form fields
    this.reset();
});

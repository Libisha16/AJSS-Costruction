
    // Get the form element
    const form = document.getElementById('submitForm');

    // Add event listener to the form submit event
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Redirect to the home page
        window.location.href = 'index.html';
    });

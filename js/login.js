document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('not-a-robot');
    const submitButton = document.querySelector('button[type="submit"]');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    });

    // Initially disable the submit button
    submitButton.setAttribute('disabled', 'disabled');
});
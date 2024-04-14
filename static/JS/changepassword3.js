document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.onsubmit = function(e) {
        // Prevent form submission to demonstrate validation
        e.preventDefault();

        var newPassword = document.getElementById('new-password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        var errorElement = document.getElementById('Error');
        errorElement.textContent = ''; // Clear previous errors

        // Validate new password
        if (newPassword === "") {
            errorElement.textContent = 'New password cannot be empty.';
            return false;
        } else if (newPassword.length < 8) {
            errorElement.textContent = 'New password should be at least 8 characters long.';
            return false;
        }

        // Validate confirm password
        if (confirmPassword === "") {
            errorElement.textContent = 'Confirm password cannot be empty.';
            return false;
        } else if (confirmPassword.length < 8) {
            errorElement.textContent = 'Confirm password should be at least 8 characters long.';
            return false;
        }

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            errorElement.textContent = 'Passwords do not match.';
            return false;
        }

        // You need to implement a way to check the previous password.
        // This is just a placeholder for demonstration purposes.
        var previousPassword = 'oldPassword'; // Replace with the actual previous password.

        if (newPassword === previousPassword) {
            errorElement.textContent = 'Your new password must be different from the previously used password.';
            return false;
        }

        // If all validations pass, you can submit the form
        console.log('Form is valid. Submitting...');
        // form.submit(); // Uncomment this to allow form submission
    };
});

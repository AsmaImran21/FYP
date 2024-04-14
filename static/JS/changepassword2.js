function validateForm() {
    let inputs = document.querySelectorAll('.input-box input[type="text"]');
    let errorElement = document.getElementById('Error');
    let code = '';

    // Clear any existing error message.
    errorElement.textContent = '';

    // Check each input field for a single digit.
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length !== 1 || !inputs[i].value.match(/^\d$/)) {
            // If a field doesn't have exactly one digit, display an error and prevent form submission.
            errorElement.textContent = 'Each box must contain exactly one digit.';
            return false;
        }
        // Build the code from the input values.
        code += inputs[i].value;
    }

 

    // If we reach here, all fields are valid.
    return true;
}


// Add input event listeners to each field for instant feedback/validation.
document.querySelectorAll('.input-box input[type="text"]').forEach((input, idx, arr) => {
    input.addEventListener('input', () => {
        // Allow only digits.
        input.value = input.value.replace(/[^\d]/g, '');

        // Move to next field if this one is filled.
        if (input.value.length === 1 && idx < arr.length - 1) {
            arr[idx + 1].focus();
        }

        // Move to previous field if this one is cleared.
        if (input.value.length === 0 && idx > 0) {
            arr[idx - 1].focus();
        }
    });
});

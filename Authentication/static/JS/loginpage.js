

//validate Signup function
function validateSignup() {
    let flag = 1;

    // Add radio button selection check and redirection here
    // Assuming you have the radio buttons with ids 'student', 'pmo', 'admin'
    if (document.getElementById("student").checked) {
        window.location.href = "/Authentication/signup-student"; // Redirect to Student page
    } else if (document.getElementById("pmo").checked) {
        window.location.href = "/Authentication/signup-adminpmo"; // Redirect to PMO page
    } else if (document.getElementById("admin").checked) {
        window.location.href = "/adminPmoSignup"; // Redirect to Admin page
    } else {
        // If no radio button is selected, show an error and prevent form submission
        document.getElementById("radioError").innerText = "Please select a signup mode.";
        return false;
    }

    // Since we're manually handling redirection, prevent the default form submission
    return false;
}


const cnic = document.getElementById("cnic");
const password = document.getElementById("password");

function validateLogin() {
    let flag = 1;
   
    // Check for CNIC validation
    if (cnic.value.trim() === "") {
        document.getElementById("cnicError").innerHTML = "CNIC cannot be empty";
        flag = 0;
    } else if (cnic.value.length !== 13 || isNaN(cnic.value)) {
        document.getElementById("cnicError").innerHTML = "CNIC must contain exactly 13 numbers";
        flag = 0;
    } else {
        document.getElementById("cnicError").innerHTML = "";
    }

    // Validate password
    if (password.value === "") {
        document.getElementById("passError").innerHTML = "Password cannot be empty";
        flag = 0;
    } else if (password.value.length < 8) {
        document.getElementById("passError").innerHTML = "Password should be at least 8 characters, long";
        flag = 0;
    } else {
        document.getElementById("passError").innerHTML = "";
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
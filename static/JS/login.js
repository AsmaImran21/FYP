const cnic = document.getElementById("cnic");

//validate Signup function
function validateSignup() {
    let flag = 1;
    // Existing CNIC validation code remains unchanged

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

    // If validation fails, stop the function
    if (!flag) {
        return false;
    }

    // Add radio button selection check and redirection here
    // Assuming you have the radio buttons with ids 'student', 'pmo', 'admin'
    if (document.getElementById("student").checked) {
        window.location.href = "/studentSignup"; // Redirect to Student page
    } else if (document.getElementById("pmo").checked) {
        window.location.href = "/adminPmoSignup"; // Redirect to PMO page
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


const username = document.getElementById("username");
const password = document.getElementById("password");

function validateLogin(){
    let flag = 1;
    // validate username
    if (username.value.trim() === "") {
        document.getElementById("usernameError").innerHTML = "Username cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of username.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'))) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || username.value.length < 3) {
            document.getElementById("usernameError").innerHTML = "Username should contain at least 3 char";
            flag = 0;
        }
        else {
            document.getElementById("usernameError").innerHTML = " ";
        }
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

    if(flag){
        return true;
    }
    else{
        return false;
    }
}
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const qualification = document.getElementById("qualification");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validateForm() {
    let flag = 1;
    // validate firstName
    if (firstName.value === "") {
        document.getElementById("fError").innerHTML = "First Name cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of firstName.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " ")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || firstName.value.length < 6) {
            document.getElementById("fError").innerHTML = "First Name should contain at least 6 letters and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("fError").innerHTML = " ";
        }
    }

    // validate lastName
    if (lastName.value === "") {
        document.getElementById("lError").innerHTML = "Last Name cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of lastName.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " ")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || lastName.value.length < 6) {
            document.getElementById("lError").innerHTML = "Last Name should contain at least 6 letters and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("lError").innerHTML = " ";
        }
    }
    //validate email
    const emailValue = email.value.trim();

    if (emailValue === "") {
        document.getElementById("emailError").innerHTML = "Email cannot be empty";
        flag = 0;
    }
    else {
        const atIndex = emailValue.indexOf("@");
        const dotIndex = emailValue.lastIndexOf(".");
        if (atIndex < 1 || dotIndex < atIndex + 2) {
            document.getElementById("emailError").innerHTML = "Invalid email format";
            flag = 0;
        }
        else {
            document.getElementById("emailError").innerHTML = " ";
        }
    }
    //validate qualification
    if (qualification.value === "") {
        document.getElementById("qError").innerHTML = "Qualification cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of qualification.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " " || char === "," || char === "-")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || qualification.value.length < 3) {
            document.getElementById("qError").innerHTML = "Qualification should contain at least 3 letters, comma and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("qError").innerHTML = " ";
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

    // Validate confirm password
    if (confirmPassword.value === "") {
        document.getElementById("cpassError").innerHTML = "Confirm Password cannot be empty";
        flag = 0;
    } else if (confirmPassword.value !== password.value) {
        document.getElementById("cpassError").innerHTML = "Passwords do not match";
        flag = 0;
    } else {
        document.getElementById("cpassError").innerHTML = "";
    }
    //validate gender
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const otherRadio = document.getElementById("other");

    if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
        document.getElementById("radioError").innerHTML = "Please select a gender";
        flag = 0;
    } else {
        document.getElementById("radioError").innerHTML = ""; // Clear any previous error message
    }


    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
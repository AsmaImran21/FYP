const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const qualification = document.getElementById("qualification");
const cnic = document.getElementById("cnic");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Get the image element and hidden file input element
let profilePic = document.getElementById("profile-pic");
let profileInput = document.getElementById("profile-input");

// Add click event listener to the image
profilePic.addEventListener("click", function () {
    // Trigger click event of the hidden file input
    profileInput.click();
});

// Update the image source when a file is selected
profileInput.addEventListener("change", function () {
    if (profileInput.files && profileInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(profileInput.files[0]);
    }
});
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
        if (containSpecialChar || firstName.value.length < 3) {
            document.getElementById("fError").innerHTML = "First Name should contain at least 3 letters and spaces only";
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
        if (containSpecialChar || lastName.value.length < 3) {
            document.getElementById("lError").innerHTML = "Last Name should contain at least 3 letters and spaces only";
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

     //country validation
     if (country.value === "") {
        document.getElementById("countryError").innerHTML = "Country cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of country.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " ")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || country.value.length < 3) {
            document.getElementById("countryError").innerHTML = "Country should contain at least 3 letters and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("countryError").innerHTML = " ";
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

    //validate contact number
    const contactNumber = document.getElementById("contactnumber");
    const contactError = document.getElementById("contactError");

    if (contactNumber.value === "") {
        contactError.innerHTML = "Contact Number cannot be empty";
        flag = 0;
    } 
    else {
        const contactRegex = /^[0-9]{10,15}$/; // Regular expression to match numbers with length between 10 and 15 digits
        if (!contactRegex.test(contactNumber.value)) {
            contactError.innerHTML = "Invalid contact number format. It must be 10 to 15 digits long and contain only numbers.";
            flag = 0;
        } else {
            contactError.innerHTML = ""; // Clear error message if the contact number is valid
        }
    }

    //validate description
    const description = document.getElementById("description");
    const desError = document.getElementById("desError");
    if(description.value === ""){
        desError.innerHTML = "Description cannot be empty";
        flag=0;
    }
    else if (description.value.trim().length < 25) {
        desError.innerText = "Description must be at least 25 characters long.";
        flag = 0;
    }
    else{
        desError.innerHTML = "";
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }
}//jsfile
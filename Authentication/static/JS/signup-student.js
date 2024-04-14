const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const cnic = document.getElementById("cnic");
const instituteName = document.getElementById("instituteName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const qualification = document.getElementById("qualification");
const cgpa = document.getElementById("cgpa");

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

    // validate instituteName
    if (instituteName.value === "") {
        document.getElementById("instituteError").innerHTML = "Institute Name cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of instituteName.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " " || char === ",")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || instituteName.value.length < 6) {
            document.getElementById("instituteError").innerHTML = "Last Name should contain at least 6 letters, comma and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("instituteError").innerHTML = " ";
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
    //validate cgpa
    if (cgpa.value === "") {
        document.getElementById("cgpaError").innerHTML = "CGPA cannot be empty";
        flag = 0;
    } else {
        const cgpaValue = parseFloat(cgpa.value);
        // Check if the CGPA is a number and within the valid range
        if (isNaN(cgpaValue) || cgpaValue < 0 || cgpaValue > 4) {
            document.getElementById("cgpaError").innerHTML = "Invalid CGPA value. CGPA should be between 0.00 and 4.00";
            flag = 0;
        } else {
            document.getElementById("cgpaError").innerHTML = "";
        }
    }
    //validate contact number
    const contactNumber = document.getElementById("contactnumber");
    const contactError = document.getElementById("contactError");

    if (contactNumber.value === "") {
        contactError.innerHTML = "Contact Number cannot be empty";
        flag = 0;
    } else {
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
    //validate skills
    const skills = document.querySelectorAll('.skill-field');
    const skillsError = document.getElementById("skillsError");

    skills.forEach(skill => {
        const skillInput = skill.querySelector('.skill');
        const percentageInput = skill.querySelector('.percentage');
        const percentagePattern = /^(100|[1-9]?[0-9])%?$/;

        if (!skillInput.value.trim() || !percentageInput.value.trim() || !percentagePattern.test(percentageInput.value)) {
            skillsError.innerText = 'Please fill in both skill and percentage fields correctly for all entries.';
            flag = 0;
        }
        else{
            skillsError.innerText = "";
        }
    })


    if (flag) {
        return true;
    }
    else {
        return false;
    }
}//jsfile

    
// Dynamically add skill fields
document.getElementById('addSkill').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    const skillsContainer = document.getElementById('skillsFields');
    const newSkillField = document.createElement('div');
    newSkillField.classList.add('skill-field');
    newSkillField.innerHTML = `
        <input type="text" class="skill" name="skill[]" placeholder="Skill">
        <input type="text" class="percentage" name="percentage[]" placeholder="Percentage">
        <a href="#" class="remove-skill">-</a>
    `;

    // Append the new skill field to the container
    skillsContainer.appendChild(newSkillField);
});
// Remove a skill field
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-skill')) {
        e.preventDefault();

        const fieldToBeRemoved = e.target.parentNode;
        const container = fieldToBeRemoved.parentNode;
        if (container.children.length > 1) {
            container.removeChild(fieldToBeRemoved);
        } else {
            alert("At least one skill is required.");
        }
    }
});
//dd
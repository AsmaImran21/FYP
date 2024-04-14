



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
//Css
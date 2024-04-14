const cnic = document.getElementById("cnic");

//validate adduser function
function validateAdduser() {
    let flag = 1;
    // Validate CNIC
    if (cnic.value.trim() === "") {
        document.getElementById("cnicError").innerHTML = "CNIC cannot be empty";
        flag = 0;
    } else if (cnic.value.length !== 13 || isNaN(cnic.value)) {
        document.getElementById("cnicError").innerHTML = "CNIC must contain exactly 13 numbers";
        flag = 0;
    } else {
        document.getElementById("cnicError").innerHTML = "";
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
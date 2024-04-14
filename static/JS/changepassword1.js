const email = document.getElementById("email");

function validateForm(){
    let flag=1;
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
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
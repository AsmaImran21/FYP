const username = document.getElementById("username");
const category = document.getElementById("category");
const priority = document.getElementById("priority");
const description = document.getElementById("description");

//validate username
function validateForm() {
    let flag = 1;
    // validate projectcategory
    if(category.value===""){
        document.getElementById("cError").innerHTML = "Please select a category";
        flag=0;
    }
    else{
        document.getElementById("cError").innerHTML=" ";
    }
    //validate priority
    if(priority.value===""){
        document.getElementById("pError").innerHTML = "Please select a priority";
        flag=0;
    }
    else{
        document.getElementById("pError").innerHTML=" ";
    }

    //validate description
    if(description.value===""){
        document.getElementById("desError").innerHTML = "Description cannot be empty";
        flag=0;
    }
    else if (description.value.length < 25) {
        document.getElementById("desError").innerHTML = "Description required min 25 character";
        flag = 0;
    }
    else {
        document.getElementById("desError").innerHTML = " ";
    }


    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
const title = document.getElementById("title");
const description = document.getElementById("description");
const date = document.getElementById("date");
const time = document.getElementById("time");
const loc = document.getElementById("location");
const fileInput = document.getElementById("upload");
let flag = 1;

function validateForm() {
    //validate title
    if (title.value === "") {
        document.getElementById("titleError").innerHTML = "Title cannot be empty";
        flag = 0;
    }
    else{
        let containSpecialChar = false;
        for(let char of title.value){
            if(!((char>='a' && char<='z') ||(char>='A' && char<='Z')|| char===" ")) {
                containSpecialChar = true;
                break;
            }
        }
        if(containSpecialChar || title.value.length < 6){
            document.getElementById("titleError").innerHTML = "Invalid title. Title should contain at least 6 letters and spaces only";
            flag = 0;
        }
        else{
            document.getElementById("titleError").innerHTML = " ";
            flag = 1;
        }
    }
  
    // validate description
    if (description.value === "") {
        document.getElementById("desError").innerHTML = "Description cannot be empty";
        flag = 0;
    }
    else if (description.value.length < 25) {
        document.getElementById("desError").innerHTML = "Description required min 25 char";
        flag = 0;

    }
    else {
        document.getElementById("desError").innerHTML = " ";
        flag = 1;
    }

    //validate date
    const selectedDate = date.value;
    const currentDate = new Date();
    if (selectedDate === "") {
        document.getElementById("dateError").innerHTML = "Please select a Date";
        flag = 0;
    }
    else if (new Date(selectedDate) < currentDate) {
        document.getElementById("dateError").innerHTML = "Please select a Date in the future";
        flag = 0;
    }
    else {
        document.getElementById("dateError").innerHTML = " ";
        flag = 1;
    }
    //validate time
    const selectedTime = time.value;

    if (selectedTime === "") {
        document.getElementById("timeError").innerHTML = "Please select a time";
        flag = 0;
    }
    else {
        document.getElementById("timeError").innerHTML = " ";
        flag = 1;
    }

    //validate location
    if (loc.value === "") {
        document.getElementById("locError").innerHTML = "Location cannot be empty";
        flag = 0;
    }
    else{
        let containSpecialChar = false;
        for(let char of loc.value){
            if(!((char>='a' && char<='z') ||(char>='A' && char<='Z')||(char>='0' && char<='9')|| char===" "|| char===","||char==="-"|| char==="/")) {
                containSpecialChar = true;
                break;
            }
        }
        if(containSpecialChar || loc.value.length < 10){
            document.getElementById("locError").innerHTML = "Location should contain at least 10 letters,numbers and spaces only";
            flag = 0;
        }
        else{
            document.getElementById("locError").innerHTML = " ";
            flag = 1;
        }

    }

    //validate file
    const file = fileInput.files[0]; // Get the first file selected by the user (if any)
    const ext = ['.jpg', '.png', '.jpeg', '.gif'];

    if (!file) {
        document.getElementById("fileError").innerHTML = "Please select any image";
        flag = 0;
    } else {
        const file_ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase(); // Extract the file extension and convert it to lowercase
        const f_size = file.size; // Get the file size directly in bytes
        const f_KB = Math.round(f_size / 1024); // Convert file size to KB

        if (ext.includes(file_ext)) {
            if (f_KB <= 2048) {
                document.getElementById("fileError").innerHTML = ""; // Clear error message if both extension and size are valid
                flag = 1;
            } else {
                document.getElementById("fileError").innerHTML = "Please select an image less than 2MB";
                flag = 0;
            }
        } else {
            document.getElementById("fileError").innerHTML = "Invalid file format. Please select only " + ext.join(', ') + " files";
            flag = 0;
        }
    }

    if (url.value === "") {
        document.getElementById("urlError").innerHTML = "URL cannot be empty";
        flag = false;
    } else if (!isValidURL(url.value)) {
        document.getElementById("urlError").innerHTML = "Invalid URL format";
        flag = false;
    } else {
        document.getElementById("urlError").innerHTML = "";
    }

    if(flag){
        return true;
    }
    else{
        return false;
    }
    

} 

function isValidURL(url) {
    // Regular expression for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}
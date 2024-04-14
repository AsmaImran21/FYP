const booklet = document.getElementById("booklet");
const code = document.getElementById("code");
const multimedia = document.getElementById("multimedia");

function validateForm() {
    let flag = true; // Initialize flag to true

    // Validate booklet
    const bookletInput = booklet.files[0];
    const bookletExt = ['.pdf', '.docx'];

    if (!bookletInput) {
        document.getElementById("bookletError").innerHTML = "Please select any file";
        flag = false; // Set flag to false if booklet file is not selected
    } else {
        const b_ext = bookletInput.name.substring(bookletInput.name.lastIndexOf('.')).toLowerCase();
        if (!bookletExt.includes(b_ext)) {
            document.getElementById("bookletError").innerHTML = "Invalid file format. Please select only " + bookletExt.join(', ') + " files";
            flag = false; // Set flag to false if booklet file format is invalid
        } else {
            document.getElementById("bookletError").innerHTML = ""; // Clear error message if booklet file is valid
        }
    }

    // Validate code
    const codeInput = code.files[0];
    const codeExt = ['.zip', '.rar'];

    if (!codeInput) {
        document.getElementById("codeError").innerHTML = "Please select any file";
        flag = false; // Set flag to false if code file is not selected
    } else {
        const c_ext = codeInput.name.substring(codeInput.name.lastIndexOf('.')).toLowerCase();
        if (!codeExt.includes(c_ext)) {
            document.getElementById("codeError").innerHTML = "Invalid file format. Please select only " + codeExt.join(', ') + " files";
            flag = false; // Set flag to false if code file format is invalid
        } else {
            document.getElementById("codeError").innerHTML = ""; // Clear error message if code file is valid
        }
    }

    // Validate multimedia
    const multimediaInput = multimedia.files;

    if (multimediaInput.length === 0) {
        document.getElementById("multimediaError").innerHTML = "Please select at least one file";
        flag = false; // Set flag to false if no multimedia file is selected
    } else {
        const multimediaExt = ['.png', '.jpg', '.jpeg', '.gif'];
        for (let i = 0; i < multimediaInput.length; i++) {
            const mExt = multimediaInput[i].name.substring(multimediaInput[i].name.lastIndexOf('.')).toLowerCase();
            if (!multimediaExt.includes(mExt)) {
                document.getElementById("multimediaError").innerHTML = "Invalid file format. Please select only " + multimediaExt.join(', ') + " files";
                flag = false; // Set flag to false if any multimedia file format is invalid
                break; // Exit the loop if an invalid file format is found
            }
        }
        if (flag) {
            document.getElementById("multimediaError").innerHTML = ""; // Clear error message if all multimedia files are valid
        }
    }

    return flag; // Return flag indicating whether the form is valid or not
}

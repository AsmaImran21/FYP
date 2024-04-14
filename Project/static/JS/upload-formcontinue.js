// JavaScript for validation

// Function to validate form
function validateForm() {
    // Reset error messages
    resetErrors();

    // Validate technologies
    if (!validateTechnologies()) {
        return false;
    }

    //Validate result card
    if (!validateResultcard()) {
        return false;
    }

    // Validate booklet
    if (!validateBooklet()) {
        return false;
    }

    // Validate GitHub URL
    if (!validateGithubURL()) {
        return false;
    }

    // Validate multimedia (images)
    if (!validateMultimedia()) {
        return false;
    }

    // Validate videos
    if (!validateVideo()) {
        return false;
    }


    // If all validations pass, return true
    return true;
}

// Function to reset error messages
function resetErrors() {
    document.getElementById('technologiesError').innerText = '';
    document.getElementById('resultcardError').innerText = '';
    document.getElementById('bookletError').innerText = '';
    document.getElementById('codeError').innerText = '';
    document.getElementById('multimediaError').innerText = '';
    document.getElementById('videoError').innerText = '';
}


// Function to validate technologies
function validateTechnologies() {
    var technologies = document.querySelectorAll('.technology-field');
    var allValid = true; // Assume all are valid initially

    for (let i = 0; i < technologies.length; i++) {
        var techInput = technologies[i].querySelector('.technology');
        var versionInput = technologies[i].querySelector('.version');
        var techValue = techInput.value.trim();
        var versionValue = versionInput.value.trim();

        // Check if both the technology and version fields are filled out
        if (techValue === '' || versionValue === '') {
            document.getElementById('technologiesError').innerText = 'Please fill in both technology and version fields for all entries.';
            allValid = false; // Mark as invalid
            break; // Exit loop on first invalid pair
        }
    }

    return allValid; // Return the overall validity status
}

//result card
function validateResultcard() {
    var resultCard = document.getElementById('resultcard');
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    // Check if any file is selected
    if (resultCard.files.length === 0) {
        document.getElementById('resultcardError').innerText = 'Please upload a result card.';
        return false;
    }

    var file = resultCard.files[0];

    // Validate file extension
    if (!allowedExtensions.exec(file.name)) {
        document.getElementById('resultcardError').innerText = 'Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.';
        return false;
    }

    // Validate file size (2MB limit)
    if (file.size > 2097152) {
        document.getElementById('resultcardError').innerText = 'File size must be less than 2MB.';
        return false;
    }

    // If validation passes, clear any previous error message
    document.getElementById('resultcardError').innerText = '';
    return true;
}


// Function to validate booklet
function validateBooklet() {
    var booklet = document.getElementById('booklet').value.trim();
    if (booklet === '') {
        document.getElementById('bookletError').innerText = 'Please upload a booklet.';
        return false;
    } else if (!/\.(pdf)$/i.test(booklet)) {
        document.getElementById('bookletError').innerText = 'Booklet must be in PDF format.';
        return false;
    }
    return true;
}
//for githubURL
function validateGithubURL() {
    var githubURL = document.getElementById('githuburl').value.trim(); 
    if (githubURL !== '') {
        if (!/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(githubURL)) {
            document.getElementById('codeError').innerText = 'Invalid GitHub URL format.';
            return false;
        }
    } else {
        document.getElementById('codeError').innerText = 'GitHub URL is required.';
        return false;
    }
    return true;
}

// Function to validate video
function validateVideo() {
    var videoInput = document.getElementById('video');
    var videoFile = videoInput.files[0];

    // Check if a file is selected
    if (videoFile) {
        // Get the file extension
        var fileExtension = videoFile.name.split('.').pop().toLowerCase();

        // Allowed video formats
        var allowedFormats = ['mp4', 'mov', 'avi', 'flv', 'wmv'];

        // Check if the file extension is in the allowed formats
        if (allowedFormats.indexOf(fileExtension) === -1) {
            document.getElementById('videoError').innerText = 'Video must be in MP4, MOV, AVI, FLV, or WMV format.';
            return false;
        }
    }

    return true;
}
function validateMultimedia() {
    var multimediaInputs = document.querySelectorAll('.multimedia-field input[type="file"]');
    var hasMultimedia = false;

    for (var i = 0; i < multimediaInputs.length; i++) {
        var multimedia = multimediaInputs[i].value.trim();
        if (multimedia !== '') {
            hasMultimedia = true;
            if (!/\.(jpg|jpeg|png|gif)$/i.test(multimedia)) {
                document.getElementById('multimediaError').innerText = 'Images must be in JPG, JPEG, PNG, or GIF format.';
                return false;
            }
        }
    }

    if (!hasMultimedia) {
        document.getElementById('multimediaError').innerText = 'Please upload at least one image.';
        return false;
    }

    return true;
}

// Add More and Remove buttons for Technologies
document.getElementById('addTechnology').addEventListener('click', function (e) {
    e.preventDefault();
    var technologiesFields = document.getElementById('technologiesFields');
    var newTechnologyField = document.createElement('div');
    newTechnologyField.classList.add('technology-field');
    newTechnologyField.innerHTML = `
        <input type="text" name="technology" id="technology" class="technology" placeholder="Technology">
        <input type="text" name="version" id="version" class="version" placeholder="Version">
        <a href="#" class="remove-technology">-</a>
    `;
    technologiesFields.appendChild(newTechnologyField);
});


document.getElementById('technologiesFields').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-technology')) {
        e.preventDefault();
        var technologyField = e.target.parentElement;
        if (document.querySelectorAll('.technology-field').length > 1) {
            technologyField.remove();
        } else {
            alert('At least one technology field is required.');
        }
    }
});

// Add More and Remove buttons for Multimedia
document.getElementById('addMultimedia').addEventListener('click', function (e) {
    e.preventDefault();
    var multimediaFields = document.getElementById('multimediaFields');
    var newMultimediaField = document.createElement('div');
    newMultimediaField.classList.add('multimedia-field');
    newMultimediaField.innerHTML = `
        <input type="file" class="upload-box" name="multimedia" multiple>
        <a href="#" class="remove-multimedia">Remove</a>
    `;
    multimediaFields.appendChild(newMultimediaField);
});

document.getElementById('multimediaFields').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-multimedia')) {
        e.preventDefault();
        var multimediaField = e.target.parentElement;
        multimediaField.remove();
    }
}); //newfile
//file1
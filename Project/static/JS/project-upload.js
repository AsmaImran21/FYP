document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form");
    const categorySelect = document.getElementById('categorySelect');
    const languageList = document.getElementById('languageList');

    // Map for language options based on project type
    const languageData = {
        web: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Python'],
        app: ['Java', 'Swift', 'Kotlin', 'React Native', 'Flutter'],
        hardware: ['Arduino', 'Raspberry Pi', 'Circuit Design', 'Embedded Systems'],
        rnd: ['Python', 'R', 'MATLAB']
    };

    // Handle project type selection and display relevant languages
    categorySelect.addEventListener('change', function () {
        const selectedCategory = this.value;
        const selectedLanguages = languageData[selectedCategory] || [];
        renderLanguages(selectedLanguages);
        languageList.classList.toggle('hidden', selectedLanguages.length === 0);
    });

    // Render checkboxes for languages
    function renderLanguages(languageArr) {
        const languagesDiv = document.getElementById('languages');
        languagesDiv.innerHTML = ''; // Clear previous checkboxes

        languageArr.forEach(language => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'languages';
            checkbox.value = language;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(language));
            languagesDiv.appendChild(label);
        });
    }
    function resetErrors() {
        document.getElementById("titleimageError").innerText = '';
        document.getElementById("titleError").innerText = '';
        document.getElementById("desError").innerText = '';
        document.getElementById("langError").innerText = '';
        document.getElementById("teamError").innerText = '';
        document.getElementById("selectError").innerText = '';
        document.getElementById("skillsError").innerText = '';
        document.getElementById("technologiesError").innerText = '';
        document.getElementById("resultcardError").innerText = '';
        document.getElementById("bookletError").innerText = '';
        document.getElementById("codeError").innerText = '';
        document.getElementById("videoError").innerText = '';
        document.getElementById("multimediaError").innerText = '';
    }
 // Bind the submit event listener to the form
 form.addEventListener('submit', function(event) {
    const isFormValid = validateForm();
    if (!isFormValid) {
        event.preventDefault(); // Prevent form submission
    }
});

    // Function to validate the entire form
    function validateForm() {
        resetErrors(); // Reset all error messages first

        let isValid = true; // Assume form is initially valid

        if (!validateTitleImage()) isValid = false;
        if (!validateTitle()) isValid = false;
        if (!validateDescription()) isValid = false;
        if (!validateLanguages()) isValid = false;
        if (!validateProjectType()) isValid = false;
        if (!validateSkills()) isValid = false;
        if (!validateTechnologies()) isValid = false;
        if (!validateResultcard()) isValid = false;
        if (!validateBooklet()) isValid = false;
        if (!validateGithubURL()) isValid = false;
        if (!validateVideo()) isValid = false;
        if (!validateMultimedia()) isValid = false;
        if (!validateTeamMembers()) isValid = false;
        return isValid;
    }
    function validateTitleImage() {
        const titleImage = document.getElementById('title-image');
        const titleImageError = document.getElementById("titleimageError");
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
        if (!titleImage.files.length) {
            titleImageError.innerText = 'Please upload a project title image.';
            return false;
        }
    
        const file = titleImage.files[0];
        if (!allowedExtensions.exec(file.name)) {
            titleImageError.innerText = 'Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.';
            return false;
        } else if (file.size > 2097152) { // 2MB
            titleImageError.innerText = 'File size must be less than 2MB.';
            return false;
        }
    
        return true;
    }

    function validateTitle() {
        const title = document.getElementById("title");
        const titleError = document.getElementById("titleError");
        if(title.value.trim().length < 6) {
            titleError.innerText = "Title should contain at least 6 characters.";
            return false;
        }
    
        return true;
    }
    function validateDescription() {
        const description = document.getElementById("description");
        const desError = document.getElementById("desError");
    
        if (description.value.trim().length < 25) {
            desError.innerText = "Description must be at least 25 characters long.";
            return false;
        }
    
        return true;
    }
    function validateLanguages() {
        const checkedLanguages = document.querySelectorAll('input[name="languages"]:checked');
        const langError = document.getElementById("langError");
    
        if (!checkedLanguages.length) {
            langError.innerText = 'Please select at least one language.';
            return false;
        }
    
        return true;
    }
    function validateProjectType() {
        const projectType = document.getElementById("categorySelect");
        const selectError = document.getElementById("selectError");
    
        if (!projectType.value) {
            selectError.innerText = "Please select a project type.";
            return false;
        }
    
        return true;
    }

    function validateTeamMembers() {
        const teamMembers = document.getElementById("team_members");
        const teamError = document.getElementById("teamError");
    
        // Example validation: ensure the field is not empty
        if (!teamMembers.value.trim()) {
            teamError.innerText = "Please enter the names of team members.";
            return false;
        }
    
        // Example validation: ensure the input length meets a minimum requirement
        // Adjust the number 3 to your specific requirement
        if (teamMembers.value.trim().length < 3) {
            teamError.innerText = "Team Members information is too short.";
            return false;
        }
    
        // If the field passes the checks, clear any previous error message
        teamError.innerText = "";
        return true;
    }

    function validateSkills() {
        const skills = document.querySelectorAll('.skill-field');
        const skillsError = document.getElementById("skillsError");
        let isValid = true;
    
        skills.forEach(skill => {
            const skillInput = skill.querySelector('.skill');
            const percentageInput = skill.querySelector('.percentage');
            const percentagePattern = /^(100|[1-9]?[0-9])%?$/;
    
            if (!skillInput.value.trim() || !percentageInput.value.trim() || !percentagePattern.test(percentageInput.value)) {
                skillsError.innerText = 'Please fill in both skill and percentage fields correctly for all entries.';
                isValid = false;
            }
        });
    
        return isValid;
    }
    function validateTechnologies() {
        const technologies = document.querySelectorAll('.technology-field');
        const technologiesError = document.getElementById("technologiesError");
        let isValid = true;
    
        technologies.forEach(tech => {
            const technologyInput = tech.querySelector('.technology');
            const versionInput = tech.querySelector('.version');
    
            if (!technologyInput.value.trim() || !versionInput.value.trim()) {
                technologiesError.innerText = 'Please fill in both technology and version fields for all entries.';
                isValid = false;
            }
        });
    
        return isValid;
    }
    function validateResultcard() {
        const resultCard = document.getElementById('resultcard');
        const resultcardError = document.getElementById("resultcardError");
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
        if (!resultCard.files.length) {
            resultcardError.innerText = 'Please upload a result card.';
            return false;
        }
    
        const file = resultCard.files[0];
        if (!allowedExtensions.exec(file.name)) {
            resultcardError.innerText = 'Invalid file format. Only JPG, JPEG, PNG, and GIF are allowed.';
            return false;
        } else if (file.size > 2097152) { // 2MB
            resultcardError.innerText = 'File size must be less than 2MB.';
            return false;
        }
    
        return true;
    }
    function validateBooklet() {
        const booklet = document.getElementById('booklet');
        const bookletError = document.getElementById("bookletError");
        const allowedExtension = /\.pdf$/i;
    
        if (!booklet.files.length) {
            bookletError.innerText = 'Please upload a booklet.';
            return false;
        }
    
        const file = booklet.files[0];
        if (!allowedExtension.exec(file.name)) {
            bookletError.innerText = 'Booklet must be in PDF format.';
            return false;
        }
    
        return true;
    }
   
    function validateGithubURL() {
        const githubURL = document.getElementById('githuburl');
        const codeError = document.getElementById("codeError");
        // This pattern matches a basic structure of a URL
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    
        if (!githubURL.value.trim()) {
            codeError.innerText = 'GitHub URL is required.';
            return false;
        } else if (!urlPattern.test(githubURL.value.trim())) {
            codeError.innerText = 'Invalid URL format.';
            return false;
        }
    
        codeError.innerText = ''; // Clear error message
        return true;
    }

    
    function validateVideo() {
        const video = document.getElementById('video');
        const videoError = document.getElementById("videoError");
        const allowedFormats = ['mp4', 'mov', 'avi', 'flv', 'wmv'];
    
        // Clear any existing error message
        videoError.innerText = '';
    
        // If no file is selected, consider it valid since the video is optional
        if (!video.files.length) {
            return true;
        }
    
        // If a file is selected, proceed with the validation
        const file = video.files[0];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (!allowedFormats.includes(fileExtension)) {
            videoError.innerText = 'Video must be in MP4, MOV, AVI, FLV, or WMV format.';
            return false;
        }
    
        // If the file is selected and it passes the format check, it's valid
        return true;
    }


    function validateMultimedia() {
        const multimediaInputs = document.querySelectorAll('.multimedia-field input[type="file"]');
        const multimediaError = document.getElementById("multimediaError");
        let allFilesValid = true;
        let emptyFound = false;
    
        multimediaInputs.forEach(input => {
            if (input.files.length) {
                // File selected, validate its format
                const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                Array.from(input.files).forEach(file => {
                    if (!allowedExtensions.exec(file.name)) {
                        allFilesValid = false;
                    }
                });
            } else {
                // No file selected in this input
                emptyFound = true;
            }
        });
    
        if (emptyFound && !allFilesValid) {
            // If any input is empty and any file does not meet the format requirements
            multimediaError.innerText = 'Please upload a file for each selected input and ensure all images are in JPG, JPEG, PNG, or GIF format.';
            return false;
        } else if (emptyFound) {
            // If any input is left empty
            multimediaError.innerText = 'Please upload a file for each selected input.';
            return false;
        } else if (!allFilesValid) {
            // If any file does not meet the format requirements
            multimediaError.innerText = 'All images must be in JPG, JPEG, PNG, or GIF format.';
            return false;
        } else {
            // Clear the error message if all conditions are satisfied
            multimediaError.innerText = '';
        }
    
        return true;
    }

    
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

// Dynamically add technology fields
document.getElementById('addTechnology').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    const technologiesContainer = document.getElementById('technologiesFields');
    const newTechnologyField = document.createElement('div');
    newTechnologyField.classList.add('technology-field');
    newTechnologyField.innerHTML = `
        <input type="text" class="technology" name="technology[]" placeholder="Technology">
        <input type="text" class="version" name="version[]" placeholder="Version">
        <a href="#" class="remove-technology">-</a>
    `;

    // Append the new technology field to the container
    technologiesContainer.appendChild(newTechnologyField);
});

// Remove a technology field
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-technology')) {
        e.preventDefault();

        const fieldToBeRemoved = e.target.parentNode;
        const container = fieldToBeRemoved.parentNode;
        if (container.children.length > 1) {
            container.removeChild(fieldToBeRemoved);
        } else {
            alert("At least one technology is required.");
        }
    }
});
document.getElementById('addMultimedia').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    const multimediaContainer = document.getElementById('multimediaFields');
    const newMultimediaField = document.createElement('div');
    newMultimediaField.classList.add('multimedia-field');
    newMultimediaField.innerHTML = `
        <input type="file" class="upload-box" name="multimedia[]" multiple>
        <a href="#" class="remove-multimedia">Remove</a>
    `;

    // Append the new multimedia field to the container
    multimediaContainer.appendChild(newMultimediaField);
});

// Remove a multimedia field
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-multimedia')) {
        e.preventDefault();

        const fieldToBeRemoved = e.target.parentNode;
        const container = fieldToBeRemoved.parentNode;
        if (container.children.length > 1) {
            container.removeChild(fieldToBeRemoved);
        } else {
            alert("At least one multimedia field is required.");
        }
    }
});
});
//js
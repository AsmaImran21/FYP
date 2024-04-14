const title = document.getElementById("title");
const description = document.getElementById("description");
const language = document.getElementById("language");
const teamMembers = document.getElementById("teamMembers");
const projectType = document.getElementById("projectType");

function validateForm() {
    let flag = 1;
    //validate title
    if (title.value === "") {
        document.getElementById("titleError").innerHTML = "Title cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of title.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " ")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || title.value.length < 6) {
            document.getElementById("titleError").innerHTML = "Title should contain at least 6 letters and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("titleError").innerHTML = " ";
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
    }

    //validate language
    if (language.value === "") {
        document.getElementById("langError").innerHTML = "Language cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of language.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === " " || char === "," || char === "#" || char === "+")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || language.value.length < 6) {
            document.getElementById("langError").innerHTML = "Language should contain at least 6 letters,numbers and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("langError").innerHTML = " ";
        }
    }
    //validate Skills
    // Validate skills and percentages
    const skillsRows = document.querySelectorAll(".skillsRow");
    skillsRows.forEach(row => {
        const skillInput = row.querySelector(".skillInput");
        const percentInput = row.querySelector(".percentInput");

        if (skillInput.value.trim() === "" || percentInput.value.trim() === "") {
            document.getElementById("skillError").innerHTML = "Skills and Percentage cannot be empty";
            flag = 0;
        }
        else {

            document.getElementById("skillError").innerHTML = " ";
        }



    });

    //validate teamMembers
    if (teamMembers.value === "") {
        document.getElementById("teamError").innerHTML = "Names of Team Members cannot be empty";
        flag = 0;
    }
    else {
        let containSpecialChar = false;
        for (let char of teamMembers.value) {
            if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === " " || char === ",")) {
                containSpecialChar = true;
                break;
            }
        }
        if (containSpecialChar || teamMembers.value.length < 10) {
            document.getElementById("teamError").innerHTML = "Names of Team Members should contain at least 10 letters, commas and spaces only";
            flag = 0;
        }
        else {
            document.getElementById("teamError").innerHTML = " ";
        }

    }

    //validate Project Type
    if (projectType.value === "") {
        document.getElementById("selectError").innerHTML = "Please select a project type";
        flag = 0;
    }
    else {
        document.getElementById("selectError").innerHTML = " ";
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
// Function to handle adding a new skills row
function addSkillsRow() {

    const skillsContainer = document.getElementById("skillsContainer");
    const lastSkillInput = skillsContainer.querySelector(".skillsRow:last-child .skillInput");
    const lastPercentInput = skillsContainer.querySelector(".skillsRow:last-child .percentInput");

    if (lastSkillInput && lastSkillInput.value === "" || lastPercentInput && lastPercentInput.value === "") {
        alert("Please fill in the last skill and percentage before adding a new one.");
        return; // Exit the function if last inputs are empty
    }

      // Create new elements for skill input, percent input, and delete button
    const newRow = document.createElement("div");
    newRow.classList.add("skillsRow");

    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.classList.add("skillInput");
    skillInput.placeholder = "Skill";

    const percentInput = document.createElement("input");
    percentInput.type = "number";
    percentInput.classList.add("percentInput");
    percentInput.placeholder = "Percentage";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "-";
    deleteButton.addEventListener("click", () => {
        newRow.remove(); // Remove the entire row when delete button is clicked
    });

    // Append elements to the new row
    newRow.appendChild(skillInput);
    newRow.appendChild(percentInput);
    newRow.appendChild(deleteButton);

    // Append the new row to the skills container
    skillsContainer.appendChild(newRow);
}

// Add event listener to the add skill button to call the function when clicked
document.getElementById("addSkillButton").addEventListener("click", addSkillsRow);
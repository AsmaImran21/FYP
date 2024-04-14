/*document.addEventListener('DOMContentLoaded', function() {
    // Function to open tabs
    function openTab(tabName) {
        var i, tabcontent, tabbuttons;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
    }

    // Add click event listeners to tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            openTab(this.getAttribute('data-tab'));
            this.className += " active";
        });
    });

    // Set default open tab if needed
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }

    // Dynamically add ratings questions
    const ratingsForm = document.getElementById('ratingsForm');
    const questions = [
        "How would you rate the creativity of the project?",
        "To which extent are you clear about the project’s idea?",
        "Is the idea innovative and helpful?",
        "How satisfied are you with the completeness of the documentation of project?",
        "Is the project worthwhile to be recommended to other users?"
    ];

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<label for="question${index + 1}">${question}</label><div class="rating-scale">` + 
        Array.from({length: 5}, (_, i) => `<input type="radio" name="question${index + 1}" value="${i + 1}"> ${i + 1}`).join('') + 
        `</div>`;
        ratingsForm.appendChild(questionDiv);
    });
});




//for pmo only
document.getElementById('approvebtn').addEventListener('click', function() {
    alert('Project has been uploaded!');
}); */
// Assuming this JavaScript is for 'projectviewfile.js'

document.addEventListener('DOMContentLoaded', function() {
    // Function to open tabs
    function openTab(tabName) {
        var i, tabcontent, tabbuttons;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        document.querySelector('.tab-button[data-tab="' + tabName + '"]').className += " active";
    }

    // Add click event listeners to tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            openTab(this.getAttribute('data-tab'));
        });
    });

    // Set default open tab if needed
    if (tabButtons.length > 0) {
        tabButtons[0].click();  // Automatically open the first tab
    }

    // Dynamically add ratings questions
    const ratingsForm = document.getElementById('ratingsForm');
    const questions = [
        "How would you rate the creativity of the project?",
        "To what extent are you clear about the project’s idea?",
        "Is the idea innovative and helpful?",
        "How satisfied are you with the completeness of the documentation of the project?",
        "Is the project worthwhile to be recommended to other users?"
    ];

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <label for="question${index + 1}">${question}</label>
            <div class="rating-scale">` +
            Array.from({ length: 5 }, (_, i) => `
                <input type="radio" name="question${index + 1}" value="${i + 1}"> ${i + 1}
            `).join('') + `
            </div>`;
        ratingsForm.appendChild(questionDiv);
    });

    // You can also add the logic to handle form submission here
    // This might include AJAX calls to update the ratings asynchronously
});

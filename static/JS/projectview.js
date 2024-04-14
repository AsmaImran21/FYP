function openTab(tabName) {
    var i, tabcontent, tabbuttons;
    // Hide all tab content by default
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the "active" class from all tab buttons
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Show the specific tab content and add "active" class to the button clicked
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Set the default open tab (optional)
document.getElementsByClassName("tab-button")[0].click();





//ratings tab

document.addEventListener('DOMContentLoaded', function() {
    const ratingsForm = document.getElementById('ratingsForm');
    const stars = document.querySelector('.average-rating .stars');

    const questions = [
        "How would you rate the creativity of the project?",
        "To which extent are you clear about the project’s idea?",
        "Is the idea innovative and helpful?",
        "How satisfied are you with the completeness of the documentation of project?",
        "Is the project worthwhile to be recommended to other users?"
        // Add other questions here
    ];

    // Dynamically adding questions
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <label for="question${index + 1}">${question}</label>
            <div class="rating-scale">
                <input type="radio" name="question${index + 1}" value="1"> 1
                <input type="radio" name="question${index + 1}" value="2"> 2
                <input type="radio" name="question${index + 1}" value="3"> 3
                <input type="radio" name="question${index + 1}" value="4"> 4
                <input type="radio" name="question${index + 1}" value="5"> 5
            </div>`;
        ratingsForm.appendChild(questionDiv);
    });

    // Function to update average rating
    const updateAverageRating = () => {
        let totalRating = 0;
        let totalQuestions = 0;
        questions.forEach((_, index) => {
            const radios = document.querySelectorAll(`input[name="question${index + 1}"]:checked`);
            if (radios.length > 0) {
                totalRating += parseInt(radios[0].value);
                totalQuestions++;
            }
        });

        if (totalQuestions > 0) {
            const averageRating = totalRating / totalQuestions;
            const percentage = (averageRating / 5) * 100;
            stars.style.width = `${percentage}%`;
        }
    };

    // Event listener for form changes
    ratingsForm.addEventListener('change', updateAverageRating);
});




//for pmo only
document.getElementById('approvebtn').addEventListener('click', function() {
      alert('Project has been uploaded!');
});
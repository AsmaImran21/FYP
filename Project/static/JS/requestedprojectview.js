document.getElementById('accept-button').addEventListener('click', function () {
    var projectId = this.getAttribute('data-project-id');
    updateProjectStatus(projectId, 'Accepted');
});

document.getElementById('reject-button').addEventListener('click', function () {
    var projectId = this.getAttribute('data-project-id');
    updateProjectStatus(projectId, 'Rejected');
});

function updateProjectStatus(projectId, status) {
    var csrfToken = '{{ csrf_token }}'; // Assuming csrf_token is a valid JavaScript variable
    var url = "{% url 'update-project-status' %}";

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-CSRFToken', csrfToken); // Set CSRF token in the header
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Status updated successfully, redirect to the requested projects list page
            window.location.href = '{% url "requestedprojectlist" %}'; // Update URL to match your URL pattern
        } else {
            // Handle error
            console.log('Failed to update status');
        }
    };
    xhr.send(JSON.stringify({ project_id: projectId, status: status }));
}

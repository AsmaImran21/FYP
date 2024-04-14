// Toggles the navbar menu on small screens
function toggleNavbar() {
  var menu = document.querySelector('.navbar-menu');
  var navbar = document.querySelector('.navbar');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Updated event listener for closing the menu
document.addEventListener('click', function(event) {
  var menu = document.querySelector('.navbar-menu');
  if (!event.target.matches('.hamburger') && !menu.contains(event.target) && menu.style.display === 'block') {
    menu.style.display = 'none';
  }
});

// Toggles the profile dropdown menu
function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown-menu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Toggles the notification dropdown menu
function toggleNotificationDropdown() {
  var dropdown = document.querySelector('.notification-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdowns if the user clicks outside of them
document.addEventListener('click', function(event) {
  if (!event.target.matches('.profile-pic') && !event.target.closest('.notification-container')) {
    closeDropdowns();
  }
});

// Function to close all dropdowns
function closeDropdowns() {
  var dropdowns = document.querySelectorAll('.dropdown-menu, .notification-dropdown');
  dropdowns.forEach(function(dropdown) {
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    }
  });
}

// This function is to ensure that dropdowns are closed when clicking outside, without interfering with other interactions.
window.onclick = function(event) {
  if (!event.target.matches('.fa-bell') && !event.target.matches('.profile-pic')) {
    closeDropdowns();
  }
};

// Toggle FAQ answers - adjust or remove this function based on your actual FAQ implementation
function toggleFaq(id) {
  var answer = document.getElementById(id);
  if (answer) {
    var arrow = answer.previousElementSibling.querySelector('.arrow');
    answer.classList.toggle('show');
    if (arrow) {
      arrow.classList.toggle('rotate');
    }
  }
}

/*css*/
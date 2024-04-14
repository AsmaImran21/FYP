document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');
  const profilePic = document.querySelector('.profile-pic');
  const notificationBell = document.querySelector('.fa-bell');
  const dropbtn = document.querySelector('.dropbtn');

  hamburger.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
  });

  //close navbar
  // Close the menu when clicking outside of it
  document.addEventListener('click', function(e) {
    if (!navbarMenu.contains(e.target) && !hamburger.contains(e.target) &&  navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
    }
});

  // Close the navbar menu when a link is clicked
  document.querySelectorAll('.navbar-menu a').forEach(item => {
      item.addEventListener('click', () => {
          if(navbarMenu.classList.contains('active')) {
              navbarMenu.classList.remove('active');
          }
      });
  });

  // Toggle the dropdown for the projects
  dropbtn.addEventListener('click', function(event) {
      this.nextElementSibling.classList.toggle('show');
      console.log('myFunction was called');
      event.stopPropagation(); // Prevent it from closing immediately

  });

  // Toggle the profile dropdown menu
  profilePic.addEventListener('click', function(event) {
      document.querySelector('.dropdown-menu').classList.toggle('show');
      console.log('myFunction drop was called');
      event.stopPropagation(); // Prevent it from closing immediately
  });

  // Toggle the notification dropdown menu
  notificationBell.addEventListener('click', function(event) {
      document.querySelector('.notification-dropdown').classList.toggle('show');
      console.log('myFunction  called');
      event.stopPropagation(); // Prevent it from closing immediately
  });

  
  function updateNotifications() {
    fetch('/fetch-notifications/')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.notification-dropdown');
        container.innerHTML = '';  // Clear existing notifications
        data.notifications.forEach(notif => {
            const link = document.createElement('a');
            link.textContent = notif.message;  // Inserting notification message here
            container.appendChild(link);
        });
        if (data.notifications.length > 0) {
            document.querySelector('.notification-count').textContent = data.notifications.length;
        } else {
            document.querySelector('.notification-count').textContent = '';
        }
    });
}

setInterval(updateNotifications, 10000);  // Update every 10 seconds
updateNotifications();
    
  // Clicking outside the dropdowns or profile menu closes them
  document.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }

      if (!event.target.matches('.profile-pic')) {
          var dropdownMenus = document.getElementsByClassName("dropdown-menu");
          for (var i = 0; i < dropdownMenus.length; i++) {
              var openDropdownMenu = dropdownMenus[i];
              if (openDropdownMenu.classList.contains('show')) {
                  openDropdownMenu.classList.remove('show');
              }
          }
      }

      if (!event.target.matches('.fa-bell')) {
          var notificationDropdowns = document.getElementsByClassName("notification-dropdown");
          for (var i = 0; i < notificationDropdowns.length; i++) {
              var openNotificationDropdown = notificationDropdowns[i];
              if (openNotificationDropdown.classList.contains('show')) {
                  openNotificationDropdown.classList.remove('show');
              }
          }
      }
  });
});
//
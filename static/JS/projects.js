document.addEventListener('click', function (e) {
    if (e.target.closest('.profile')) {
        e.target.closest('.profile').querySelector('.dropdown').classList.toggle('show');
    } else {
        var openDropdown = document.querySelector('.profile .dropdown.show');
        if (openDropdown) openDropdown.classList.remove('show');
    }
});
//projects section
document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({ 
        reset: true, 
        distance: '60px',
        duration: 2500,
        delay: 400
    });
    ScrollReveal().reveal('.r1', { delay: 600, origin: 'right' });
    ScrollReveal().reveal('.r2', { delay: 700, origin: 'right' });
  
});
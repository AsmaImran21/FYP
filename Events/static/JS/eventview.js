document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({ 
        reset: true, 
        distance: '60px',
        duration: 2500,
        delay: 400
    });

    //Transitions reapplied
    ScrollReveal().reveal('.header h1, .header p, .search-bar', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.event-title', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.event-content', { delay: 600, origin: 'bottom' });
});
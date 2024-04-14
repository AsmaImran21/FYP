document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({ 
        reset: true, 
        distance: '60px',
        duration: 2500,
        delay: 400
    });

    ScrollReveal().reveal('.title, .sec-title, .h1', { delay: 500, origin: 'left' });
    ScrollReveal().reveal('.sec-1 .image, .info', { delay: 600, origin: 'bottom' });
    ScrollReveal().reveal('.textbox', { delay: 700, origin: 'right' });
    ScrollReveal().reveal('.sec-2 .image, .img1', { delay: 500, origin: 'top' });
});
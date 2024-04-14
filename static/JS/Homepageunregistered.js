ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('.banner-content h1', {
    delay: 500,
    origin: 'top'
});

ScrollReveal().reveal('.banner-content p', {
    delay: 500,
    origin: 'bottom'
});

ScrollReveal().reveal('.section-two .col, .section-three .col ', {
    delay: 600,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.btn-area button', {
    delay: 600,
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.search-bar', {
    delay: 600,
    origin: 'bottom',
    interval: 200
});

function toggleFaq(id) {
    var answer = document.getElementById(id);
    var arrow = answer.previousElementSibling.querySelector('.arrow');
    answer.classList.toggle('show');
    arrow.classList.toggle('rotate');
}
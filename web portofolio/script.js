document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('home').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('skills-link').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('skills').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Example for responsive menu toggle (future mobile use)
const menuBtn = document.createElement('button');
menuBtn.textContent = "☰";
menuBtn.classList.add("menu-toggle");
document.querySelector('.nav-container').prepend(menuBtn);

menuBtn.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

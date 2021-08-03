// const navToggle =
//     document.querySelector('.nav__toggle');

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav__navlist');
    const navLinks = document.querySelectorAll('.nav__navlist li');

    // Toogle Nav
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // navLinks.forEach((link, index) => {
    //     link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
    //     console.log(index / 7);
    // });
};


navSlide();
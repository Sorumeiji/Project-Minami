gsap.from('.sidebar__content', { opacity: 0, duration: 1, x: -50 });
gsap.from('.sidebar__footer', { opacity: 0, duration: 1, x: -50 });
gsap.from('.featured__content', { opacity: 0, duration: 1, delay: 1, y: -50 });



// When click on commissions navigation the drop-down menu will appear
const dropdowns = document.getElementsByClassName('main-nav__item');

document.getElementById("main-nav__list").addEventListener("click", function (e) {
    if (e.target && e.target.matches("li a")) {
        for (var i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains("active")) {
                dropdowns[i].classList.remove('active');
            }
        }
        if (e.target.matches("#commissions")) {
            document.querySelector(".dropdown-content").classList.add("show");
        } else {
            document.querySelector(".dropdown-content").classList.remove("show");
        }
        e.target.classList.add('active');
    }
});


document.getElementById("hamburger").addEventListener("click", function (e) {

    document.querySelector(".main-nav ").classList.toggle("show-flex");
    // gsap.from('.main-nav, #main-nav__list', { duration: 1, x: -100 });
    // gsap.from("#main-nav__list", { opacity: 0, duration: 0.5, delay: 0.5, x: -50 });

});

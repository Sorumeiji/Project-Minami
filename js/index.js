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




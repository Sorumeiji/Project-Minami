gsap.from('.sidebar__content', { opacity: 0, duration: 1, x: -50 });
gsap.from('.featured__content', { opacity: 0, duration: 1, delay: 1, y: -50 });

// var element = document.querySelector(".sidebar");
// element.addEventListener("animationstart", listener, false);
// element.addEventListener("animationend", listener, false);
// element.addEventListener("animationinteration", listener, false);

// element.classclassname = "slidein";

// function listener(event) {
//     var l = document.createElement("p");
//     switch (event.type) {
//         case "animationstart":
//             l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
//             break;
//         case "animationend":
//             l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
//             break;
//         case "animationiteration":
//             l.textContent = `New loop started at time ${event.elapsedTime}`;
//             break;
//     }
//     document.querySelector(".sidebar").appendChild(l);
// }
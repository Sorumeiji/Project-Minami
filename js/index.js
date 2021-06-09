const timeLeft = document.getElementById('timeLeft');
const birthday = new Date('08/05/2021');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId = birthday;

function countDown() { 
    const today = new Date();
    const timeSpan = birthday - today;
    console.log(timeSpan);

    if(timeSpan <= -day){
        timeLeft.innerHTML = "Hope your Birthday was the best!";
        clearInterval(timerId);
        return;
    }
    else if(timeSpan <= 0 ) {
        timeLeft.innerHTML = "Happy Birthday Nyacchii";
        clearInterval(timerId);
        return;
    }
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour );
    const minutes = Math.floor((timeSpan % hour) / minute );
    const seconds =  Math.floor((timeSpan % minute) / second );
    timeLeft.innerHTML = days + ' ' + hours + ' ' + minutes + ' ' + seconds + '';
}

const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__navlist');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('.nav__navlist li + li');
    const container = document.querySelector('.container');
    

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        logo.classList.toggle('logo-hidden');
        burger.classList.toggle('toggle');
          
        navLinks.forEach( (link, index)=> {

            if(link.style.animation){
                link.style.animation = `nav__navlistFadeOut 0.5s ease backwards ${index / 5 + 0.1}s`
                 link.style.animation = '';
            } else {
              link.style.animation = `nav__navlistFade 0.5s ease forwards ${index / 5 + 0.1}s`;
            }
        });

    });
        
};

const app = () => {
    navSlide();
    timerId = setInterval(countDown,second);
};

app();

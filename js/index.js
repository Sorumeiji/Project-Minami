const timeLeft = document.getElementById('timeLeft');
const birthday = new Date('08/05/2021');
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId = birthday;




function pad(n){
    if(n < 10 )
    {
        return "0" + n;
    }
    return n;
}

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
    let days = pad( Math.floor(timeSpan / day) );
    let hours = pad ( Math.floor((timeSpan % day) / hour) );
    let minutes = pad ( Math.floor((timeSpan % hour) / minute));
    let seconds =  pad (Math.floor((timeSpan % minute) / second ));


    timeLeft.innerHTML = days + ' ' + hours + ' ' + minutes + ' ' + seconds + '';
}

const app = () => {

    window.addEventListener('load', () => {
        const preload = document.querySelector('.preload');
        preload.classList.add('preload-finish');
    });


    timerId = setInterval(countDown,second);

};

app();

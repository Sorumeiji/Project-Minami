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


timerId = setInterval(countDown,second);
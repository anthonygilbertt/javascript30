let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endedTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // CLEAR ANY EXISTING COUNTDOWN
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000; //we multiply by 1000 because now is in miliseconds
    displayTimeLeft(seconds);
    timeEndedDisplay(then);
    
    // console.log({now, then});
    countdown = setInterval(() => {  //WE NEED TO STORE THIS INTERVAL IN ITS'S OWN VARIABLE. WE WILL CALL THIS 'countdown'
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if we should stop it!
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        //display it
        displayTimeLeft(secondsLeft);
    }, 1000); //1000 miliseconds
}



function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60); //Math.floor() grabs the lower bound number
    const remainderSeconds = seconds % 60;
    // NOW WE JOIN MINUTES AND SECONDS TOGETHER TO MAKE IT LOOK NICE AND PRETTY
    const displayTime = `${minutes}minutes, and ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds} seconds until break time`;
    document.title = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = displayTime;
}

// NOW WE WANT TO SHOW THE ENDING TIME

function timeEndedDisplay(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endedTime.textContent = `Be back at ${hour > 12 ? hour - 12 : ''}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time); //using dataset gives us an object
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));
    document.customForm.addEventListener('click', (e) => {
        e.preventDefault();
        const mins = this.minutes.value;
        console.log(mind);
        time(min * 60);
        this.reset();
    });
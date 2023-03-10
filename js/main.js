let [milliseconds,seconds, minutes, hours] = [0,0,0,0];
const displayTime = document.getElementById('display-time');
const watchStartBtn = document.getElementById('watch-start');
let timer = null;
const stopWatch = () =>{
    /* milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0; */
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    // }
    const milliSeconds = milliseconds % 10;
    displayTime.innerHTML = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}:${milliseconds < 100 ? milliseconds : milliSeconds}` 
}
const watchStart = () =>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}
const watchPause = () =>{
    clearInterval(timer);
    watchStartBtn.innerText = "Go on"
}
const watchReset = () =>{
    clearInterval(timer);
    [milliseconds,seconds, minutes, hours] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00";
}
watchStartBtn.addEventListener('click', () =>{
    watchStartBtn.innerText = "Start";
    watchStart();
})
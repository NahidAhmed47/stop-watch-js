let [seconds, minutes, hours] = [0,0,0];
const displayTime = document.getElementById('display-time');
let timer = null;
const stopWatch = () =>{
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    displayTime.innerHTML = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}` 
}
const watchStart = () =>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}
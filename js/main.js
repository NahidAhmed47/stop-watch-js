let [milliseconds,seconds, minutes, hours] = [0,0,0,0];
const displayTime = document.getElementById('display-time');
let timer = null;
const stopWatch = () =>{
    milliseconds += 125;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }
    const milliSeconds = Math.round(milliseconds / 10);
    displayTime.innerHTML = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}:${milliseconds < 100 ? '0'+milliseconds : milliSeconds}` 
}
const watchStart = () =>{
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 125);
}
const watchPause = () =>{
    clearInterval(timer);
}
const watchReset = () =>{
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00";
}
document.getElementById('watch-pause').addEventListener('click', () =>{
    const btnPause = document.getElementById('watch-pause');
    if(btnPause.innerText !== "Go on"){
        watchPause();
        btnPause.innerText = "Go on";
    }
    else{
        watchStart()
        btnPause.innerText = "Pause";
    }
})
document.getElementById('btn-saveTimer').addEventListener('click', () =>{
    let titleInput = prompt('Write your title?');
    if(titleInput === '' || titleInput === null){
        titleInput = 'No title';
    }
    const allTime = displayTime.innerText.split(':');
    allTime.pop();
    const eventTimer = allTime.join(':');
    const containerUl = document.getElementById('display-container-ul');
    const li = document.createElement('li');
    li.innerHTML = `
                <div class="ml-12 flex justify-between">
                    <h1>${eventTimer}</h1>
                    <p>${titleInput}</p>
                </div>
    `;
    containerUl.appendChild(li);
    watchReset();
})
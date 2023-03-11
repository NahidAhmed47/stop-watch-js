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
const getSavedItemsFromLocalStorage = () =>{
    let countTimer = {};
    const getItems = localStorage.getItem('countTimer');
    if(getItems){
        countTimer = JSON.parse(getItems);
    }
    return countTimer;
}
const displayTimerData = (timer, titleInput)=>{
    const allTime = timer.split(':');
    allTime.pop();
    const eventTimer = allTime.join(':');
    const containerUl = document.getElementById('display-container-ul');
    const li = document.createElement('li');
    li.classList.add('item', 'mt-2');
    li.innerHTML = `
                <div class="w-full flex justify-between">
                    <div class="flex justify-around w-full">
                         <h1>${eventTimer}</h1>
                         <p>${titleInput}</p>
                    </div>
                    <img class="w-6 hover:scale-90 duration-300" src="./images/circle-xmark-regular.svg"/>
                </div>
    `;
    containerUl.appendChild(li);
}
let [milliseconds,seconds, minutes, hours] = [0,0,0,0];
const displayTime = document.getElementById('display-time');
let timer = null;
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
    const timer = displayTime.innerText;
    displayTimerData(timer, titleInput);
    watchReset();
    saveTimerToLocalStorage(timer, titleInput);
})
document.getElementById('display-container-ul').addEventListener('click', (e) =>{
    if(e.target.tagName === 'IMG'){
        const displayLi = e.target.parentNode.parentNode;
        displayLi.style.display = 'none';
    }
})
const saveTimerToLocalStorage = (countTime, title) =>{
    const countTimer = getSavedItemsFromLocalStorage();
    countTimer[countTime] = title;
    const countTimerStringified = JSON.stringify(countTimer);
    localStorage.setItem('countTimer', countTimerStringified);
}
const showSavedTimerFromLocalStorage = () =>{
    const countTimer = getSavedItemsFromLocalStorage();
    for(const item in countTimer){
        const value = countTimer[item];
        console.log(item, value);
        displayTimerData(item, value);
    }
}
showSavedTimerFromLocalStorage()
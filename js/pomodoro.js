// Deklarasi Variabel
let PomodoroButton = document.getElementById("Pomodoro");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById ("btn-pause");
let time = document.getElementById ("time");
let container = document.getElementById("container");
let set;
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

// if timer reaches its limit
const appendZero = (value) => {
    value = value < 10 ? `0${value}`: value;
    return value;
};

//alarm
const playAlarm = () => {
    const alarm = document.getElementById('alarm');
};

// pause timer function
const pauseTimer = () => {
    clearInterval(set);
};

// reset timer
reset.addEventListener(
    "click", () => {
    pauseTimer();

    if (PomodoroButton.classList.contains("btn-pomodoro")){
        minCount = 24;
    } else if (shortBreakButton.classList.contains("btn-pomodoro")){
        minCount = 4;
    } else if (longBreakButton.classList.contains("btn-pomdoro")){
        minCount = 14;
    }
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
    });

// remove pomodoro class
const removePomodoro = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-pomodoro");
    });
};

// memulai timer button pomodoro setelah di pause
PomodoroButton.addEventListener("click", () => {
    removePomodoro();
    PomodoroButton.classList.add("btn-pomodoro");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

// change background color onclick pomodoro button
PomodoroButton.addEventListener("click", () => {
    container.style.backgroundColor = "#124EF5";
});

// memulai timer button shortbreak setelah di pause
shortBreakButton.addEventListener("click", () => {
    removePomodoro();
    shortBreakButton.classList.add("btn-pomodoro");
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`
});

// Change background container color onclick short break button
shortBreakButton.addEventListener("click", () =>  {
    container.style.backgroundColor = "#FFAB00";
});

// memulai timer button longbreak setelah di pause
longBreakButton.addEventListener("click", () => {
    removePomodoro();
    longBreakButton.classList.add("btn-pomodoro");
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

// Change background container color onclick short break button
longBreakButton.addEventListener("click", () =>  {
    container.style.backgroundColor = "#F35F65";
});

// pause timer
pause.addEventListener(
    "click", 
    (pauseTime = () => {
        paused = true;
        clearInterval(set);
        startBtn.classList.remove("hide");
        pause.classList.remove("show");
        reset.classList.remove("show");
    })
    );

// start timer
    startBtn.addEventListener("click", () => {
        reset.classList.add("show");
        pause.classList.add("show");
        startBtn.classList.add("hide");
        startBtn.classList.remove("show");
        if(paused){
            paused = false;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            set = setInterval(() => {
                count--;
                time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
                if(count == 0){
                    if(minCount !=0 ){
                        minCount--;
                        count = 59;
                    }
                    else{
                        clearInterval(set);
                        playAlarm();
                    }
                }
            }, 1000);
        }
    });

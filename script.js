const hourE1 = document.querySelector(".hour");
const minutesE1 = document.querySelector(".minutes");
const secondsE1 = document.querySelector(".seconds");
const periodE1 = document.querySelector(".period");
const monthsE1 = document.querySelector(".month-name");
const daysE1 = document.querySelector(".day-name");
const dayNumbersE1 = document.querySelector(".day-number");
const yearsE1 = document.querySelector(".year");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const clock = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth();

    hourE1.innerHTML = addZero(period(hour));
    minutesE1.innerHTML = addZero(minutes);
    secondsE1.innerHTML = addZero(seconds);
    periodE1.innerHTML = setTimePeriod(hour);
};

clock();

function setTimePeriod(time){
    let ampm = "";
    if(time < 12){
        ampm = "AM";
    }else {
        ampm = "PM"
    }
    return ampm;
}

function period(time){
    if(time > 12){
        time = time - 12;
        return time;
    }
    return time;
}

function addZero(time){
    if(time < 10){
        time += "0" + time;
    }
    return time;
}

function setCalendarValue(){
    const today = new Date();
    yearsE1.innerHTML = today.getFullYear();
    dayNumbersE1.innerHTML = today.getDate();
    daysE1.innerHTML = today[getDay()];
    monthsE1.innerHTML = today[getMonth()];
}

const updateTime = setInterval(clock, 1000);
setCalendarValue();

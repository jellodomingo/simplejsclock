var militaryOn = false;
document.addEventListener('click', switchFormat); 

function switchFormat() {
    militaryOn = !militaryOn;
    showTime();
}

function showTime() {
    var date = new Date();
    document.getElementById("hour").innerText = formatHour(date.getHours());
    document.getElementById("minute").innerText = format(date.getMinutes());
    document.getElementById("second").innerText = format(date.getSeconds());
    if(!militaryOn){
        document.getElementById("ampm").innerText = getAmPm(date);
    } else {
        document.getElementById("ampm").innerText = "";
    }
}

function getAmPm(date){
    return date.getHours() > 12 ? "PM" : "AM";
}

function formatHour(time){
    if(militaryOn){
        return format(time);
    } else {
        return time > 12 ? format(time - 12) : format(time);
    }
}

function format(time) {
    return time < 10 ? "0" + time : time;
}

showTime();
setInterval(showTime, 1000);
var militaryOn = false;
document.addEventListener('click', switchFormat); 

var fontCount = 0;
var fontList = ["Barlow,sans-serif",
                "'Press Start 2P', cursive",
                "Exo,sans-serif",
                "Inter,sans-serif",
                "Nunito Sans,sans-serif",
                "Orbitron,sans-serif",
                "Roboto,sans-serif",
                "Roboto Mono,monospace",
                "Work Sans,sans-serif"];

var fontSizeCount = 0;
var fontSize = ['10px','20px','30px','40px','50px','60px','70px', '80px', '90px'];


function changeFontSizeUp() {
    fontSizeCount++;
    if(fontSizeCount >= fontSize.length )
    {
        fontSizeCount = 0;
    }
    document.getElementById("clock").style.fontSize = fontSize[fontSizeCount];
}

function changeFontSizeDown() {
    fontSizeCount--;
    if(fontSizeCount < 0 )
    {
        fontSizeCount = fontSize.length - 1;
    }
    document.getElementById("clock").style.fontSize = fontSize[fontSizeCount];
}

function switchFontsUp() {
    fontCount++;
    if(fontCount >= fontList.length )
    {
        fontCount = 0;
    }
    document.getElementById("clock").style.fontFamily = fontList[fontCount];
}

function switchFontsDown() {
    fontCount--;
    if(fontCount < 0)
    {
        fontCount = fontList.length - 1;
    }
    document.getElementById("clock").style.fontFamily = fontList[fontCount];
}

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

document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 37:
            changeFontSizeDown();
            break;
        case 38:
            switchFontsUp();
            break;
        case 39:
            changeFontSizeUp();
            break;
        case 40:
            switchFontsDown();
            break;
    }
}


showTime();
setInterval(showTime, 1000);
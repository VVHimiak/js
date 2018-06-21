
//DATE

var hour, min, sec;

var el = document.getElementById('clock');
var el2 = document.getElementById('rand');

function getClock() {
    hour = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    if(hour < 10) {
        hour = '0' + hour;
    }
    if(min < 10) {
        min = '0' + min;
    }
    if(sec < 10) {
        sec = '0' + sec;
    }
    el.innerText = `${hour} : ${min} : ${sec}`;
}
setInterval(getClock, 1000);
setInterval(getRand, 1000);

function getRand() {
    el2.innerText = `${Math.floor(Math.random()*100)}`;
}

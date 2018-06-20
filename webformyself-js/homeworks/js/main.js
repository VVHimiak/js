/*
var element = document.getElementsByTagName('h1')[0];
var leftDays = calcLeftDaysOfMonth() + '';

if(+leftDays[leftDays.length - 1] === 1) {

    element.innerText = `left ${leftDays} days`;
}

//function calcDays()
function calcLeftDaysOfMonth(){

    return new Date(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) - new Date()).getDate();

}

console.log(+leftDays[leftDays.length - 1]);*/
var i = 0;

do {

    if(i === 2 || i === 3) {
        continue;
    }

    document.write(i + '<br>');
    i++;
}
while (i < 6);

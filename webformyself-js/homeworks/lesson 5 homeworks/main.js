
// (5 homework - p1)

// var el = 112;

// var i = 2;

// while(el >= 2) {

//   if ((el % i) === 0){
//     document.write(el + '<br>');
//   }
//   el = el / i;
// }


// (5 homework - p2)

var element, line, td, lineK, inputFrom, inputTo, result;
inputFrom = document.getElementsByClassName('from')[0];
inputTo = document.getElementsByClassName('to')[0];
result = document.getElementsByClassName('result')[0];
element = document.getElementById("table");


result.addEventListener('click', function(){
    doCount(+inputFrom.value, +inputTo.value);
});


function doCount(from,to) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
    if(!isNaN(from) && !isNaN(to) && from >= 0 && to >=1 && isFinite(from) && isFinite(to)) {

        console.log(from);
        console.log(to);

        for(var i = from; i < to; i++) {
            line = document.createElement("tr");
            line.classList.add("tr" + i);
            element.append(line);

            for(var b = from; b < to; b++) {
                td = document.createElement("td");
                lineK = document.getElementsByClassName("tr" + i)[0];
                td.classList.add("td" + b);
                lineK.append(td);
                lineK.getElementsByClassName('td' + b)[0].innerText = i*b;
            }
        }
    }
}


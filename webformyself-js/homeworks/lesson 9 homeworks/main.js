
//FUNCTION

//1-homework

//!n
/*

function countFactorial(numb) {
    if(numb !== 1) {
       return numb *= countFactorial(numb-1);
    }
        return numb;
}
document.write(countFactorial(6));
*/

//2-homework

function returnMax() {
    var arr = [];
    for(var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    var nR = arr.sort(
        function(a,b) {
           if(a > b) {
               return 1;
           }
           if(a < b) {
               return -1;
           }
           if(a = b) {
               return 0;
           }
        }
    );
    //return nR[nR.length - 1];
    return nR;
}

document.write(returnMax(56,69,234,60,45,45));

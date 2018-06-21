/*
//STRING

//var a = "some string";
var a = new String('some strong');
//alert(a.length);
alert(a[4]);

//charAt
a.charAt(7); //or a[7]

//concat
a.concat('fdjvnsldnvfjkd'); //or a + 'sdbsdbdgbgb'

//indexOf
a.indexOf('some'); //return index of first enter of substring

//lastIndexOf
a.lastIndexOf('some'); //return index of last enter of substring

//split
a.split(','); //this method is doing array from string
                //for arrays is method 'join' to do string from array
var arrayFromString = a.split(' ');
alert(arrayFromString);
                //for checking is Array or not
Array.isArray(arrayFromString);

//if a.split('') - then avery single character will be element of array
//this method can support REGULAR EXPRESIONS


//replace
//this method can do replace of some substring in string

a.replace('some','can be'); //first parametr is substring that should be replaced
                            //second parameter is substring that should be enter


//substr
//its doing search of index

a.substr(3,4); //1-is from what index we should do cutting
                //second is length of cutting


//substring
//its also doing search of index but in another way

a.substring(5,9); //first parameter is from index
                    //second is that index to which we should do our cutting


//toUpperUase
a.toUpperCase(); //this method is doing transformation of string to Upper Case


//toLowerCase
a.toLowerCase(); //this method is doing transformation of string to Lower Case


//slise
//is almost the same like method substring
a.slice(5, 7);

//search
//this method does a search of Reg Ex

a.search(/[0-9]/); //this method returns index of first entry or -1 if matches not found


//match
//this method returns array of found substring or 0 - if mathes is not found

a.match(/[0-9]+/);


//other methods that are used rarely:

//a.bold() - <bold>our string</bold>;
//a.blink() - <blink>our string</blink>;
//a.fixed() - <tt>our string</tt>;
//a.fixed() - <tt>our string</tt>;
//a.fontcolor('red') - <font color="red">our string</font>;
//a.fontsize('20') - <font size="20px">our string</font>;
//a.italics() - <i>our string</i>;
//a.italics() - <i>our string</i>;
//a.link('http://google.com') - <a href="http://google.com" >our string</a>;
*/

/* var answer = prompt('Please enter your string', 'some | string');
 console.log(answer.indexOf('|'));


 if(!(answer.indexOf('|') === -1)) {

     var arr = answer.split('|');
     for(i in arr) {
         document.write(`${arr[i].toUpperCase()} <br>` );
     }
 }else if(answer === -1) {
     answer = prompt('Please enter your string', 'some | string');
}*/

//1-homework
/*
var answer;

do {
    answer = prompt('Please enter your string', 'some | string');

    if (answer !== null && answer !== '') {
        if (answer.indexOf('|') !== -1) {
            if(answer.lastIndexOf('|') !== -1) {
                var neAn = answer.substring(0, answer.length - 1);
                console.log(neAn);
                var arr = neAn.split('|');
                for (i in arr) {
                    document.write(`${arr[i].toUpperCase()} <br>`);
                }
            } else {
                var arr = answer.split('|');
                for (i in arr) {
                    document.write(`${arr[i].toUpperCase()} <br>`);
                }
            }

        }
    }
    //if(answer !== '-1')
    // break;
} while (answer === null || answer === '' || answer.indexOf('|') === -1);
*/

//2-homework

var str = 'hello my name is Volodymyr';
var arr = str.split('');
var newStr = arr.reverse().join('');
document.write(newStr);

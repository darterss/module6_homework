let number1 = 10;
let number2 = 17;

function print (){
    console.log(number1);
    if (number1 === number2) clearInterval (intervalID);
    number1++;
}
const intervalID = setInterval (print, 1000);
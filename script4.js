let number1 = 10;
let number2 = 17;
let numbers = number2 - number1 + 2;

function print (){
    console.log(number1);
    number1++;
}
const intervalID = setInterval (print, 1000);
const clear = () => clearInterval (intervalID);
setTimeout (clear, numbers*1000);
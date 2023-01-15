function func1 (number1){
    function func2 (number2 = func1.arguments[1]) {
        return (number1 + number2);
    }
    return (func2());
}
console.log(func1(1,4));
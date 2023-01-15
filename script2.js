function verification (number){
    if ((number > 1000) || (typeof (number) !== 'number') || (String(number) === 'NaN'))
        return ('Данные не верны');
    else if (number === 0)
        return ('Ноль');
    else if (number === 1)
        return ('Еденица');
    else{
        for (let i = 2; i <= number - 1; i++){
            if (number % i === 0)
                return ('Составное число');
        }
        return ('Простое число');
    }
}

console.log(verification(997));
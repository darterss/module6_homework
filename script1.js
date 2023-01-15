const array = [1, null, NaN, true, 0, 2, 4, 8, 7, "Hello"];
let countEven = 0;
let countOdd = 0;
let countZero = 0;


function sortNumbers() {
    array.forEach((element) => {
            if (element === 0)
                countZero++;
            else if ((typeof (element) === 'number') && (String(element) !== 'NaN') && (element % 2 === 0))
                countEven++;
            else if (String(element % 2) !== 'NaN' && typeof (element) === 'number')
                countOdd++;
        }
    );
    console.log('Even: ' + countEven + '\nZero: ' + countZero + '\n Odd: ' + countOdd);
}

sortNumbers();
const sumAll = function(firstNumber, secondNumber) {
    let sumTotal = 0;
    if (firstNumber < secondNumber) {
        for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
            sumTotal+= firstNumber
        }
    } else {
        for (secondNumber; secondNumber <= firstNumber; secondNumber++) {
        sumTotal += secondNumber;
        }
    }
    return sumTotal
};

// Do not edit below this line
module.exports = sumAll;

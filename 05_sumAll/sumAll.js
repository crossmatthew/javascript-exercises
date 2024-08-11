const sumAll = function(firstNumber, secondNumber) {
    let sumTotal = 0;
    if (
        typeof firstNumber !== 'number' || 
        typeof secondNumber !== 'number' || 
        firstNumber % 1 !== 0 ||
        secondNumber % 1 !== 0 ||
        firstNumber < 0 ||
        secondNumber < 0) {
            return 'ERROR'
    }
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

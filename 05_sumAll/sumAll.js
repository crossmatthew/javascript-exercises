const sumAll = function(min, max) {
    let sumTotal = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max) ||
        min < 0 || max < 0) {
            return 'ERROR'
    }
    if (min > max) [min, max] = [max, min];
    for (let i = min; i <= max; i++) {
        sumTotal += i;
    }
    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;

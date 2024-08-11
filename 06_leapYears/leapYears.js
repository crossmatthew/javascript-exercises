const leapYears = function(year) {
    if (year.toString().endsWith('00') && year % 400 === 0 || !year.toString().endsWith('00') && year % 4 === 0) {
        return true
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;

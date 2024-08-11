const leapYears = function(year) {
    /*  Leap years are divisble by 4 
        Century years (e.g. 1700) are not leap years
        unless they are divisible by 400 (e.g. 1600)
    */
   if (year % 400 === 0 || 
    year % 100 !== 0 && year % 4 === 0) {
        return true
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;

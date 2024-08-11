const convertToCelsius = function(degreesInFahrenheit) {
 const celsiusConversion = (degreesInFahrenheit - 32) * 5 / 9;
 return Number(celsiusConversion.toFixed(1));
};

const convertToFahrenheit = function(degreesInCelsius) {
 const farenheitConversion = (degreesInCelsius * 9 / 5 + 32);
 return Number(farenheitConversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

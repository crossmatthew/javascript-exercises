const convertToCelsius = function(degreesInFahrenheit) {
  /*  Formula to convert Fahrenheit to Celsius:
      x = Degrees in F
      x = (x - 32) * 5 / 9 
  */
 const celsiusConversion = (degreesInFahrenheit - 32) * 5 / 9;
 return Number(celsiusConversion.toFixed(1));
};

const convertToFahrenheit = function() {
  /*  Formula to convert Fahrenheit to Celsius:
      x = Degrees in C
      x = (x * 9 / 5 + 32)
  */
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

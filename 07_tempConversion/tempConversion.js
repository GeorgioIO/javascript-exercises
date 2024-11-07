const convertToCelsius = function(fahrenheitValue) {
  return Math.round(5 / 9 * (fahrenheitValue - 32) * 10) / 10;
};

const convertToFahrenheit = function(celsiusValue) {
  return Math.round(((9 / 5 * celsiusValue) + 32 )* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

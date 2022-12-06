const convertToCelsius = function(tempFahrenheit) {
  return tempCelsius = Math.round((tempFahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  return tempFahrenheit = Math.round((tempCelsius* (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
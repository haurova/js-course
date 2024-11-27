"use strict";
const forecast = [12, 5, -5, 0, 4];
let message = "";
let message2 = "";

function printForecast(forecast) {
  for (let i = 0; i <= forecast.length - 1; i++) {
    message = message + `... ${forecast[i]} in ${i + 1} days `;
  }
  console.log(message);
}

let message1 = (forecast) => {
  for (let i = 0; i <= forecast.length - 1; i++) {
    message2 = message2 + `... ${forecast[i]} in ${i + 1} days `;
  }
  return message2;
};

printForecast(forecast);
console.log(message1(forecast));

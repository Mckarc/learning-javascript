'use strict';
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     let curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Two array
// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [4, 1, 7, 8, 2, 10, 32, -7, -5, 12, 18, 19];
// const calcTempAmplitudeNew = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     let curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celcius',
//     value: Number(prompt(`Degrees Celsius:`)),
//   };
// console.log(measurement);
// console.table(measurement);

// console.log(measurement.value);
// console.warn(measurement.value);
// console.error(measurement.value);

// const kelvin = measurement.value + 273;
// return kelvin;
// };
// console.log(measureKelvin());

// First challenge

// Create a function printForecast and takes in an array "arr"

// logs a string "... 17 degree C in 1 day ... 21 degree C in 2 days ... 23 degree C in 3 days ..."

// let dataOne = [17, 21, 23];
// let dataTwo = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log(`... ` + str);
// };
// printForecast(dataOne);
// printForecast(dataTwo);

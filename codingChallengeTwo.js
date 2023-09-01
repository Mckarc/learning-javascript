'use strict';
// First challenge
// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };
// Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// let checkWinnner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins`);
//   }
// };
// checkWinnner(scoreDolphins, scoreKoalas);

// Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinnner(scoreDolphins, scoreKoalas);

// Second challenge
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(tip);
// const billCal = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${billCal}`
// );
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, total);

// Third challenge
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else if (mark.bmi < john.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

// Fourth challenge
// const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tipsArr = [];
// const totalsArr = [];

// for (let i = 0; i < billsArr.length; i++) {
//   tipsArr.push(calcTip(billsArr[i]));
//   totalsArr.push(billsArr[i] + tipsArr[i]);
// }
// console.log(billsArr, tipsArr, totalsArr);

// const calcAverageArr = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum / arr.length;
// };
// console.log(calcAverageArr(totalsArr));

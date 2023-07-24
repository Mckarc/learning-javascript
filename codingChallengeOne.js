// First challenge
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 95;
// let johnHeight = 1.88;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// Second challenge
// if (markBMI > johnBMI) {
//   console.log(`Marks's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// Third challenge
let scoresDolphins;
let scoresKoalas;

const averageValue = 3;
const dolphinsDataOne = 96 + 108 + 89;
const koalasDataOne = 88 + 91 + 110;

scoresDolphins = dolphinsDataOne / averageValue;
scoresKoalas = koalasDataOne / averageValue;
console.log(scoresDolphins, scoresKoalas);

if (scoresDolphins > scoresKoalas) {
  console.log(`Dolphins win the trophy 🏆 with ${scoresDolphins}`);
} else if (scoresKoalas > scoresDolphins) {
  console.log(`Koalas win the the trophy 🏆 with ${scoresKoalas}`);
} else if (scoresDolphins === scoresKoalas) {
  console.log(`Both win the trophy 🏆`);
}

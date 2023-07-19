let markMass = 78;
let markHeight = 1.69;
let johnMass = 95;
let johnHeight = 1.88;

let markBMI = markMass / markHeight ** 2;
console.log(markBMI);

let johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

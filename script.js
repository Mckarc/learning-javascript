let fave = Number(prompt("Please enter your favorite number"));
// console.log(Number(fave), typeof fave);

if (fave === 25) {
  console.log("Number is 25");
} else if (fave === 7) {
  console.log("Number is 7");
} else {
  console.log("Number is not 25 or 7");
}

if (fave !== 25) console.log("Why not 25");

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("The day is not valid");
}
const age = 26;
age >= 18
  ? console.log("I will like to drink wine 🍷")
  : console.log("I will like to drink water 💦");

const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(`I will like to drink ${drink}`);

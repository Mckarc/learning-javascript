'use strict';
// let fave = Number(prompt("Please enter your favorite number"));
// console.log(Number(fave), typeof fave);

// if (fave === 25) {
//   console.log("Number is 25");
// } else if (fave === 7) {
//   console.log("Number is 7");
// } else {
//   console.log("Number is not 25 or 7");
// }

// if (fave !== 25) console.log("Why not 25");

// const day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "Thursday":
//     console.log("Today is Thursday");
//     break;
//   case "Friday":
//     console.log("Today is Friday");
//     break;
//   case "Saturday":
//     console.log("Today is Saturday");
//     break;
//   case "Sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("The day is not valid");
// }
// const age = 26;
// age >= 18
//   ? console.log("I will like to drink wine 🍷")
//   : console.log("I will like to drink water 💦");

// const drink = age >= 18 ? "wine 🍷" : "water 💦";
// console.log(`I will like to drink ${drink}`);

// Objects
// const michael = {
//   firstName: "Michael",
//   lastName: "Aderibigbe",
//   birthYear: "1999",
//   jobTitle: "Software Engineer",
//   location: "Nigeria",
//   friends: ["Jonas", "Timothy", "Cash"],
//   hasDriverslicense: true,

// function
//   calcAge: function(birthYear) {
//     return 2029 - birthYear;
//   }
// };

// console.log(michael.firstName, michael.lastName);
// console.log(michael["jobTitle"], michael["location"]); // You can put any expression in the bracket notation

// const nameKey = "Name";
// console.log(michael["first" + nameKey]);
// console.log(michael[`last${nameKey}`]);

// const interestedIn = prompt(
//   "What do you want to know about Michael? Choose between firstName, lastName, jobTitle, and location"
// );
// if (michael[interestedIn]) {
//   console.log(michael[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, jobTitle and location"
//   );
// }

// Add new properties to the object
// michael.location = "Nigeria";
// michael["twitter"] = "@mckarc";
// console.log(michael);

// Exercise
// console.log(
//   `${michael.firstName} has ${michael.friends.length} friends, and his best friend is called ${michael.friends[0]}`
// );

// How to add function to object
// const michael = {
// firstName: "Michael",
// lastName: "Aderibigbe",
// birthYear: "1999",
// jobTitle: "Software Engineer",
// location: "Nigeria",
// friends: ["Jonas", "Timothy", "Cash"],
// hasDriverslicense: true,
// How to add function to object and it is called a method
//   calcAge: function () {
// Using "this" keyword to call the object calling the method with passing the arguments
// console.log(this);
//     return 2029 - this.birthYear;
//   },
// calcAge: function () {
//   this.age = 2037 - this.birthYear;
//   return this.age;
// };

// Exercise
//   getSummaryNew: function () {
//     return `${this.firstName} is a ${this.age}-year old ${
//       this.jobTitle
//     }, and he has ${this.hasDriverslicense ? "a" : "no"} driver's license.`;
//   },
// };
// console.log(michael.calcAge());
// console.log(michael["calcAge"](michael.birthYear));

// console.log(michael.age);
// console.log(michael.age);
// console.log(michael.age);
// console.log(michael.getSummaryNew());

// For loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`lifting weights repitition ${i} 🏋️‍♀️`);
// };

// Looping arrays
// const michaelArray = [
//   "Michael",
//   "Aderibigbe",
//   1999,
//   "Software Engineer",
//   "Nigeria",
//   ["God", "Jonas", "Timothy"],
//   "Industrial and Production Engineer",
//   true,
// ];
// const typeOfMichaelArrays = [];
// for (let i = 0; i < michaelArray.length; i++) {
// Reading from array
// console.log(michaelArray[i], typeof michaelArray[i]);
// Filling types array
// typeOfMichaelArrays[i] = typeof michaelArray[i];
// typeOfMichaelArrays.push(typeof michaelArray[i]);
// };
// console.log(typeOfMichaelArrays);

// const years = [1996, 1999, 2001];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// Continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < michaelArray.length; i++) {
//   if (typeof michaelArray[i] !== "string") continue;
//   console.log(michaelArray[i], typeof michaelArray[i]);
// };
// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < michaelArray.length; i++) {
//   if (typeof michaelArray[i] === "number") break;
//   console.log(michaelArray[i], typeof michaelArray[i]);
// };

// Looping backward
// const michaelArray = [
//   'Michael',
//   'Aderibigbe',
//   1999,
//   'Software Engineer',
//   'Nigeria',
//   ['God', 'Jonas', 'Timothy'],
//   'Industrial and Production Engineer',
// ];

// for (let i = michaelArray.length - 1; i >= 0; i--) {
//   console.log(i, michaelArray[i], typeof michaelArray[i]);
// }

// Loop through loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------Starting exercise ${exercise}------`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetitions: ${rep}`);
//   }
// }

// While loop
// let i = 1;
// while (i <= 10) {
//   console.log(`lifting weights repitition ${i} 🏋️‍♀️`);
//   i++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...by rolling ${dice}`);
// }

//Exercise

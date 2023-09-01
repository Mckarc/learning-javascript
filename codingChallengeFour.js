'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '123 Main St',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// r
// Destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 23;
// const obj = { a: 26, b: 67, c: 81 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// Destructuring arrays
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
//
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//
// Switch variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// receive 2 return values from a function
// const [starter, mainer] = restaurant.order(2, 0);
// console.log(starter, mainer);
// Nested destructuring
// const nested = [2, 1, [4, 5, 6]];
// const [j, , [k, l, m]] = nested;
// console.log(j, k, l, m);

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Spread operator
// const arr = [3, 4, 5];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// Spread operator to join two arrays together
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const newArr2 = [...arr, 6, 7];
// console.log(newArr2);
// console.log(...newArr2);
// Spread operator to push into array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Spread operator Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Spread operator to join 2 or more arrays
// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu2);

// Iterables: arrays, strings, maps, sets. Not objects
// const str = 'Michael';
// const letters = [...str, 's'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
// prompt(`Let's make pasta! ingredient 1?`),
// prompt(`Let's make pasta! ingredient 2?`),
// prompt(`Let's make pasta! ingredient 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Object
// const newRestaurant = { founder: 'Michael', ...restaurant, foundedIn: 2019 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'John';
// console.log(restaurantCopy);
// console.log(restaurant);
// console.log(newRestaurant);

// Rest patterns and parameters for destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

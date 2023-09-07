'use strict';
//Write a JavaScript function that reverses a string.
// Example x = hello;
// Expected Output : olleh
// let nameArr = 'Michael';
// const reverseString = function (str) {
//   let newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
//   return newString;
// };
// reverseString('Michael');

//Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// Understanding the problem
// - Transform number to string
// - Transform string to array
// - Reverse number

// Breaking up into sub-problems
// - Convert number to array
// - Reverse the array
//  - Convert array to number

// const reverseNumber = function (num) {
//   const str = num.toString().split('');
//   let strArr = [];
//   console.log(str);

//   for (let i = str.length - 1; i >= 0; i--) {
//     strArr.push(str[i]);
// console.log(strArr);
//   }
//   strArr = strArr.join('');
//   console.log(strArr);
// };
// const newNum = reverseNumber('12389464464');

// console.log(newNum);

// const reverseNumber = function (num) {
//   num += '';
//   return num.split('').reverse().join('');
// };
// const newNum = reverseNumber(123);
// console.log(newNum);

// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// Understanding the problem
// -  Convert string to letters
// -  Alphabetical order
// -  Exclude punctuation and numbers symbols

// Breaking up into sub-problems
// - Convert string to array
// - Sort array in alphabetical order
// - Convert array to string
// -

// const sortString = function (str) {
//   let newString = '';
//   for (let i = 0; i < str.length; i++) {
//     newString = str
//       .replace(/[^a-zA-Z]/g, '')
//       .split('')
//       .sort()
//       .join('');
//   }

//   console.log(newString);
// };
// sortString('mic#233ha-el');

// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and symbols are not included in the passed string.

// Understanding the problem
// -  Convert string to letters
// -  Alphabetical order
// -  Exclude punctuation and numbers symbols

// Breaking up into sub-problems
// - Convert string to array
// - Sort array in alphabetical order
// - Convert array to string
// -
// const sortString2 = function (str) {
//   let newString = '';
//   for (let i = 0; i < str.length; i++) {
//     newString = str
//       .replace(/[^a-zA-Z0-9]/g, '')
//       .split('')
//       .sort()
//       .join('');
//   }

//   console.log(newString);
// };
// sortString2('mic#233ha-el');

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Understanding the problem
// -   Convert the first letter of each word into upper case
// -   Convert string to array
// -

// Breaking up into sub-problems
// - split the above string into an array of strings
// - whenever a blank space is encountered
// - loop through each element of the array and capitalize the first letter.
// - Join all the elements of the array back into a string
// - using a blankspace as a separator

// const firstLetter = function (str) {
//   let arr = str.split(' ');
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// console.log(arr);
//   }
//   arr = arr.join(' ');
//   console.log(arr);
// };
// firstLetter('i love javascript so much');

// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Understanding the problem
// - find longest word

// Breaking up into sub-problems
// - convert string to array
// - Find longest word
// - Console the longest word within the string
// -
// -

// const longestWord = function (str) {
//   let arr = str.split(' ');
//   let maxlength = 0;
//   let longWord = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxlength) {
//       maxlength = arr[i].length;
//       longWord = arr[i];
//     }
//   }
//   console.log(maxlength);
//   return longWord;
// };
// const result = longestWord(
//   'i love javascript so much that i can write incredible scripts'
// );

// console.log(result);

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Understanding the problem
// - count the number of vowels in the string
// - Y must be a consonant

// Breaking up into sub-problems
// - convert string to array
// - Find the vowels in the string
// - Console the number of vowels in the string
// - Console the vowels in the string
// -

// const getVowels = function (str) {
//   const wordToString = str.split('');
//   let vowelsCount = 0;
//   let vowelsArr = [];
//   for (let i = 0; i < wordToString.length; i++) {
//     if (
//       wordToString[i] == 'a' ||
//       wordToString[i] == 'e' ||
//       wordToString[i] == 'i' ||
//       wordToString[i] == 'o' ||
//       wordToString[i] == 'u'
//     ) {
//       vowelsArr.push(wordToString[i]);
//       vowelsCount += 1;
//     }
//   }
//   console.log(`This is the array of the string: ${vowelsArr}`);
//   return `${vowelsCount} is the number of vowels`;
// };
// console.log(
//   getVowels(
//     'Edit Your phone is verified with Fiverr. Click Edit to change your phone number'
//   )
// );

// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Understanding the problem
// - check if a number is prime or not
// - console

// Breaking up into sub-problems
// - check if a number is divisible by a number 1 or itself
// - console if a number is prime or not

const isPrime = function (num) {
  if (num % 1 === num || num % num === 0) {
    return true | false;
  }
};
console.log(isPrime(2));

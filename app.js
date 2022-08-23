// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.
const fruits = [
  { name: "apples", available: true },
  { name: "pears", available: true },
  { name: "oranges", available: false },
  { name: "bananas", available: true },
  { name: "blueberries", available: false },
];
console.log(createList(fruits));
function createList(arr) {
  let array = [];
  arr.forEach((element) => {
    if (element.available == true) {
      array.push(element.name);
    }
  });
  return array;
}

//---------------------------------------------------------------
// Q2:
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3]) returns ['odd','even','odd'].

const numbers = [1, 2, 3];
const newArr = numbers.map(evenOdd);

function evenOdd(num, ind, arr) {
  if (num % 2 == 0) return "even";
  else {
    return "odd";
  }
}

console.log(newArr);

//-----------------------------------------
// Q3:
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

let arr1 = [1, 2, 3],
  arr2 = [1, 2, 3, 4, 5, 6, 7];
function notInFirstArray(arr1, arr2) {
  return arr2.filter((item) => !arr1.includes(item));
}
console.log(notInFirstArray(arr1, arr2));
//--------------------------------------------------

//Q4 :
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.

// let rString = function reversedString(e) {
//   return e.split("").reverse().join("");
// };

// console.log(rString("hello"));

const reversedString = (string) => {
  const newArray = string.split("");
  const reverseArray = [];
  newArray.reduce((acc, ele) => {
    acc = ele;
    reverseArray.unshift(acc);
  }, []);
  string = reverseArray.join("");
  return string;
};

let string = "Hello";
console.log(reversedString(string));
//--------------------------------------------------
// Q5:
// Write a function named isNum that takes in a string or number of any length.
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false

function isNum(str) {
  let pattern = /\d/;
  return pattern.test(str);
}

console.log(isNum(12345));
console.log(isNum("12345"));
console.log(isNum("h3llo world"));
console.log(isNum("hello world"));

// Q6:
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.

const matchMonth = (ge) => {
  const expr = /\bOctober|Oct\b/i;
  const result = expr.test(ge);
  return result;
};

let input = prompt("In which month is Halloween?");
console.log(matchMonth(input));

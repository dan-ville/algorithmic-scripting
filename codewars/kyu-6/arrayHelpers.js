// www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!
// Example

// var numbers = [1, 2, 3, 4, 5];

// this.square();  // must return [1, 4, 9, 16, 25]
// this.cube();    // must return [1, 8, 27, 64, 125]
// this.average(); // must return 3
// this.sum();     // must return 15
// this.even();    // must return [2, 4]
// this.odd();     // must return [1, 3, 5]


// MY SOLUTION: PASSED
Array.prototype.square = function (numbers) {
  return this.map(num => num * num)
};

Array.prototype.cube = function (numbers) {
  return this.map(num => (num * num * num));
};

Array.prototype.average = function (numbers) {
  if (this.length === 0) return NaN;
  return this.reduce((a, b) => a + b) / this.length;
};

Array.prototype.sum = function (numbers) {
  return this.reduce((a, b) => a + b);
};

Array.prototype.even = function (numbers) {
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function (numbers) {
  return this.filter((num) => num % 2 !== 0);
};


const numbers = [1, 2, 3, 4, 5];
// const numbers = []

const test1 = numbers.square()
const test2 = numbers.cube()
const test3 = numbers.average()
const test4 = numbers.sum();
const test5 = numbers.even();
const test6 = numbers.odd();
// console.log(numbers.cube())

console.log({test1, test2, test3, test4, test5, test6})

// other nice solutions
Object.assign(Array.prototype, {
  square() {
    return this.map((n) => n * n);
  },
  cube() {
    return this.map((n) => Math.pow(n, 3));
  },
  sum() {
    return this.reduce((p, n) => p + n, 0);
  },
  average() {
    return this.reduce((p, n) => p + n, 0) / this.length;
  },
  even() {
    return this.filter((n) => !(n % 2));
  },
  odd() {
    return this.filter((n) => n % 2);
  },
});

// And a solution that does not use higher order array methods from ES6+
Array.prototype.square = function () {
  var squared = [];
  for (var i = 0; i < this.length; i++) {
    squared[i] = Math.pow(this[i], 2);
  }
  return squared;
};

Array.prototype.cube = function () {
  var cubed = [];
  for (var i = 0; i < this.length; i++) {
    cubed[i] = Math.pow(this[i], 3);
  }
  return cubed;
};

Array.prototype.sum = function () {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

Array.prototype.average = function () {
  if (this.length == 0) return NaN;
  return this.sum() / this.length;
};

Array.prototype.even = function () {
  var evens = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) evens.push(this[i]);
  }
  return evens;
};

Array.prototype.odd = function () {
  var odds = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 1) odds.push(this[i]);
  }
  return odds;
};
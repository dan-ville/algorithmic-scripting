https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Note that the input array may not have the numbers order from lowest to highest.

// first solution
function sumAll(arr) {
    // First we need to save the lowest and highest number to a corresponding variable in case they are not ordered from lowest to highest when passed in
    // This ensures that the for loop (created later) can iterate properly from lowest to highest
  
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    
    const nums = [];
  
    for (let i = min; i <= max; i++) {
      nums.push(i);
    }
  
    return nums.reduce((a,b) => a + b)
}

// second solution
// after seeing the freeCodeCamp solution, I realized that I had been using ES6 methods for so long that I forgot that summing can be a lot simpler lol. This is roughly the same amount of code, but a more rudimentary solution.
function sumAll(arr) {  
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
}
  
let testA = sumAll([1, 4]);
let testB = sumAll([4, 1]);
let testC = sumAll([5, 10]);
let testD = sumAll([10, 5]);

console.log({testA, testB, testC, testD});

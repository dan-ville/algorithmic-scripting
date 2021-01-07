// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {

    for (let el of arr) {
       if (func(el) === true) {
        return el
      }
    }
  
    return undefined
}

// turns out JavaScript already has a built in function that literally for the sole purpose of achieving this challenge
function findElement2 (arr, func) {
    return arr.find(func);
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
// should return 8.

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
// should return undefined. 
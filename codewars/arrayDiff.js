// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x));
}

// other solution

// function arrayDiff (a, b) {
//    return a.filter(elem => b.indexOf(elem) === -1)
// };

let test1 = arrayDiff([1,2],[1]);
let test2 = arrayDiff([1,2,2,2,3],[2]);

console.log(test1);
console.log(test2);
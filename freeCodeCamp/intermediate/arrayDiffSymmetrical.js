// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

// A good SE resource on this: 
// https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

function diffArray(arr1, arr2) {
    return arr1.filter(e => !arr2.includes(e)).concat(arr2.filter(e => !arr1.includes(e)));
};

let test1 = diffArray([1,2,3,5], [1,2,3,4,5]);
let test2 = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


console.log({test1, test2}
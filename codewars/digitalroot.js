// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digital_root(num) {
    // turn number into a string 
    let numStr = num.toString();

    // split to get an array of the numbers in string form
    // map with parseInt to turn them back into integers  
    let numArr = numStr.split("").map(el => parseInt(el));
   
    // use reduce to get the sum of all elements in the array
    let sum = numArr.reduce((acc, val) => acc + val)
    return sum

    // now I gotta make it recursive so that it repeats until the sum is one digit
}

let test1 = digital_root(123);
let test2 = digital_root(123456789);
let test3 = digital_root(1902389823572895);

console.log({test1, test2, test3});
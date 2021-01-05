https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(num) {
    if (num < 10) {
        return num
    } 
    while (num >= 10) {
    // turn number into a string 
    let numStr = num.toString();

    // split to get an array of the numbers in string form
    // map with parseInt to turn them back into integers  
    let numArr = numStr.split("").map(el => parseInt(el));

    // use reduce to get the sum of all elements in the array
    let sum = numArr.reduce((acc, val) => acc + val)
    return digital_root(sum)
    }
}

// the ridiculous top solution using modulo 9 number theory
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

let test1 = digital_root(123);
let test2 = digital_root(123456789);
let test3 = digital_root(1902389823572895);
let test4 = digital_root(9);
let test5 = digital_root(942);
let test6 = digital_root(493193)

console.log({test1, test2, test3, test4, test5, test6});
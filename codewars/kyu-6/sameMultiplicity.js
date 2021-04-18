// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Example
// Valid arrays

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// function would return true ^

// My solution: passed
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  // this guard clause had to be inserted only because in the case of either array being initialized but being empty, they would not be "null" and they would technically be "the same". This case needed to return true to pass the kata, but I think it's a flaw in the question because two empty arrays are only the same in the way that nothing is the same as nothing.  
  if (array1.length === 0 || array2.length === 0) {
    return true;
  }

  const array1result = array1.reduce((a, b) => a + b);
  const array2result = array2
    .map((num) => Math.sqrt(num))
    .reduce((a, b) => a + b);

  return array1result === array2result;
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const test1 = comp(a1, b1)


console.log({test1})

// Many of the solutions on Codewars had something similar to this:

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

// I think the approach looks cleaner at first, but it takes the unnecessary step of sorting both arrays when the question is only asking to evaluate whether the multiplicities of the arrays are the same, and that the order of the items doesn't matter. You don't need to sort them for that, you just need to check if the sum of one array is equal to the sum of the square roots of the other array. Or conversely, that that the sum of one of the arrays is equal to the sum of the squares of the other array.  

// In other words, the approach with every() is only needed because they sorted the arrays in the first place. 
// It looks very clean, but I think it's not so optimized because it involves much more iteration.

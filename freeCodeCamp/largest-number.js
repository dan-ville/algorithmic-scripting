// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    // create an array to hold the max num in each sub array
    const maxNums = [];
    
    // loop through each subarray to...
    for (let subArr of arr) {
      // find the max and add it to the maxNums array
      maxNums.push(Math.max(...subArr));
    }
    
    return maxNums;
}

// Tests
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// should return [27, 5, 39, 1001]  
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// Solution 1
// This was my way of doing it
function frankenSplice(arr1, arr2, n) {
    // copy arr2 from start to n
    let front = arr2.slice(0,n); 
    // copy arr2 from n to end
    let back = arr2.slice(n); 
    // create new arr using spread syntax
    let arr3 = [...front, ...arr1, ...back];
  
    return arr3;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Solution 2; FCC used both splice and slice with spread syntax
function frankenSplice2(arr1, arr2, n) {
    // first, copy arr2 into a new array
    let newArr = arr2.slice();
    // use splice to change newArr in place 
    newArr.splice(n, 0, ...arr1);
    // return the new array
    return newArr
}

// Solution 3; this is how to complete this challenge without the luxury of spread syntax
// we use a regular for loop because we should assume that if we can't use spread syntax, we also wouldn't use other ES6 syntax like for...of loops
function frankenSplice3(arr1, arr2, n) {
    // make a copy of arr2
    let newArr = arr2.slice(); // when you give slice no arguments, it just gives you a copy of the array it is called on
    // use a for loop to add arr1 elements to newArr
    // in every iteration, you must change the arr. This will be a perfect job for splice()
    for (let i=0; i < arr1.length; i++) {
        arr2.splice(n, 0, arr1[i]);
        // increment n so that the next iteration will make splice start at the next element of arr2
        n++;
    }
    return newArr;
}
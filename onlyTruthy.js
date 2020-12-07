// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// My solution
function bouncer(arr) {
    let trueArr = [];
    
    for (let i of arr) {
      if (i) {
        trueArr.push(i);
      }
    }
  
    return trueArr;
}

// FCC Solution
// As it turns out, the filter() method pretty much has this capability built in. A lovely one-liner.
function bouncer2(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
  
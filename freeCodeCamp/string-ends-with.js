function confirmEnding(str, target) {
    let sliced = str.slice(str.length - target.length);
    if (sliced === target) {return true} else return false;
    // it's a bit easier to read on two lines, but the value of sliced could just go directly in the if statement condition
}

// Explanation:
// slice retrieves a section of a string and returns a new string, without modifying the original
 // we can figure out which index to start slicing at by using the length property on the str and target arguments

 
confirmEnding("Bastian", "n");

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

confirmEnding("Abstraction", "action");
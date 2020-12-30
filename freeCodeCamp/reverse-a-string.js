// Write a function that takes a string and reverses it

function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
}
  
reverseString("hello");

// Explanation:
// Using split() with empty quotes tells the method to split the string at each character. The method creates an array of every character in the string.
// reverse() reverses the items in the array
// join() is the opposite of split; it takes the individual characters of the array and joins them into a string

// A for loop can also be used as a solution
function reverseString(str) {
    // for loop works in reverse (decrements i) and sets a variable reversedStr to be used only in the loop. The variable can also be initialized outside the loop with no change to the functionality.
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}
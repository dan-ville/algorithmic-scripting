// Return the length of the longest word in a given sentence
// the result should be a *number*

// solution:
function findLongestWordLength(str) {
    // use regex to extract words from string
    let regex = /\w+/ig;
  
    // store an array with all the words of the string
    let words = str.match(regex);
    console.log(words);
  
    // create an array of the lengths of each word
    let lengths = words.map(word => word.length)
    
    // find and return the max
    return Math.max(...lengths)
  }

// TESTS

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.


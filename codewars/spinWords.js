// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    //TODO Have fun :)
    const words = string.split(" ");
    console.log(words);

    const reversedWordsString = [];

    for (let word of words) {
        if (word.length >= 5) {
            const letters = word.split("");
            reversedWordsString.push(letters.reverse().join(""));
        } else {
            reversedWordsString.push(word);
        }
    }

    return reversedWordsString.join(" ");
}

// another great solution using ternary operator and map method
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

let test1 = spinWords("Welcome");
let test2 = spinWords("Hey fellow warriors");

console.log({test1, test2})
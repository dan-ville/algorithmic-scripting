// https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); --> igPay atinlay siay oolcay
// pigIt('Hello world !'); --> elloHay orldway !

function pigIt(str) {
    const words = str.split(" ");

    const pigWords = [];

    for (let word of words) {
        
        if (word !== "!" && word !== "?") {
            let letters = word.split("");
            // remove the first letter
            let first = letters.shift();
            // push first letter to end of array and add 'a', 'y'
            letters.push(first, 'a', 'y');
            //join letters into the new pig latin word
            let pigWord = letters.join("");
            
            pigWords.push(pigWord);
        } else if (word === "!") {
            pigWords.push("!");
        } else if (word === "?") {
            pigWords.push("?")
        }
   }
   return pigWords.join(" ");
}

// solution using regex
// I knew the top codewars solution would be using regex, and I was right:
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// I need to learn more regex

let test1 = pigIt("this is awesome !");

console.log(test1)
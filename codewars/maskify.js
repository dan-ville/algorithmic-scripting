// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// *---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*

// My noob solution
// // I decided not to use replace because I wanted to do it the hard way, but it turns out that's the wrong approach to coding LOL. 
function maskify (string) {
    if (string.length <= 4) {
      // if the string is shorter than 4 characters
      // simply return the string
      // since it's too short to need masking
      return string
    } 
    else {
      // split string into an array of characters
      let chars = string.split("")
    
      // grab characters all the way up to the last 4
      // use map replace the characters with #'s
      let firstPiece = chars
          .slice(0, chars.length-4)
          .map(char => "#");
      
      // grab last 4 characters
      let lastPiece = chars.slice(chars.length-4);
      
      // concatenate firstPiece and lastPiece arrays and then use join() to turn the concatenated arrays intoa string
      // join must be called with "" passed in or else the characters will be separated by commas
      return firstPiece.concat(lastPiece).join("");
    } 
}


// Top solution on CodeWars
function maskify(string) {
    return string.slice(0, -4).replace(/./g, '#') + string.slice(-4);
}


// *---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
// TESTS 
let test1 = maskify("23k2kn234kn09i09834288kskksm")
let test2 = maskify("abc")
let test3 = maskify("1214")
let test4 = maskify("bananananananana batman!")
let test5 = maskify("yoroshikuneonegaishimasu")

console.log({test1, test2, test3, test4, test5})


// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let newStr = "";
    // you need a regular for loop so you can specify the number of times to iterate
    for (let i = 0; i < num; i++) {
         if (num <= 0) {
           return "";
         } else {
           newStr += str        
         }
     }
     console.log(newStr)
     return newStr;
};
 
repeatStringNumTimes("abc", 2);

// A while loop is cleaner
function repeatStringNumTimesV2(str, num) {
     let newStr = "";

     while (num > 0) {
         newStr += str;
         num--;
     }

     return newStr;
};

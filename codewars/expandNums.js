https://www.codewars.com/kata/5842df8ccbd22792a4000245

// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm (num) {
    // turn num into a string number so it can be split
    let numStr = num.toString();
    // separate the digits in the number
    const digitsArray = numStr.split("");
    console.log(digitsArray);

    const expandedNum = [];
    let placeValue = 1;
    // loop through the digits, multiplying each one by the next multiple of 10 for each increase in its index position
    // the loop has to go backwards through the array because the placeValue values increase by multiples of 10 from right to left
    for (let i = digitsArray.length - 1; i >= 0; i--) {
        // multiply the current digit by the placeValue value, which was initialized as a global variable starting at 1
        let digitValue = placeValue * digitsArray[i];
        // push that number to a new array
        expandedNum.push(digitValue);
        // multiply the placeValue variable by 10 to set place value for the next digit
        placeValue *= 10;
    }

    // the result of the for loop gets you the expandedNum array, but all the numbers are ordered in reverse in the array
    // we need to return the expandedNum but reverse it and the join the elements of the array into a string with + signs separating each number
    // the array will also contain 0s, so we need to filter those out
    return expandedNum
        .reverse()
        .filter(digit => digit !== 0)
        .join(" + ")
        
}

// TOP CODEWARS SOLUTION
// typically, the best solutions prefer to use chained methods to manipulate the argument that is passed in, rather than creating local variables inside the function declaration and manipulating those. The chained methods offer a cleaner code that is easier to understand because you don't have to keep track of all the variables and because these methods are included in JavaScript for precisely these jobs. 

const expandedForm = n =>
    n.toString() 
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");


// EXPLANATION; using example expandedForm(3501)
// the argument starts off as a type integer, 3501
// the argument is made into a string with toString() so that it can be split into an array of separate digits
// split("") then turns it into an array by splitting at each character in the string --> ['3', '5', '0', '1']
// now we reverse the array with reverse(), giving us the array ['1', '0', '5', '3']. This is done because in the next step we need to multiply each digit in the array by a multiply of 10, and numbers go up in place value from right to left, but all iterators loop from left to right. We will have to reverse the array again later to return the number to the proper order of digits.
// at this point, our array is ordered such that the iterator will properly multiply each subsequent element in the array by its corresponding multiple of 10. Since it's just a series of 10's, it can be recognized as powers of 10, and we can use the Math.pow() function.
// Since using a regular for loop here would require breaking out of the method chain, we can use the map() method instead.
// To use the map method here, we have to make use of its ability to take multiple parameters in its callback; the first parameter is the currentValue, the current element being processed, and the second is the index of the current element. 
// Implement map like this: map( (a, i) => a * Math.pow(10, i))
// map will loop over all the elements, a being the in place variable that represents the current element, and multiply each element by 10 to the power of i. The variable i gets incremented by 1 after each iteration, ensuring that every number in the array gets multiplied by the next multiple of 10.
// In essence, it would look like this:
    // iteration 1: 1 * 10^0 = 1
    // iteration 2: 0 * 10^1 = 0
    // iteration 3: 5 * 10^2 = 500
    // iteration 4: 3 * 10^3 = 3000
// filter is necessary next, but we will skip the explanation right now and come back to it at the end
// right now, the array of numbers would be: [1, 0, 500, 3000]
// once we reverse() again, it will be: [3000, 500, 0, 1]
// then, joining each element of the array separated a "+" sign would be implemented to return the string containing the expanded number form. To implement join like that, use join(" + "), and the returned string will be "3000 + 500 + 0 + 1".
// Now we see why filter is necessary; if the number passed in contained any zeros, we need to filter them out, or else they will show up in the expanded form. Therefore, we use filter(a => a > 0), which will return an array with only numbers which are greater than 0.
// That's the full explanation of the solution. It took a while, but it was beautiful.

// Others on codewars have suggested improvements such as using the exponentiation operator in map, i.e. map( (a, i) => a * (10 ** i)), or refactoring the code to not use reverse twice. Others suggested a solution that uses less recursion, thereby making it faster. But this looks very clean already.



let test1 = expandedForm(35); 
let test2 = expandedForm(42);
let test3 = expandedForm(70304);

console.log({test1, test2, test3})
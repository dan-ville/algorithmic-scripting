// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''

// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// -----------------------------------------------------------------------

// My solution (passed):
function list(names) {
    // console.log(names.length - 1)
    let string = "";

    if (names.lenth === 0) {
        return string
    }

    names.forEach((name, index) => {
        string += ` ${name.name}` 
    })

    const regexp = /" "/g
    return string.trim().replace(regexp, " ")
}

//  Favorite codewars solution:
var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")


const test1 = list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);

console.log(test1)
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// Example:

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff (a, b) {
    for (let match of b) {
        console.log(`currently searching array a matches of: ${match}`)

        for (let i=0; i < a.length; i++) {
            if (a[i] === match) {
                console.log(`match found at  index: ${i}, value: ${a[i]}`);
                console.log(a);
            }
        }
    }

    return a
};

let test1 = arrayDiff([1,2,2,1,2,3], [2, 3]);
// let test2 = arrayDiff([17,-15,3,4,-6,-13,-11],[17,-13,3])
// let test3 = arrayDiff([1,2,"a","b",3,"c"],["a","b","c"])
console.log(test1)
// console.log({test1, test2, test3})
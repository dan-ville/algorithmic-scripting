// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num) {
        // slice() can be used instead of substring
        return str.substring(0, num) + "...";
    } else return str
}
  
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);


// Reference for substring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
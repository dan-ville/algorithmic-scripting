// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// solution 1
function booWho(bool) {
    if (bool === true || bool === false) {
      return true;
    } return false
  }
  
  booWho(null);
  
// solution 2, more simple
function booWho2(bool) {
    return typeof bool === "boolean"
}
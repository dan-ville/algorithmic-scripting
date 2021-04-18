// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

// TODO: Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.
// Examples

// Valid inputs:

// 1.2.3.4
// 123.45.67.89

// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str) {
  const octets = str.split(".");

  const conditions = (substr) => {
    if (/[^0-9]/.test(substr)) {
      return false;
    } else if (parseInt(substr) < 0 && parseInt(substr) > 255) {
      return false;
    } else if (substr.indexOf(0) === 0 && substr.length !== 1) {
      return false;
    } else {
      return true;
    }
  };

    console.log(octets.some((sub) => sub));

  if (
    octets.length === 4 &&
    octets.some((substr) => !conditions(substr)) 
  ) {
    return true;
  } else {
    return false;
  }
}

isValidIP("0.0.0.0")
isValidIP("12.255.56.1")
isValidIP("137.255.156.100")

isValidIP("")
isValidIP("abc.def.ghi.jkl")
isValidIP("123.456.789.0")

isValidIP("12.34.56")
isValidIP("01.02.03.04")
isValidIP("256.1.2.3")

isValidIP("1.2.3.4.5")
isValidIP("123,45,67,89")
isValidIP("1e0.1e1.1e2.2e2")

isValidIP(" 1.2.3.4")
isValidIP("1.2.3.4 ")
isValidIP("12.34.56.-7")

isValidIP("1.2.3.4\n")
isValidIP("\n1.2.3.4")

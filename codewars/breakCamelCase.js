// #regexp #strings
//www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// solution("camelCasing")  ==  "camel Casing"


// using a function as an argument to show procedure logically
https: function solution(string) {
  const regex = /[A-Z]/g;
  return string.replace(regex, (regex) => ` ${regex}`);
}

// using the special replacement pattern {$&} performs the same logic but is more *synctatic sugar*
function solution(string) {
  const regex = /[A-Z]/g;
  return string.replace(regex, ` $&`);
}

const test1 = solution("camelCasing");
const test2 = solution("camelCasingTest");
const test3 = solution("iHateSinAlot");
console.log({ test1, test2, test3 }); // "camel Casing";

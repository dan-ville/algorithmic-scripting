//www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[AEIOU]/gi, "");
}

// this one was easy, first try
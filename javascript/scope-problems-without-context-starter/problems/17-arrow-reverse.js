/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

// your code here!
let arrowReverseString = str =>
{
  let arr=str.split('');
  let arr2=[];
  arr.forEach(function(letter){
    arr2.unshift(letter);
  });
  return arr2.join("");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
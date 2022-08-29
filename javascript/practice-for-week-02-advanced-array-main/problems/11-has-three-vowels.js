/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    return (string.split('').reduce(function(accumulator, arg){
        switch(arg.toLowerCase())
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                if(!accumulator.includes(arg.toLowerCase()))
                {
                    accumulator.push(arg);
                    return accumulator;
                }
            default:
                return accumulator;
        }
    },[]).length > 2);
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}

/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function(sentence) {
    let arr=[];
    sentence.split(" ").forEach(function(arg){
        arr.push(translateWord(arg));
    });
    return arr.join(" ");
};


let translateWord = function(word) {
    // Your code here
    let lastIndex = word.split("").reduce(function(lastIndex, arg, index){
        switch(arg.toLowerCase())
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                if(index > lastIndex)
                {
                    return index;
                }
                else{

                    return lastIndex;
                }
            default:
                return lastIndex;
        }
    },0);
    if(word.length < 3)
    {
        return word;
    }
    if(lastIndex===word.length-1)
    {
        return word.slice(0) + word.slice(0);
    }
    else{
        return word.slice(0) + word.slice(lastIndex);
    }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}

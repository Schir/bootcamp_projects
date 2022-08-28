//a bunch of function exercises that I did

function eCounter(word) {
    let count = 0;
      let index =0
       while(index < word.length) {
      let char = word[index];
      if (char === "e" || char === "E") {
        count += 1;
      }
      index++
    }
  
    return count;
  };
  
  console.log(eCounter("apple")); // => 1
  console.log(eCounter("appleapple")); // => 2
  console.log(eCounter("Appleee")); // => 3
  console.log(eCounter("eeeeeeeeeeeee")); //=>13

  function aCounter(word) {

    let count = 0;
    for(let index=0;index < word.length;index++) {
      let char = word[index];
      if (char === "a" || char === "A") {
        count += 1;
      }
    }
    return count;
  };
  
  console.log(aCounter("apple")); // => 1
  console.log(aCounter("appleapple")); // => 2
  console.log(aCounter("aAapple")); // => 3

// your code here
function hasVowel(str)
{
    for(let i=0;i<str.length;i++)
    {
        switch(str[i].toLowerCase())
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                break;
        }
    }
    return false;
}





console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false

function countVowels(word) {
    // your code here...
    let count = 0;
    for(let i=0;i<word.length;i++)
    {
        switch(word[i].toLowerCase())
        {
              case 'a':
              case 'e':
              case 'i':
              case 'o':
              case 'u':
                  count++;
              default:
                  break;
        }
    }
    return count;
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    let index1=0;
    //if it starts with a vowel, just return it with yay
    if(vowelChecker(word[0].toLowerCase()))
      {
          return `${word}yay`;
      }
      else
      {
          for(let i=1;i<word.length;i++)
          {
              //otherwise check for the first position of a vowel and then slice it
              if(vowelChecker(word[i]))
              {
                //index1 is vestigial, but I only realized that after I'd already finished writing it 
                  index1=i;
                  return `${word.slice(index1, word.length)}${word.slice(0,index1)}ay`
              }
          }
      }
  };
  
  //in the exercises I was just copying this in every time it asked me to do something with checking vowels
  //way faster than writing it from scratch every time
  //could probably add in 'A', 'E', 'I', 'O', 'U', but :effort:
  //just chuck in a toLowerCase() before calling this
  function vowelChecker(letter)
  {
      //fall through the vowels if it's true, return false if it's not one of those five 
      switch(letter)
      {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
              return true;
          default:
              return false;
      }
  }
  
  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"

// your code here
function abbreviate(word)
{
    let s=""
    for(let i=0;i<word.length;i++)
    {
        if(!vowelChecker(word[i].toLowerCase()))
        {
            s += word[i]
        }
    }
    return s
}




console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'



//the exercise here was to elongate a string that followed the format x#x#x#x#

function uncompress(str)
{
    //so first we're going to set something to be the character we're adding
    let currentletter=str[0]
    //and then initialize a string that we'll return at the end
    let string = ""
    //now we go through the input
    for(let i=0; i<str.length;i+=2)
    {
        //and set the current letter to be the letter at index i.
        currentletter=str[i]
        //now the input follows the format x#x# so we should be good to hack around this
        //so as long as none of the testcase numbers are two digits long we can just check the next index and read that as a number 
        let count = numberChecker(str[i+1])
        //and then add the current letter to the return string that many times (works up to #=9)
        for(let j=0; j < count; j++)
        {
            string += currentletter
        }
    }
    return string
}

//vestigial function that I only realized was pointless after finishing the exercise
function numberChecker(number)
{
    return Number(number)
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'


// Your code here
function tripletTrue(word)
{
    for(let i=0;i<word.length-2;i++)
    {
        if(word[i] === word[i+1] && word[i]===word[i+2])
        {
            return true
        }
    }
    return false
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false


// Your code here
function sillyString(word){
    let str=""
    for(let i=0;i<word.length;i++)
    {
        //check if the letter's a vowel
        if(vowelChecker(word[i].toLowerCase()))
        {
            //if so, repeat the vowel twice with a b in between
            //does this make any sense? no, but it's what the spec asked for
            //so who am I to ask
            str += `${word[i]}b${word[i]}`
        }
        else
        {
            //if it's not a vowel, just return the character at index i
            str += word[i]
        }
    }
    return str
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber


// Your code here
function moreDotLessDash(string)
{
    //set up two variables to count up dots and dashes
    let dotCount=0;
    let dashCount=0;
    for(let i=0; i<string.length;i++)
    {
        //don't want to write an if/else so I'm just chucking it through a gussied-up goto
        switch(string[i])
        {
            case '.':
                dotCount++
                break;
            case '-':
                dashCount++
                break;
            default:
                break;
        }
    }
    return (dotCount>dashCount)
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

function hasThreeVowels(word)
{
    let count="";
    for(let i=0;i<word.length;i++)
    {
        if(vowelChecker(word[i].toLowerCase()))
        {
            if(count.indexOf(word[i].toLowerCase()) === -1)
            {
                count += word[i].toLowerCase()
            }
        }
    }
    return (count.length >= 3)
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

function lastIndex(str, char) {
    //just start at the end and return the first instance that char shows up
    for(let i =str.length-1;i>0;i--)
    {
        if(str[i]===char)
        {
            return i
        }
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7

function doubleLetterCount(string) {
    // your code here
    let count=0;
    for(let i = 0; i< string.length-1;i++)
    {
        if(string[i]===string[i+1])
        {
            count++
        }
    }
    return count
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1

function caesarCipher(string, num) {
    // your code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let str = ""
    let index;
    for(let i=0; i < string.length;i++)
    {
        index = (alphabet.indexOf(string[i]) + num) % 26
        str += alphabet[index]
    }
    return str
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"


function vowelCipher(string) {
    // your code here
    let newstr=""
    for(let i=0; i < string.length;i++)
    {
        newstr += vowelShifter(string[i])
    }
    return newstr
}

//making this its own function to separate out the logic a bit,
//this feels easier
function vowelShifter(character)
{
    switch(character)
    {
        case 'a':
            return 'e'
        case 'e':
            return 'i'
        case 'i':
            return 'o'
        case 'o':
            return 'u'
        case 'u':
            return 'a'
        default:
            return character
    }
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"


function longestName(names) {

    // Set the first name to be the longest
    let currentLongest = names[0];

    // Check each other name in the array starting from the second
    for (let i = 1 ; i < names.length ; i++) {

        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if(names[i].length > currentLongest.length) {
            currentLongest = names[i];
        }

    }

    return currentLongest;
}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Christopher"

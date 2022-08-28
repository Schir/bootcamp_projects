//Write a function hasDoubleLetter(str) that accepts a string. The function 
//should return a boolean indicating whether the string contains two of the 
//same character consecutively. If the value passed into the function is not a 
//string, return null.
function hasDoubleLetter(str)
{
    //check type
    if(typeof(str) !== 'string')
    {
        return null;
    }
    //iterate over string
    for(let i=0;i<str.length-1;i++)
    {
        if(str[i] === str[i+1])
        {
            return true;
        }
    }
    return false;
}
console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null


//Write a function firstVowel(str) that takes in a string and returns the
//first vowel that appears sequentially in the string. If the string does
//not contain a vowel, return null.
function firstVowel(str)
{
    if(typeof(str)!=='string')
    {
        return null;
    }
    for(let i=0;i<str.length;i++)
    {
        if(vowelChecker(str[i]))
        {
            return str[i];
        }
    }
    return null;
}
//bringing old faithful vowelChecker back again. gonna add capital letters to it this time because I /will/ forget.
function vowelChecker(letter)
{
    //fall through the vowels if it's true, return false if it's not one of those five 
    switch(letter)
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
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
console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null


//Write a function lastVowel(str) that takes in a string and returns the 
//last vowel that appears sequentially in the string. 
//Note that the string may contain capitalization.
//Hint: You may find the String.toLowerCase() or String.toUpperCase() methods useful.
function lastVowel(str)
{
    if(typeof(str)!== "string")
    {
        return null;
    }
    for(let i=str.length-1;i>-1;i--)
    {
        if(vowelChecker(str[i]))
        {
            return str[i];
        }
    }
    return null;
}
console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null


//Write a function minValue(nums) that takes in an array of numbers as an arg. 
//The function should return the smallest number of the array. 
//If the array is empty, the function should return null.
function minValue(nums)
{
    if(!(Array.isArray(nums)) || nums.length === 0)
    {
        return null;
    }
    let min = nums[0];
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i] < min)
        {
            min = nums[i];
        }
    }
    return min;
}
console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null


//Write a function avgVal(arr) that accepts an array as an arg. 
//The function should return the average of all values in the array. 
//If the array is empty, it should return null.
function avgVal(arr)
{
    if(!(Array.isArray(arr)) || arr.length === 0)
    {
        return null;
    }
    let sum=0;
    for(let i=0; i < arr.length;i++)
    {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null


//Write a function maxValue(nums) that takes in an array of numbers as an arg. 
//The function should return the largest number of the array. 
//If the array is empty, the function should return null.
function maxValue(nums)
{
    if(!(Array.isArray(nums))||nums.length===0)
    {
        return null;
    }
    let maxSoFar = nums[0];
    for(let i=1; i<nums.length;i++)
    {
        if(nums[i] > maxSoFar)
        {
            maxSoFar = nums[i];
        }
    }
    return maxSoFar;
}
console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null


//Write a function reverb that accepts a word as an argument. 
//The function should return a new word where all letters that come after the last vowel 
//(including the vowel itself) are repeated at the end of the word. 
//If the value passed in is not a string, 
//say someone passes in a number as an argument, then return null.
function reverb(str)
{
    if(typeof(str)!=="string")
    {
        return null;
    }
    let string = "";
    for(let i = str.length-1;i>-1;i--)
    {
        if(vowelChecker(str[i]))
        {
            return str + str.slice(i, str.length);
        }
    }
    return null;
    
}
console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null

//Write a function prevPrime that accepts a number as an argument. 
//The function should return the nearest prime number that is smaller than the given argument. 
//Since 2 is the smallest prime number, return null if no number can be returned.
function prevPrime(number)
{
    if(typeof(number)!== "number")
    {
        return null;
    }
    for(let i=number-1;i>2;i--)
    {
        if(isPrime(i))
        {
            return i;
        }
    }
    return null;
}
function isPrime(number)
{
    //alright, let's start with some base cases. 1 and 2 are weird exceptions so let's check for those first.
    //I like switches and I think this looks cleaner than a messy if statement
    switch(number)
    {
        case 1:
            return false;
        case 2:
            return true;
        default:
            break;
    }
    //I still like switches, so let's use another one here to just start to sift out some things quickly
    //and make the control flow a bit clearer. gonna check for even numbers first to let me cut down
    //the search space by half
    switch(number%2){
        case 0:
            //besides 2, no even numbers are prime, and anything that's a multiple of an even number 
                    //will also be a multiple of 2.
            return false;
        case 1:
            //since we've cut out all the even numbers, the only ones left are odd numbers greater than 1.
            for(let i=3; i<number; i+=2)
            {
                if(number % i === 0)
                {
                    return false;
                }
            }
            //if we've hit number and nothing's returned yet, it must be prime. 
            //unless they've entered a negative number. don't enter negative numbers.
            return true;
        default:
            return null;
    }
}
console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null

//Write a function additionMutator that accepts an array and a number as an arguments.
//The function should mutate the input array such that every element has the given number added to it.
function additionMutator(nums, numToAdd)
{
    if(!Array.isArray(nums) || typeof(numToAdd) !== "number")
    {
        return null;
    }
    for(let i=0; i < nums.length; i++)
    {
        nums[i] = nums[i] + numToAdd;
    }
    return nums;
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]


//Write a function alternatingWords that accepts an array of words as an argument. 
//The function should mutate the input array such that the words alternate between 
//fully uppercase or lowercase. 
//The first word should be uppercase.
function alternatingWords(arr)
{
    if(!Array.isArray(arr) || arr.length ===0)
    {
        return null;
    }
    let toggle=true;
    for(let i = 0; i < arr.length;i++)
    {
        if(toggle)
        {
            arr[i] = arr[i].toUpperCase();
        }
        else
        {
            arr[i] = arr[i].toLowerCase();
        }
        toggle = !toggle;
    }
    return arr;
}
let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]
let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]


//Write a function reverseString(str) that takes in a string. 
//The function should return a new string where the order of the characters is reversed.
function reverseString(str)
{
    if(typeof(str)!=="string")
    {
        return null;
    }
    let storing = "";
    for(let i = str.length-1; i>-1; i--)
    {
        storing += str[i];
    }
    return storing;
}
console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'


//Write a function removeLastVowel(word) that takes in a string and 
//returns the string with its last vowel removed.
function removeLastVowel(word)
{
    if(typeof(word)!=="string")
    {
        return null;
    }
    let store = "";
    let vowels = "AEIOUaeiou";
    let toIgnore;
    for(let i=word.length-1; i>-1; i--)
    {
        if(vowels.indexOf(word[i])!==-1)
        {
            toIgnore=i;
            break;
        }
    }
    for(let i = 0;i<word.length;i++)
    {
        if(i === toIgnore)
        {
            continue;
        }
        store += word[i];
    }
    return store;
}
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'


//Write a function removeEWords(sentence) that accepts a sentence string as an arg. 
//The function should return a new string, 
//containing only the words that don't have the letter "e" in them.
function removeEWords(sentence)
{
    if(typeof(sentence)!=="string")
    {
        return null;
    }
    let words = sentence.split(" ");
    let sumStr = "";
    for(let i = 0; i < words.length; i++)
    {
        let word = words[i];
        if(word.toLowerCase().indexOf('e')===-1)
        {
            sumStr += word + " ";
        }
        else
        {
            continue;
        }
    }
    return sumStr;
}
console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

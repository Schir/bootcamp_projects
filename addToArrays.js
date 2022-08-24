//Write a function that takes a location, either "FRONT" or "BACK" and 
//adds an element to either the front or back of the given array. 
//If location is anything besides "FRONT" or "BACK", print an error. 
//Your function should not return anything and should mutate the original array. 
//(Hint: Look up the JavaScript functions: push/pop/shift/unshift)
function addToArray(location, element, arr) {
    if(typeof(location)!=="string" || !Array.isArray(arr))
    {
        return console.error("TYPE ERROR");
    }
    switch(location)
    {
        case "FRONT":
            arr.unshift(element);
            break;
        case "BACK":
            arr.push(element);
            break;
        default:
            return console.error("ERROR");
    }
}
testArray = [1,2,3]
addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]
addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]
addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]

//Write a function range(min, max) that takes in two numbers. 
//The function should return an array containing all numbers from min to max inclusive.
//Define this function using function expression syntax.
const range = function(min,max) {
    let arr=[];
    for(let i=min;i<=max;i++)
    {
        arr.push(i);
    }
    return arr;
};
console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []


//Write a function evenNumbers(max) that takes in a number as an arg. 
//The function should return an array containing all positive, even numbers that are less than max.
//Define this function using function expression syntax.
const evenNumbers = function(max){
    if(typeof(max)!=="number")
    {
        return console.error("needs to be a number");
    }
    let arr=[];
    for(let i=2; i< max; i+=2)
    {
        arr.push(i);
    }
    return arr;
};
console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]


//Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. 
//The function should print out numbers between min and max at step intervals. 
//See the following examples.
//Hint: this function only needs to print using console.log it does not need to return.
function logBetweenStepper(min, max, step)
{
    for(let i=min; i<=max; i+=step)
    {
        console.log(i);
    }
}


// Examples:
logBetweenStepper(5, 9, 1); // prints out:
//5
//6
//7
//8
//9
logBetweenStepper(-10, 15, 5)  // prints out:
//-10
//-5
//0
//5
//10
//15


//Write a function factorsOf(num) that takes in a number as an arg. 
//The method should return an array containing all positive numbers 
//that are able to divide into num with no remainder.
//Define this function using function expression syntax.
const factorsOf = function(num)
{
    if(typeof(num)!=="number")
    {
        return console.error("needs to be a number");
    }
    let arr=[];
    for(let i=1; i<=num;i++)
    {
        if(num%i===0)
        {
            arr.push(i);
        }
    }
    return arr;
}
console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]


//Write a function fizzBuzz(max) that accepts a number as an arg. 
//The function should return an array containing all positive numbers less than max 
//that are divisible by either 3 or 5, but not both.
function fizzBuzz(max)
{
    let arr=[];
    for(let i=1; i<max; i++)
    {
        if(i%3===0 && i%5===0)
        {
            continue;
        }
        else if (i%3 === 0 || i%5 === 0)
        {
            arr.push(i)
        }
    }
    return arr;
}
console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]


//Write a function pitPat(max) that accepts a number as an arg. 
//The function should return an array containing
//all positive numbers less than or equal to max 
//that are divisible by either 4 or 6, but not both.
function pitPat(max)
{
    if(typeof(max)!== "number")
    {
        console.error("needs to be a number");
    }
    let arr=[];
    for(let i=0; i<=max;i++)
    {
        if(i%4===0 && i%6 === 0)
        {
            continue;
        }
        else if(i%4===0 || i%6===0)
        {
            arr.push(i);
        }
    }
    return arr;
}
console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]


//Write a function doubleSequence that accepts a base and a length as arguments. 
//The function should return an array representing a sequence that contains "length" elements. 
//The first element of the sequence is always the "base", 
//the subsequent elements can be generated by doubling the previous element of the sequence.
function doubleSequence(base, length)
{
    if(typeof(base)!=="number"||typeof(length)!=="number")
    {
        return console.error("both inputs to doubleSequence need to be numbers");
    }
    let arr=[];
    let num=base;
    for(let i=0;i<length;i++)
    {
        arr.push(num);
        num *=2;
    }
    return arr;
}
console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]


//Write a function tripleSequence that takes in two numbers, start and length. 
//The function should return an array representing a sequence that begins with start 
//and is length elements long. 
//In the sequence, every element should be 3 times the previous element. 
//Assume that the length is at least 1.
function tripleSequence(start, length) {
    
    //this is just the same exercise again
    //i'm just going to copy in doubleSequence and change the *2 to *3, and base to start
    if(typeof(start)!=="number"||typeof(length)!=="number")
    {
        return console.error("both inputs to tripleSequence need to be numbers");
    }
    let arr=[];
    let num=start;
    for(let i=0;i<length;i++)
    {
        arr.push(num);
        num *=3;
    }
    return arr;
}


console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

//Write a function unique that accepts an array as an argument. 
//The function should return a new array containing elements of the input array, without duplicates.
function unique(array)
{
    //is this an array
    if(!Array.isArray(array))
    {
        return console.error("Needs to be an array");
    }
    let arr=[];
    for(let i=0; i < array.length;i++)
    {
        //if not in arr, put in arr
        if(arr.indexOf(array[i])===-1)
        {
            arr.push(array[i]);
        }
    }
    //return arr
    //god i'm so tired, this is so tedious
    //this is just writing the same three for loops over and over again
    //and i'm not even getting paid for it
    return arr;
}
console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']


//Write a function yeller(words) that takes in an array of words. 
//The function should return a new array where each element of the original array is yelled.
function yeller(words)
{
    if(!Array.isArray(words))
    {
        return console.error("parameter needs to be an array");
    }
    let arr=[];
    for(let i=0; i<words.length;i++)
    {
        arr.push(`${words[i].toUpperCase()}!`);
    }
    return arr;
}
console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]


//Write a function tripler(nums) that takes in an array as an arg. 
//The function should return a new array containing three times every number of the original array.
function tripler(nums)
{
    //too tired to do a proper check for type right now, 
    //just want to get these exercises over with.
    //none of this is hard, it's just tedious.
    //if you're a potential employer reading this, let me know if I should go back and add type checks to the rest of these.
    //dunno why you'd be reading this, I've probably put it in some kind of homework folder by now, but y'know, lemme know if you are. 
    let arr=[];
    for(let i=0; i<nums.length; i++)
    {
        arr.push(nums[i]*3);
    }
    return arr;
}
console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


//Write a function longWords(words) that takes in an array of words. 
//The function should return an array containing only the words that are 
//longer than 5 characters.
function longWords(words)
{
    let arr=[]
    for(let i=0; i<words.length;i++)
    {
        if(words[i].length>5)
        {
            arr.push(words[i]);
        }
    }
    return arr;
}
console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

//Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. 
//The function should return a new array containing the words that end in the given suffix. 
//If the value passed in is not an array, return an empty array. 
//HINT: There are built in JavaScript functions that will help with determining if a strings ends a certain way. Go see if you can find it on MDN!
function chooseyEndings(words, suffix)
{
    //i lied, i'll do typechecks if it looks like an example might want one.
    //the test cases on this one doesn't seem to care, but i do
    if(!Array.isArray(words)||typeof(suffix)!='string')
    {
        console.error("needs to be an array and a string");
        return [];
    }
    let arr=[];
    for(let i=0; i<words.length;i++)
    {
        if(words[i].endsWith(suffix))
        {
            arr.push(words[i]);
        }
    }
    return arr;
}
console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]
console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]
console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]
console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]
console.log(chooseyEndings(17, 'ily'));
// [ ]


//Write a function commonFactors that accepts two numbers as arguments. 
//The function should return an array containing positive numbers that are able to divide both arguments.
function commonFactors(arg1,arg2)
{
    let arr=[];
    let smallerValue;
    if(arg1<arg2)
    {
        smallerValue=arg1;
    }
    else
    {
        smallerValue=arg2;
    }
    for(let i=1;i<=smallerValue;i++)
    {
        if(arg1%i===0 && arg2%i===0)
        {
            arr.push(i);
        }
    }
    return arr;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]


//Write a function adjacentSums that accepts an array of numbers as an argument. 
//The function should return a new array containing the sum of each pair of elements in the input array.
function adjacentSums(array)
{
    let arr=[];
    for(let i=0; i<array.length-1;i++)
    {
        arr.push(array[i]+array[i+1]);
    }
    return arr;
}
console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]


//Write a function fibonacciSequence that accepts a number as an argument. 
//The function should return an array representing the fibonacci sequence up to the given length. 
//The first and second numbers of the sequence are 1 and 1. 
//To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.
function fibonacciSequence(number)
{
    let arr=[];
    for(let i=0;i<number;i++)
    {
        if(i < 2)
        {
            arr.push(1);
        }
        else
        {
            arr.push(arr[i-1]+arr[i-2]);
        }
    }
    return arr;
}
console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]

//Write a function pickPrimes that takes in an array of numbers and
//returns a new array containing only the prime numbers.
function pickPrimes(array) {
    let arr=[];
    for(let i=0; i<array.length;i++)
    {
        if(isPrime(array[i]))
        {
            arr.push(array[i]);
        }
    }
    return arr;
}
//grabbing this from an earlier exercise since it's still handy
//gonna remove all the comments though, they're a bit unwieldy when you're copying it in every time.
function isPrime(number)
{
    switch(number){
        case 1:
            return false;
        case 2:
            return true;
        default:
            break;
    }
    switch(number%2){
        case 0:
            return false;
        case 1:
            for(let i=3; i<number; i+=2){
                if(number % i === 0){
                    return false;
                }
            }
            return true;
    }
}
console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]


//Write a function greatestFactorArray that takes in an array of numbers and 
//returns a new array where every even number is replaced with it's [sic] greatest factor. 
//A greatest factor is the largest number that divides another with no remainder. 
//For example, the greatest factor of 16 is 8. 
//(For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).
function greatestFactorArray(array) {
    let arr=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0)
        {
            //greatest factor of an even number that isn't the number is the number cut in half.
            arr.push(array[i]/2);
        }
        else
        {
            arr.push(array[i]);
        }
    }
    return arr;
 }
 console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
 console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]

 //A number's summation is the sum of all positive numbers less than or equal to the number. 
//For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, 
//the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. 
//Write a function summationSequence that takes in two numbers: start and length. 
//The function should return an array containing length total elements. 
//The first number of the sequence should be the start number. 
//At any point, to generate the next element of the sequence we take the summation of the previous element. 
//You can assume that length is not zero.
function summationSequence(start, length) {
    let arr=[];
    arr.push(start);
    for(let i=0; i<length-1;i++)
    {
        let sum=arr[i];
        for(let j=0;j<arr[i];j++)
        {
            sum+=j;
        }
        arr.push(sum);
    }
    return arr;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]

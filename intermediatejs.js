//Define a function isPrime(number) that returns true if number is prime. 
//Otherwise, false. A number is prime if it is only divisible by 1 and itself.
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
    }
}
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true


//Write a function choosePrimes(nums) that takes in an array of numbers as args. 
//The function should return a new array containing the primes from the original array. 
//A prime number is a number that is only divisible by 1 and itself. 
//Hint: consider creating a helper function to check if a number is prime!
function choosePrimes(nums)
{
    //alright, seems pretty easy. make a sum array, run through the input array,
    //check if the value at the index is prime, add if so, return sum array  
    let newArr=[];
    for(let i=0; i < nums.length; i++)
    {
        //thank god we've got this isPrime function lying around
        if(isPrime(nums[i]))
        {
            newArr.push(nums[i]);
        }
    }
    return newArr;
}
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]


//Write a function nextPrime that accepts a number as an argument. 
//The function should return the nearest prime number that is greater
//than the given number.
function nextPrime(number)
{
    let i=number+1;
    while(true)
    {
        if(isPrime(i))
        {
            return i;
        }
        i++;
    }
}
console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101


//Write a function primeFactors that accepts a number as an argument. 
//The function should return an array containing all of the prime numbers 
//that can divide the given number.
function primeFactors(number)
{
    //make array, run through all numbers up to number, 
    //check if i is prime, if it divides evenly then add it to the array
    let arr=[];
    for(let i=2;i<=number;i++)
    {
        if(isPrime(i))
        {
            if(number%i===0)
            {
                arr.push(i);
            }
        }
    }
    return arr;
}
console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]


//Write a function isAntiPrime that accepts a number as an argument. 
//The method should return true if the given number has more divisors 
//than all positive numbers less than the given number. 
//For example, 24 is an anti-prime because it has more divisors than 
//any positive number less than 24.
function isAntiPrime(number)
{
    //alright, let's try getting a count of the number of factors. 
    //I'll spin that off into a helper function
    let length = listOfFactors(number)
    let longestSoFar=0;
    let currentLength;
    for(let i=0; i<number;i++)
    {
        currentLength = listOfFactors(i);
        if(currentLength > longestSoFar)
        {
            longestSoFar = currentLength;
        }
    }
    return (length>longestSoFar);
}
function listOfFactors(number)
{
    let count = 0;
    for(let i=0; i <= number ; i++)
    {
        if(number%i === 0)
        {
            count++;
        }
    }
    return count;
}
console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false


//Write a function mostVowels that takes in a 
//sentence string and returns the word of the 
//sentence that contains the most vowels.
function mostVowels(sentence) {
    // your code here
    let arr = sentence.split(" ");
    let currentGreatest = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(vowelCount(arr[i]) > currentGreatest)
        {
            currentGreatest=i;
        }
    }
    return arr[currentGreatest];
}
function vowelCount(word)
{
    let count=0;
    for(let i=0; i < word.length;i++)
    {
        if(vowelChecker(word[i]))
        {
            count++;
        }
    }
    return count;
}
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
console.log(mostVowels("what a wonderful life")); // "wonderful"



//Write a function allElseEqual that takes in an array of 
//numbers. The function should return the element of the 
//array that is equal to half of the sum of all elements 
//of the array. If there is no such element, the method 
//should return null.
function allElseEqual(arr) {
    // your code here
    let valueToCheck = sumTotal(arr)/2;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] === valueToCheck)
        {
            return arr[i];
        }
    }
    return null
}
function sumTotal(arr)
{
    let sum=0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null

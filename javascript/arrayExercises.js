//a bunch of array exercises


function wordWithinArray(array, word) {
    //they just want me to return a boolean so let's just return the conditional checking if array.indexOf isn't -1
    return (array.indexOf(word)!== -1);
};
console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false


// Write a function firstAndLast that takes in an array of numbers and 
//returns the sum of the first and last element if there is an even number of 
//elements in the array. If there is an odd number of elements in the array, 
//then the function should return the difference between the first and last elements of the array.
function firstAndLast(array)
{
    let sum=0;
    //could just do an if/else but I don't think we really need the comparator
    //if there's only two options. let's just use a glorified goto instead.
    //I think it'd be faster in the compiler.
    switch(array.length%2)
    {
        case 0:
            sum = array[0] + array[array.length-1];
            break;
        case 1:
            sum = array[0] - array[array.length-1];
            break;
    }
    return sum;
}
console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4


//Write a function combineArray(array1, array2) that takes
//in two arrays of numbers and returns the two arrays combined into a single array. 
function combineArray(array1, array2) {
    return array1.concat(array2);
}
console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]


//Write a function threeIncreasing that accepts an array of numbers as an argument. 
//The function should return a boolean indicating whether or not the array contains 
//three consecutive numbers in consecutive increasing order, like 7, 8, 9.
function threeIncreasing(array)
{
    //may as well just check if the array has less than 3 elements.
    //can't have three increasing values if there's only two values
    if(array.length <3)
    {
        return false;
    }
    for(let i=0; i < array.length-2; i++)
    {
        //ah okay, I guess this exercise just wants you to be able to tell the difference between array[i]+n and array[i+n]
        if(array[i]+1 === array[i+1] && array[i]+2 === array[i+2])
        {
            return true;
        }
    }
    return false;
}
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false


//Write a function myIncludes(arr, target) that accepts an array and a target
//value as args. The function should return a boolean indicating whether the 
//target is found in the array. Solve this without Array.includes or Array.indexOf.
function myIncludes(arr, target)
{
    //this looks like it's just a pretty straightforward exercise.
    //run through the array, see if the value's in there.
    //there's probably a better way to do this, but I'll just take the naive approach
    for(let i=0; i< arr.length;i++)
    {
        //check if the value at index i is the target
        if(arr[i]===target)
        {
            return true;
        }
    }
    //if we haven't returned true from going through the array, return false
    return false;
}
console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false


//Write a function myIndexOf(arr, target) that takes in an array and target 
//value as args. The function should return the first index where the target 
//is found in the array. If the target is not found, it should return -1. 
//Solve this without using Array.indexOf.
function myIndexOf(arr, target)
{
    //looks like this is the same as the last problem, just with returning a number instead of a bool
    //run through the array, return the index if I find it, 
    //return -1 in the place where I was returning bool last time
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]===target)
        {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1


//Write a function sumArray(array) that takes in an array of numbers and 
//returns the total sum of all the numbers.
function sumArray(array) {
    // I wrote this one by accident in the firstAndLast exercise before I finished reading the spec
    //so let's just do that again.
    //make a running sum
    let sum=0;
    //run through the array, add to the running sum
    for(let i=0;i<array.length;i++)
    {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30


//Write a function productWithReduce(nums) that takes in an array of numbers. 
//The function should return the total product of multiplying all numbers of the 
//array together. You can assume that nums will not be an empty array.
function productWithReduce(nums)
{
    //I guess this is just the sum exercise but with multiplication.
    //I was going to start with 1, but then I realized it'd be faster to just start with 
    //the first item in the array. save a cycle or five if the array's got length 1
    let product=nums[0];
    //then just iterate through the array and multiply numbers into the running product
    for(let i=1; i< nums.length; i++)
    {
        product *= nums[i];    
    }
    return product;
}
console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12


//Write a function doubler(numbers) that takes an array of numbers and returns 
//a new array where every element of the original array is multiplied by 2.
function doubler(numbers) {
    //alright, guess this needs to return an array.
    //easiest way to handle this is probably just to make an empty array and 
    //push double the value of the numbers at that index to it.
    let arr=[];
    for(let i=0;i<numbers.length;i++)
    {
        arr.push(numbers[i]*2);
    }
    return arr;
}
console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]

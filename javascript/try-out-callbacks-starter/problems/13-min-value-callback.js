/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, callback) {
    let min=array[0];
    if(callback === undefined)
    {
        array.forEach(function(item){
            if(item < min)
            {
                min = item;
            }
        });
    }
    else
    {
        min = callback(array[0]);
        array.forEach(function(item){
            if(callback(item)<min)
            {
                min = callback(item);
            }
        });
    }
    return min;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;

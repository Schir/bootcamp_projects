/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array){
  if(array.length === 0)
  {
    return [];
  }
  else if(array.length === 1 && array[0].length === 0)
  {
    return array[0];
  }
  if((array.length === 1 && array[0].length === 1) || (array[0].length > 1 && array.length === 1)){
    return flatten(array[0]);
  }
  else if(array[0].length > 0 && array.length > 1)
  {
    return flatten(array[0]).concat(flatten(array.slice(1)));
  }
  else{
    return [array[0]].concat(flatten(array.slice(1)));
  }
}

console.log(flatten([[[]]])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
console.log(flatten([[[1, 2]], [[3, 4]]]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}

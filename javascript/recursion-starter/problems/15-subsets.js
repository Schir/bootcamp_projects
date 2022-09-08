/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
const subsets= array =>
{
  if(array.length === 0 || array.length === undefined)
  {
    return [[]];
  }
    const lastElement = array.pop();
    const lastSubset = subsets(array)
    
    return [...lastSubset, ...lastSubset.map(additions => additions.concat([lastElement]))];
  /*else if(array.length === 1)
  {
    return array;
  }
  else if(array.length===2)
  {
    return [[], [array[0]], [array[1]], [array[0],array[1]]];
  }
  else
  {
    for(let i=array.length-1;i>1;i--)
    {
      for(let j=0; j<array.length-2;j++){
        let set = subsets(array.slice(j, j+2))
        set.forEach(function(item){
          item.push(array[i]);
        });
        newArr2 = set
      }
    }
  }
  return [...subsets(array.slice(0, array.length-1)), ...newArr2];*/
  }

console.log(subsets([1, 2, 3, 4])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}

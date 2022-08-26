//Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and
//returns the total sum of all numbers.
function twoDimensionalSum(arr)
{
    let sum=0;
    for(let i=0; i< arr.length;i++)
    {
        for(let j=0; j<arr[i].length;j++)
        {
            sum += arr[i][j];
        }
    }
    return sum;
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
//Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument.
//The function should return the total product of all numbers multiplied together.
function twoDimensionalProduct(array)
{
    let product=1;
    for(let i=0; i< array.length;i++)
    {
        for(let j=0; j<array[i].length;j++)
        {
            product *= array[i][j];
        }
    }
    return product;
}
let array1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(array1)); // 360

let array2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(array2)); // 88

//Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and 
//returns the largest value in the matrix. The matrix contains at least one value.
function maxInMatrix(matrix) {
    let maxSoFar=matrix[0][0];
    for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[i].length;j++)
        {
            if(matrix[i][j] > maxSoFar)
            {
                maxSoFar = matrix[i][j];
            }
        }
    }
    return maxSoFar;
  }
  
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]
  
  console.log(maxInMatrix(matrix)); // 72
  
//Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and
//returns an array containing the maximum value in each column. 
//The array length should be equal to the number of columns, 
//such that returnArray[i] is equal to the max value in the ith column.
function maxColumn(matrix) {
    let arr = matrix[0];
    //console.log
    for(let i=0; i< matrix.length; i++)
      {
          for(let j=0;j<matrix[i].length;j++)
          {
              if(matrix[j][i] > arr[i])
              {
                  arr[i] = matrix[j][i];
              }
          }
      }
      return arr;
  }
  
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(maxColumn(matrix)); // [12, 19, 21]

//Write a function zip that accepts two arrays as arguments.
//The function should return a two dimensional array with subarrays of length 2 
//that contain elements at corresponding indices from the input arrays. 
//You may assume that the input arrays have the same length.
function zip(arr1, arr2){
    let arr=[];
    for(let i=0;i<arr1.length;i++)
    {
        arr.push([arr1[i], arr2[i]]);
    }
    return arr;
}

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//Write a function zanyZip that accepts two arrays as arguments. 
//The function should return a two dimensional array with subarrays of length 2 
//that contain elements at corresponding indices from the input arrays. 
//If one of the arrays is shorter than the other, then substitute null for the missing elements.
function zanyZip(arr1, arr2){
    let arr=[];
    if(arr1.length!=arr2.length)
    {
        let len;
        if(arr1.length > arr2.length){
            len = arr1.length;
        }
        else{
            len = arr2.length;
        }
        for(let i=0;i<len;i++){
            if(i >= arr1.length){
                arr.push([null, arr2[i]]);
            }
            else if(i >= arr2.length){
                arr.push([arr1[i], null]);
            }
            else{
                arr.push([arr1[i], arr2[i]]);
            }
        }
    }
    else{
        for(let i=0;i<arr1.length;i++){
            arr.push([arr1[i], arr2[i]]);
        }
    }
    return arr;
}



console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

//A 2-dimensional array is also known as a "matrix". 
//Write a function matrixAddition that accepts two matrices as arguments. 
//The two matrices are guaranteed to have the same "height" and "width". 
//The function should return a new matrix representing the sum of the two arguments. 
//To add matrices, we add the values at the same positions.
function matrixAddition(matrix1,matrix2)
{
    let arr=[];
    for(let i=0; i<matrix1.length;i++){
            arr.push(subArrayMaker(matrix1[i], matrix2[i]));
    }
    return arr;
}
function subArrayMaker(array1, array2)
{
    let arr=[]
    for(let i=0; i< array1.length;i++)
    {
        arr.push(array1[i]+array2[i]);
    }
    return arr;
}

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

//Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and 
//returns all lucky numbers in any order.
//A lucky number is the minimum element in its row and the maximum in its column.
function luckyNumbers(matrix) {
    let arr=[];
    let maximumInColumn=matrix[0].slice();
    for(let i=0; i<matrix[0].length; i++)
    {
        for(let j=0; j < matrix.length; j++)
        {
            if(matrix[j][i] > maximumInColumn[i])
            {
                maximumInColumn[i] = matrix[j][i];
            }
        }
    }
    let minimumInRow=[];
    let currentMinimum=matrix[0][0];
    for(let i=0; i<matrix.length; i++)
    {
        for(let j=0;j<matrix[i].length;j++)
        {
            if(currentMinimum>matrix[i][j])
            {
                currentMinimum=matrix[i][j];
            }
        }
        minimumInRow.push(currentMinimum);
        if(i+1 < matrix.length)
        {
            currentMinimum=matrix[i+1][0];
        }
    }
    console.log(minimumInRow);
    console.log(maximumInColumn);
    for(let i=0;i<matrix[0].length;i++)
    {
        for(let j=0; j<matrix.length;j++)
        {
            if(matrix[j][i] === minimumInRow[j] && matrix[j][i] === maximumInColumn[i])
            {
                arr.push(matrix[j][i]);
            }
        }
    }
    
    return arr;
}
let matrix;

matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]


//Write a function spiralOrder(matrix) that takes in a 
//2-dimensional array (matrix) and returns an array 
//containing the elements in spiral order.

function spiralOrder(matrix) {
  //alright so let's first figure out what this looks like
  //first you start at the first number, so this will be a double for loop
  //then you go across the first row.
  //upon hitting the end of the first row, start incrementing along the y axis
  //then, once y has been incremented all the way, start decrementing along the x-axis.
  //then start decrementing along the y axis until you hit the point just below the first number.
    let arr=[];
    let minX=0;
    let maxX=matrix[0].length-1;
    let minY=0;
    let maxY=matrix.length-1;
    let direction = 0;
    let i;
    let j;
    let totalLength = ((maxX+1) * (maxY+1));
    //for(let x=minX; x <= maxX; x++){
    while((arr.length < totalLength) && (minY <= maxY || minX <= maxX)){
        switch(direction)
        {
            //right
            case 0:
            
                for(i=minX; i<=maxX; i++){
                    arr.push(matrix[minY][i]);
                }
                minY++;
                direction = 1;
                break;
            //down
            case 1:
                for(j=minY;j<=maxY;j++){
                    arr.push(matrix[j][maxX]);
                }
                maxX--;
                direction = 2;
                break;
            case 2:
                //left
                for(i=maxX; i>=minX; i--){
                    arr.push(matrix[maxY][i]);
                }
                maxY--;
                direction = 3;
                break;
            //up
            case 3:
                for(j=maxY;j>=minY;j--){                        
                    arr.push(matrix[j][minX]);
                }
                minX++;
                direction = 0;
                break;
        }
    }
    return arr;
}
matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [  //I want to get an idea how this works, so I'm going to make a matrix
            //that has each element at a number that is basically just a point 
            [11,12,13,14,15,16],
            [21,22,23,24,25,26],
            [31,32,33,34,35,36],
            [41,42,43,44,45,46],
            [51,52,53,54,55,56],
            [61,62,63,64,65,66],
]

console.log(spiralOrder(matrix)); // [11,12,13,14,15,
                                //    16,26,36,46,56,
                                //    66,65,64,63,62,
                                //    61,51,41,31,
                                //    21,22,23,24,
                                //    25,35,45,
                                //    55,54,53,
                                //    52,42,
                                //    32,33
                                //    34,44
                                //    43


// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
function pyramidArray(base)
{
    let arr=[];
    arr.push(base);
    for(let i=1; i < base.length; i++)
    {
        arr.unshift(slabMaker(arr[arr.length-i]));
    }
    return arr;
}
function slabMaker(inputArr)
{
    let array=[];
    for(let i=0; i < inputArr.length-1;i++)
    {
        array.push(inputArr[i]+inputArr[i+1]);
    }
    //console.log(`array: ${array}`);
    return array;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]
                                

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1
function pascalsTriangle(depth)
{
    let arr=[];
    arr.push([1]);
    for(let i=1; i<depth; i++)
    {
        arr.push(depthAdder(arr[i-1]));
    }
    return arr;
}
function depthAdder(previousDepth)
{
    let arr=[];
    let add1;
    let add2;
    for(let i=0; i <= previousDepth.length; i++)
    {
        if((i-1 < 0) || i === previousDepth.length)
        {
            arr.push(1);
        }
        else
        {
            arr.push((previousDepth[i-1] + previousDepth[i]));
        }
    }
    return arr;
}


console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]

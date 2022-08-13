let alphabet = ['a', 'b', 'c', 'd', 'e','f','g','h','i',
                'j','k','l','m','n','o','p','q','r','s',
                't','u','v','w','x','y','z'];

console.log([4,7,9].length); //3
console.log([1,2].length); //2
console.log([].length); //0

let numbersAndLetter = ["b", 'z', 17, "cat"];

console.log(numbersAndLetter[0]); //b
console.log(numbersAndLetter[1]); //z
console.log(numbersAndLetter[2]); //17
console.log(numbersAndLetter[3]); //cat

let abc = ['a','b','c'];

console.log(abc[0]); //a
console.log(abc[1]); //b
console.log(abc[2]); //c
console.log(abc[3]); //undefined

console.log([1,2,3] + [4,5,6]);//1,2,34,5,6
console.log([1,2,3].concat([4,5,6])); //[1,2,3,4,5,6]
let arr = [1,2,3];
arr.push(4);
arr.push(5);
console.log(arr);//[1,2,3,4,5]
arr.pop();
console.log(arr);//[1,2,3,4]


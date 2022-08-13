let array=[0,1,2]
let index = 0;
while(index < array.length)
{
    console.log("the index and current array position is: " + array[index]);
    index++;
}

let testString = "testing";

for(let index=0;index<testString.length;index++)
{
    let letter = testString[index];
    console.log(letter);
}

function forLoopDoubler(array)
{
    for(let i=0;i<array.length;i++)
    {
        array[i] = array[i]*2;
    }
    return array;
};

function whileLoopDoubler(array)
{
    let i=0;
    while (i<array.length)
    {
        array[i] *= 2;
        i++;
    }
    return array
};

console.log(forLoopDoubler([1,2,3])); //[2,4,6]
console.log(whileLoopDoubler([2,4,8])); //[4,8,16]

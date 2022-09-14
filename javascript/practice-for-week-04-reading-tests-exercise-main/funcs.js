//gonna write what the tests are looking for

function isFive(num){
    return num===5;
}

function isOdd(number)
{
    if(typeof(number) !== "number")
    {
        throw(Error);
    }
    return number%2===1;
}


function myRange(min, max, step)
{
    let newStep = 1;
    if(step !== undefined)
    {
        newStep = step;
    }
    let arr=[]
    for(let i=min; i<=max; i+newStep)
    {
        arr.push(i);
    }
    return arr;
}

exports.isFive = isFive;
exports.isOdd = isOdd;
exports.myRange = myRange;

//was debugging someone else's code in the slack.

//they were wondering why changing their fizzbuzz code to return a value instead of
//outputting a console.log was causing the program to break.
//I copied it into this file and edited it to separate out the fizzbuzz function
//from the logic that checks whether it should output fizz or buzz


function fizzbuzz(max)
{
    for(let i=0;i<max;i++)
    {
        console.log(fizzbuzzChecker(i));
    }
};

function fizzbuzzChecker(value)
{
    if (value % 2 === 0 && value % 7 !== 0) 
    {
        return(value + "fizz");
    } else if (value % 7 === 0 && value % 2 !== 0)
    {
        return(value + "buzz");
    }
    else
    {
        return value;
    }
};


fizzbuzz(20);

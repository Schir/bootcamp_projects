if(3 === 3)
{
    console.log("three is three");
}

function mathFun()
{
    let x=2+3;

    if( x === 3)
    {
        console.log("x is a three");
    }
    else if (x === 4)
    {
        console.log("x is four");
    }
    else if (x === 5)
    {
        console.log("x is five");
    }
};

mathFun(); //x is five

function mathFun2()
{
    let x = 19;
    if (x===3)
    {
        console.log("x is three");
    }
    else if (x===4)
    {
        console.log("x is four");
    }
    else
    {
        console.log("x is neither 3 nor 4");
    }
};

mathFun2();

function separator(number)
{
    if(number >=100)
    {
        console.log("number is 100 or larger")
    }
    else
    {
        console.log("number is smaller than 100");
    }
};

separator(101); //larger
separator(100); //larger
separator(-1); //smaller
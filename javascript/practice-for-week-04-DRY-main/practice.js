function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = numberCompare(num1, num2, true);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = numberCompare(num1, num2, true);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = numberCompare(sum1, sum2, true);
    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = numberCompare(weight1, weight2, false);
    return `I adopted a dog that weighs ${smallDog} pounds.`;
}

//===

function numberCompare(num1, num2, comparisonBool)
{
  //comparisonBool being true returns the greater of the two
  //comparisonBool being false returns the lesser of the two.
  if(comparisonBool)
    return num1>num2? num1: num2;
  else
    return num1<num2? num1: num2;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};

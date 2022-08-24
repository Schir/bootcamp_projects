//more debugging other people's code.
//this was the original
/*
function filterPizzas(pizzas) {
    const catalogue = [
      { type: 'margherita', price: '5' },
      { type: 'funghi', price: '6' },
      { type: 'hawaii', price: '7' },
      { type: 'vegetarian', price: '8' },
      { type: 'pineapple', price: '9' },
    ]
    const noPineapple = [];
    for (let i = 0; i < catalogue.length; i++) {
      if (pizzas[i].type !== 'pineapple') {
        noPineapple.push(catalogue[i]);
      }
    }
  return noPineapple;
  }
*/
//first, I moved the catalogue constant outside of the function because it didn't seem like it needed to be in there 
function filterPizzas(pizzas) {
    const noPineapple = [];
    //then I changed the reference to the catalogue here to the pizza parameter because referencing the catalogue doesn't totally make sense
    //if this is supposed to be a generic function
    for (let i = 0; i < pizzas.length; i++) {
      if (pizzas[i].type !== 'pineapple') {
        //and also changed the catalogue reference here because, again, it's probably not supposed to be like that 
        noPineapple.push(pizzas[i]);
      }
    }
  return noPineapple;
  }
const catalogue = [
    { type: 'margherita', price: '5' },
    { type: 'funghi', price: '6' },
    { type: 'hawaii', price: '7' },
    { type: 'vegetarian', price: '8' },
    { type: 'pineapple', price: '9' },
  //then i added a semicolon after the catalog, just in case
  ];
//and then i tried calling the function with catalogue as the parameter just to see if it was working. 
console.log(filterPizzas(catalogue));

//this fixed the problem.

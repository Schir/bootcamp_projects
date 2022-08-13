console.log(!true); //should be false
console.log(!false); //should be true
console.log(!!false); //should be false

console.log(false && false); //false
console.log(false && true); // false
console.log (true && false); //false
console.log (true && true); //true

console.log(false || false); //false
console.log(false || true); // true
console.log(true || false); //true
console.log(true || true); //true

console.log(true || true && false); // true
console.log(false && !(false || true)); //false
//order of operations on booleans A || B && C is like A || (B && C) 

//!(A || B) == !A && !B
//!(A && B) == !A || !B
//essentially the ! is distributed out to the operators as well

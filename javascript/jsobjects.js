//Write a function printObject(obj) that prints out all key-value pairs of an object. 
//The format should be key - value. 
function printObject(obj) {
  // your code here...
  for(let item in obj)
  {
      console.log(`${item} - ${obj[item]}`);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120


//Write a function catBuilder(name, color, toys) 
//that returns a cat object object with the corresponding properties.
function catBuilder(name, color, toys) {
    // your code here...
    let cat={};
    cat['name'] = name;
    cat['color'] = color;
    cat['toys'] = toys;
    return cat;
}
console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }
console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

let parks=['Zion', 'Yellowstone', 'Acadia', 'Yosemite'];

let str=""
parks.forEach(function(park, i){
    console.log(park);
    console.log(i);
    console.log("---");
    str += park;
});
console.log(str);

let newParks= parks.map(function(park){
    return park.toUpperCase() + " NATIONAL PARK";
});

console.log(newParks);

let selectedParks=parks.filter(function(park){
    return park.includes('o');
});
console.log(selectedParks);

//accum is set to nums[0] by default if you don't pass a second argument to the function, by the look of it.
//if you do pass a second argument to reduce() then that will be the accumulator.
let nums=[3,7,5,9, 12, 15, 2, 1, 3];
let sum= nums.reduce(function(accum, element){
    return accum+element;
}, 100);

console.log(sum);

let max = nums.reduce(function(accum, element){
    if(element>accum){
        return element;
    }
    else{
        return accum;
    }
});
console.log(max);// Your code here

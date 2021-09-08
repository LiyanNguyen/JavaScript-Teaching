let characters = [
  { Name: "Hu Tao", Value: 500 },
  { Name: "Amber", Value: 400 },
  { Name: "Lumine", Value: 240 },
  { Name: "Klee", Value: 470 },
  { Name: "Baal", Value: 460 },
  { Name: "Mona", Value: 360 },
  { Name: "Noelle", Value: 290 },
  { Name: "Yoimiya", Value: 270 },
  { Name: "Fischl", Value: 520 },
  { Name: "Jean", Value: 390 },
];

// FILTER METHOD
// this creates a new array, based on the condition wheter true or false
let filteredArray = characters.filter((item) => {
  return item.Value >= 500; //get objects with a certain value
});

console.log(filteredArray);
// 0: {Name: 'Hu Tao', Value: 500}
// 1: {Name: 'Fischl', Value: 520}

// console.log(characters); //same as before, unchanged

// MAP METHOD
// this creates a new array, based what is taken from the other array
let mappedArray = characters.map((item) => {
  return item.Name;
});
console.log(mappedArray); //same as the original array, but only with name attribute

// console.log(characters); //same as before, unchanged

// FIND METHOD
// this creates a new array, based on the FIRST item found in the other array based on condition wheter true or false
let findArray = characters.find((item) => {
  return item.Name === "Yoimiya";
});

console.log(findArray); // {Name: 'Yoimiya', Value: 270}

// FOREACH METHOD
// loop through the array elements one by one, and execute the function parameter on those elements
characters.forEach((item) => {
  console.log(item.Name);
});

// SOME METHOD
// this will return true if ATLEAST 1 element in the array satisfies the return condition
let lessThan300 = characters.some((item) => {
  return item.Value < 300;
});
console.log(lessThan300); //true

// EVERY METHOD
// this will return true if ALL elements in the array satisfies the return condition
let allGreaterThan100 = characters.some((item) => {
  return item.Value > 100;
});
console.log(allGreaterThan100); //true

// REDUCE METHOD
// only useful for CUMULATIVE operation inside an array
// reduce (function(varToReduceTo, element),  Startvalue)
// 2nd parameter is the element on each array, 1st param is what its reduced to
let TotalValue = characters.reduce((cumulativeValue, item) => {
  return item.Value + cumulativeValue;
}, 0);
//each run of the function, we get the item.Value then ADD it to the cumulativeValue
//which started at 0
console.log(TotalValue); //3900

//you can also do the above example with a classic for loop
let TTotal = 0;
for (let i = 0; i < characters.length; i++) {
  TTotal += characters[i].Value;
}
console.log(TTotal); //3900

// INCLUDES METHOD
// this checks if an array includes what is on the parameter
let basicArray = [1, 2, 3, 4, 5, 6];
let includes = basicArray.includes(4);
console.log(includes); //true

//FUNCTIONS AND JS HOISTING
greet(); //accessible EVEN before its declaration (JS hoisting)

//speak(); //Uncaught ReferenceError: Cannot access 'speak' before initialization

//function declaration, this is hoisted by JS (initialized first regardless of code position)
function greet() {
  console.log("function declaration here!");
}
//note!: same thing with var keyword, var is hoisted while let and const is not

//function expression, the more 'updated' way
const speak = function () {
  console.log("function expression here!");
};

speak();

//=========================================================================================
//ARGUMENTS AND PARAMETERS
const funcWithArg = function (name) {
  console.log(`Hello  ${name}`);
};

console.log(name); //blank, because the variable 'name' is a local scope of the function

funcWithArg(); //Hello undefined
funcWithArg(69); //Hello 69 (parameter number gets converted to string)
//funcWithArg(Mario); //Mario is not defined
funcWithArg("Mario"); //Hello Mario

let MyName = "Klee";
funcWithArg(MyName); //Hello Klee

const funcWith2Args = function (fname, lname) {
  console.log(`Hello  ${fname} ${lname}`);
};

funcWith2Args(); //Hello undefined undefined
funcWith2Args("Hu", "Tao"); //Hello Hu Tao

const funcWithDefault = function (fname = "d-fname", lname = "d-lname") {
  console.log(`Hello  ${fname} ${lname}`);
};

funcWithDefault(); //Hello d-fname d-lname
funcWithDefault("Amber", "Hot"); //Hello Amber Hot

//=========================================================================================
//FUNCTIONS WITH OPERATIONS
const calcAarea = function (radius) {
  let area = 3.14 * radius ** 2;
  console.log(area);
};

calcAarea(7); //153.86

//function with return
const calcAarea2 = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};

console.log(calcAarea2(9)); //254.34

let totalArea = calcAarea2(6); //calling the function, then assign the return value to this variable
console.log(totalArea); //113.04

//function with direct return
const calcAarea3 = function (radius) {
  return 3.14 * radius ** 2;
};

totalArea = calcAarea3(15);
console.log(totalArea); //706.5

//arrow functions
const arrowArea = (radius) => {
  return 3.14 * radius ** 2;
};

console.log(arrowArea(13)); //530.66

//arrow function with 1 argument and 1 simple return
const arrowArea2 = (radius) => 3.14 * radius ** 2;
console.log(arrowArea2(5)); //78.5

//arrow function with more than 1 argument and complex operation
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([4, 7, 12, 20], 0.2)); //51.6

//=========================================================================================
//FUNCTIONS VS METHODS
const yourName = "Micheal";

//function
const greeter = function (name) {
  console.log(`Hello ${name}`);
};

greeter(yourName); //Hello Micheal

//methods, ivoking and the way they are defined is different from functions
const yourNewName = yourName.toUpperCase();
console.log(yourNewName); //MICHEAL

//methods are basically functiosn but they are associated with an object or data type
//functions are defined by us

//=========================================================================================
//CALLBACKS & FOREACH

//the parameter of this function is a function
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

const logger = (value) => {
  console.log(value);
};

myFunc(logger);

//----------------------------------
//above logic can be shortened to something like this, where we defined the function inside the parameter
myFunc(function (value) {
  console.log(value);
});

//and then can still even be shortened to arrow function like this
myFunc((value) => {
  console.log(value);
});

//FOREACH
let characters = ["Amber", "Hu Tao", "Lumine", "Mona", "Yoimiya"];

//foreach in an array, similar to a callback function
characters.forEach(function () {
  console.log("test"); //5x test, because the function is called 5x cuz the array has 5 elements in it
});

//looping through array using foreach with a function inside
characters.forEach(function (charaName) {
  console.log(charaName); //each element in the array will be logged one by one
});

//we can then convert the above function to an arrow function
characters.forEach((charaName) => {
  console.log(charaName); //each element in the array will be logged one by one
});

//you can also add index argument inside the function (THE INDEX SHOULD BE 2ND PARAMETER!)
//the format of foreach goes like this:
//array.foreach(function (currentValue, index, arr){})
characters.forEach((charaName, index) => {
  console.log(index, charaName); //each element in the array will be logged one by one
});
//NOTE!: by default, arrow function in foreach can only take index and the element itself
//you can pass a callback function inside in the foreach parameter as well

//THE MORE LOGICAL WAY ----------------------
//try switching the element and index parameters around see what happens
const logNames = (element, index) => {
  console.log(`${index} Hello ${element}`);
};

characters.forEach(logNames);

//an actual example of foreach being used to output data into HTML
const list = document.querySelector(".list");
const people = ["Ann", "Ber", "Cha", "Dug", "Efi"];
let html = ``;
let html2 = ``;

people.forEach(function (person) {
  //create the html template
  html += `<li>${person}</li>`;
});
//you can also turn the function as a seperate callback instead, or also turn into arrow

console.log(html);
list.innerHTML = html;

//turning the function into a callback function instead
const renderHTML = (person) => {
  //create the html template
  html2 += `<li>${person}</li>`;
};

people.forEach(renderHTML);

console.log(html2);
list.innerHTML += html2;

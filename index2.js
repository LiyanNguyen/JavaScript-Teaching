//FOR LOOPS
for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}
console.log("loop finished");

const names = ["Amber", "Lumine", "HuTao"];
let html = "";

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
  html += `<div>${names[i]}</div>`;
}

console.log(html);

//WHILE LOOPS

let i = 0;
while (i < 5) {
  console.log("in loop: ", i);
  i++;
}

let j = 0;
while (j < names.length) {
  console.log(names[j]);
  j++;
}

//DO WHILE LOOPS
let k = 0; //change the value of this to 4 or 5 and higher

do {
  //loop first, THIS WILL ALWAYS RUN ATLEAST ONCE
  console.log("in loop: ", k);
  k++;
} while (k < 5); //evaluate condition

//IF CONDITIONS
const age = 25;

if (age > 20) {
  console.log("you are over 20 years old");
} else {
  console.log("you less than 20 years old");
}

if (names.length > 2) {
  console.log("names have more than 2 elements");
}

const password = "p@ssworddssd";

if (password.length >= 12 && password.includes("@")) {
  console.log("that password is strong");
} else if (password.length >= 8 || (includes("@") && password.length > 5)) {
  console.log("that password is good");
} else {
  console.log("that password is not strong enough");
}

//logical NOT(!)
let user = false;

if (!user) {
  console.log("you must be logged in");
}

console.log(!true);
console.log(!false);

//break and continue
const scores = [50, 25, 0, 30, 100, 20, 0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue; //jumps out of this one particular loop, goes back at the top loop and ignores the bottom codes
  }

  console.log("your score is: ", scores[i]);

  if (scores[i] === 100) {
    console.log("nice perfect points");
    break; //break completely from the loop
  }
}

//SWITCH STATEMENTS

const grade = "C";

//without the break; in between
switch (grade) {
  case "A":
    console.log("you got an A!");
  case "B":
    console.log("you got a B!");
  case "C":
    console.log("you got a C!"); //becomes true
  case "D":
    console.log("you got a D!"); //the rest of the following
  default:
    console.log("not a valid grade"); //also becomes true without break;
}

//WITH the break; in between
switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got a B!");
    break;
  case "C":
    console.log("you got a C!");
    break;
  case "D":
    console.log("you got a D!");
    break;
  default:
    console.log("not a valid grade");
    break;
}

//VARIABLES AND BLOCK SCOPE

let someVariable = 30; //GLOBAL SCOPE
//let someVariable = 50; //Uncaught SyntaxError: Identifier 'someVariable' has already been declared

if (true) {
  //local scope
  let someVariable = 40; //re declaring it, ALLOWED INSIDE A SCOPE BLOCK
  let lookAnotherOne = "Mario";
  console.log("inside the code block: ", someVariable, lookAnotherOne); //40 and Mario

  if (true) {
    let someVariable = 50; //local scope only on this block, parent block cannot access
    console.log("inside another code block: ", someVariable, lookAnotherOne); //50 and Mario
    var test = "hello!"; //var is accessible anywhere, AFTER its creation even if its undefined
  }
}
//note!: changing the let to const also behaves the same way!
//var IGNORES the block scope! it can be referenced anywhere AFTER its creation even undefined

console.log(
  "outside the code block: ",
  someVariable /*, lookAnotherOne*/,
  test
); //30 hello!
//Uncaught ReferenceError: lookAnotherOne is not defined

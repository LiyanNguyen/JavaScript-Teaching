/*-------
VARIABLES
-------*/

//alert('hello  world!');

console.log(1);
console.log(2);

//modern way
let age = 25;
let year = 2021;

console.log(age);
console.log(age, year);

age = 30;
console.log(age);

//not changing, cannot be overriden
const points = 100;
console.log(points);

//points = 90; //Uncaught TypeError: Assignment to constant variable.
//console.log(points);

//old way
var score = 75;
console.log(score);

//let vs var
//let name = "John Doe";
//let name = 0;// Uncaught SyntaxError: Identifier 'name' has already been declared

var name = "John Doe";
var name = 0; //can be redeclared

/*
long comment
*/

/*
Number = 1, 2, 100
String = '' , ""
Boolean = true /false
Null = no value but declared
Undefined = not yet been defined variables
Object = complex data structures (arrays, dates, literals)
Symbol = used with objects
*/

/*-----
STRINGS
-----*/
console.log("Hello single quotes");

console.log("Hello double quotes");

let email = "you@something.com";
console.log(email);

//concatenation
let firstName = "John";
let lastName = "Smith";

let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[5]);

//string length
console.log(fullName.length); //not a function, just a property of string

//string methods
console.log(fullName.toUpperCase()); //a method or a function
let LowerCaseresult = fullName.toLowerCase(); //methods dont alter the actual variables themselves
console.log(LowerCaseresult);
console.log(LowerCaseresult, fullName);

//string index
let index = email.indexOf("@");
console.log(index);

let lastIndex = email.lastIndexOf("m");
console.log(lastIndex);

let sliceResult = email.slice(0, 6); //from index 0 to index 6
console.log(sliceResult);

let subString = email.substring(2, 8); //from index 2 UNTIL index 8
console.log(subString);

let subStr = email.substr(2, 8); //from index 2 THEN get 8 characters, starts from index 2 to index 10
console.log(subStr);

let replaceResult = email.replace("m", "w"); //finds the FIRST 'm' then replace it with 'w'
console.log(replaceResult);

/*-----
NUMBERS
-----*/

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

//math operators +, -, *, /, **, %
console.log(10 / 2);

let result1 = radius % 3;
console.log(result1);

let result2 = pi * radius ** 2;
console.log(result2);

//order of operation is BIDMAS

let likes = 10;
likes = likes + 1;
console.log(likes);

likes++;
console.log(likes);

likes--;
console.log(likes);

likes += 10;
console.log(likes);

likes -= 10;
console.log(likes);

let unlike = -5;

likes = likes + unlike;
console.log(likes);

likes += unlike;
console.log(likes);

likes *= 4;
console.log(likes);

likes /= 4;
console.log(likes);

//Nan - not a number
console.log(5 * "hello");

console.log(5 + "hello"); //gets converted to string
console.log("hello" + 5); //gets converted to string

likes += 78;
let message1 = "this page has: " + likes + " likes";
console.log(message1);

//tempalte strings
const title = "The book of the Dead";
const author = "Mario";
const bookLikes = 69;

//concatenate way
let message2 =
  "The book is called " +
  title +
  " and the author is " +
  author +
  " which has " +
  bookLikes +
  " likes";
console.log(message2);

//template string way
let message3 = `The book is called ${title} and the author is ${author} which has ${
  bookLikes + 5
} likes'`;
console.log(message3);

//creating HTML templates with tempalte string way
let newHTML = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span> which has ${bookLikes + 5} likes </span>
`;

console.log(newHTML);

/*-----
OBJECTS
-----*/
let BookReaders = ["Shawn", "Ronald", "Donald", "Trump"];
console.log(BookReaders);
console.log(BookReaders[1]);

BookReaders[1] = "Mario";
console.log(BookReaders[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let mixture = ["Shawn", 20, "Ronald", 25, "Donald", 30, 35, "Trump"];
console.log(mixture);
console.log(mixture.length);

//array methods
let arrayjoins = BookReaders.join("-");
console.log(arrayjoins); //now instead of 4 elements, its just element

let findElement = BookReaders.indexOf("Donald"); //find index of certain element
console.log(findElement);

let combinedArray = BookReaders.concat(["Amelia", "Watson"]); //combining 2 arrays
console.log(combinedArray);

let combinedArray2 = BookReaders.concat(ages); //combining 2 arrays pre-defined
console.log(combinedArray2);

let pushArray = BookReaders.push("Harry"); // WILL ALTER the original value, (destructive method)
console.log(pushArray); //logging the new length
console.log(BookReaders); //now youll see the new addition

let popArray = BookReaders.pop();
console.log(popArray); //will log the value it took out
console.log(BookReaders); //now youll see the vaue removed

/*--------------
NULL & UNDEFINED
--------------*/
let UndefinedExample; //declared but no value

console.log(
  UndefinedExample,
  UndefinedExample + 5,
  `the value is ${UndefinedExample}`
);
//undefined,  NaN, "the value is undefined"

let NullExample = null; //declared with intentional no value
console.log(NullExample, NullExample + 5, `the value is ${NullExample}`);
//null, 5, "the value is null

/*------
BOOLEANS
------*/

console.log(true, false, "true", "false"); //boolean vs string

let userEmail = "mario@yahoo.com";
let includeTest = userEmail.includes("@");
console.log(includeTest); //should be true

includeTest = userEmail.includes("!");
console.log(includeTest); //should be fase

let userNames = ["Keqing", "Ganyu", "Amber"];
includeTest = userNames.includes("Keqing");
console.log(includeTest); //should be true

let userAge = 25;
console.log(userAge == 25); //should be true
console.log(userAge > 15); //should be true
console.log(userAge == 35); //should be false
console.log(userAge != 35); //should be true
console.log(userAge <= 15); //should be false
console.log(userAge >= 25); //should be true

let testName = "Amogus";
console.log(testName == "amogus"); //should be false
console.log(testName == "AmoGus"); //should be false
console.log(testName == "Amogus"); //should be true
console.log(testName > "Sus"); //should be false, checks the first letter (A vs S)
console.log(testName < "Sus"); //should be true, checks the first letter (A vs S)
console.log(testName > "Bus"); //should be true, checks the first letter (B vs S)
console.log(testName < "aus"); //should be true, checks the first letter (A vs a), lower case > uppercase

//TYPE CONVERSIONS
console.log(userAge == 25); //should be true
console.log(userAge == "25"); //should be STILL true, different types can still be equal, so use ===

console.log(userAge != 25); //should be false
console.log(userAge != "25"); //should be STILL false

console.log(userAge === 25); //should be true
console.log(userAge === "25"); //should be FALSE (type is also checked in ===)

let sampleVariable = "100";
let sampleVariable2 = "ASDASD";
console.log(sampleVariable + 1); //1001 because its a string concat with 1

sampleVariable = Number(sampleVariable); //CONVERT STRING INTO A NUMBER IF POSSIBLE
console.log(sampleVariable + 1); //101 because we converted the string to number

//CHECK TYPE OF A VARIABLE
console.log(typeof sampleVariable2); //string

sampleVariable2 = Number(sampleVariable2); //turne the string into a number  if possible
console.log(sampleVariable2 + 1); //NaN, cuz 'ASDASD' cannot be converted to number

console.log(typeof sampleVariable2); //number cuz we converted it

let convertedString = String(sampleVariable); //CONVERT NUMBER INTO A STRING
console.log(convertedString); //100 as a string
console.log(typeof convertedString); //string

let boolTest = Boolean(0);
console.log(boolTest); //false

boolTest = Boolean(00);
console.log(boolTest); //STILL false

boolTest = Boolean(1);
console.log(boolTest); //true

boolTest = Boolean(001);
console.log(boolTest); //BECOMES true (atleast one 1 makes it true)

boolTest = Boolean(100);
console.log(boolTest); //BECOMES true (atleast one 1 makes it true)

boolTest = Boolean("0");
console.log(boolTest); //BECOMES true (string of ANY length is true)

boolTest = Boolean("1");
console.log(boolTest); //BECOMES true (string of ANY length is true)

boolTest = Boolean("");
console.log(boolTest); //BECOMES false (string with 0 length is false)

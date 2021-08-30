/*==========================================
GRABBING SINGLE ELEMENTS USING QUERYSELECTOR
==========================================*/
let elem = document.querySelector("p"); //grabs the FIRST <p> tag in the HTML
console.log(elem);

elem = document.querySelector(".error"); //grabs the FIRST element that has "error" class
console.log(elem);

//grabs the FIRST element that is <h5> and has "error" class
elem = document.querySelector("h5.error");
console.log(elem);

//using querySelector to be very specific using element copy selector method
elem = document.querySelector("body > div:nth-child(3) > h5:nth-child(3)");
console.log(elem);

//using querySelector to get element with a specific ID
elem = document.querySelector("#second-header");
console.log(elem);

/*=======================================
GRABBING ALL ELEMENTS USING QUERYSELECTOR
=======================================*/
let elems = document.querySelectorAll("p"); //grabs ALL the <p> tag in the HTML
console.log(elems); //this becomes a kind of array (NodeList)
console.log(elems[1]); //so we can do this
elems[1].innerHTML = "we changed this one!"; // we can also do this

//because it is an array, we can also use forEach with an arrow function
elems.forEach((elem) => {
  elem.innerHTML = "we looped and changed it one by one";
});

elems = document.querySelectorAll(".error"); //grabs ALL elements that has "error" class
elems.forEach((elem) => {
  elem.innerHTML =
    "we looped and changed the elements with error class one by one";
});

//-----------------
//GET ELEMENT BY ID
//-----------------
let title = document.getElementById("second-header");
console.log(title);
title.innerHTML = "we changed the second header!";

//--------------------------
//GET ELEMENTS BY CLASS NAME
//--------------------------
title = document.getElementsByClassName("error");
console.log(title); //this becomes a kind of array (HTMLCollection)
title[1].innerHTML = "we changed the 2nd element that has error class!";
//NOTE!: you cannot use forEach loop in an HTMLCollection type unlike in NodeList

//------------------------
//GET ELEMENTS BY TAG NAME
//------------------------
let tags = document.getElementsByTagName("p"); //grabs all the <p> elements
console.log(tags); //this becomes a kind of array (HTMLCollection
tags[1].innerHTML = "we changed the 2nd paragraph element!";
//NOTE!: you cannot use forEach loop in an HTMLCollection type unlike in NodeList

//GETTING INNER TEXT
//(NOTE!: .innerText only gets the VISIBLE text)
//use .TextContent instead to get ALL the texts of an element
let textEdited = document.querySelector("#con-p");
console.log(textEdited.innerText); //get the text
textEdited.innerText = "no longer the old span!";
//this wil override the old text hardcoded in HTML
//to append use the += operation instead!

//DYNAMICALLY CHANGE THE INNER HTML USING FOREACH
let newAppended = document.querySelector("#content");
console.log(newAppended);

const Users = ["Amber", "Lumine", "Klee", "Sucrose", "Hu Tao"]; //the users

//loop trough the users and append them to the HTML one by one
Users.forEach((user) => {
  newAppended.innerHTML += `<span>${user} </span>`;
});

/*========
CONCLUSION
========*/
//USE QUERYSELECTOR FOR MODERNJS, AND TO USE FOREACH
const outLink = document.querySelector("#link-out");

/*===============================
GRABBING ATTRIBUTES OF AN ELEMENT
===============================*/
//get the value of a certain attribute
console.log(outLink.getAttribute("href")); //https://www.google.com/
//NOTE!: this attributes can be grabbed because they already exists!
//if they dont, return value will be null

//change the value of a certain attribute (THIS WILL OVERRIDE THE OLD VALUE)
outLink.setAttribute("href", "https://twitter.com/home"); //(what attribute, what value)
console.log(outLink.getAttribute("href")); //https://twitter.com/home
outLink.innerText = "The link has been changed!";

const mssg = document.querySelector("#italic-text");
console.log(mssg.getAttribute("class")); //italic
mssg.setAttribute("class", "no-longer-old-class");
console.log(mssg.getAttribute("class")); //no-longer-old-class

//add a new attribute to an element, that doesnt exist yet
mssg.setAttribute("style", "color:blue");
//we can also see it change to color blue (inline css)
console.log(mssg);

//to not override an existing attribute we can do this
console.log(mssg.style.color); //blue
mssg.style.margin = "50px";
console.log(mssg.style.margin); //50px
//this way we can manipulate the CSS of an element

mssg.style.color = "red"; //change the color to red
console.log(mssg.style.color); //red
mssg.style.fontSize = "40px"; //change the font-size to 40
//do note that in CSS its 'font-size' but in JS its 'fontSize'
console.log(mssg.style.fontSize); //40px

mssg.style.margin = "";
//remove the margin, this will also automaticallyr remove the style attribute as well
console.log(mssg.style.margin); //blank

console.log(mssg.style); //ALL THE CSS INFORMATION

/*============================
GRABBING CLASSES OF AN ELEMENT
============================*/
//THIS IS VERY USEFUL WHEN USING BOOTSTRAP , TAILWIND, OR OTHER CSS FRAMEWORKS

const elemFW = document.querySelector("#div-framework");
console.log(elemFW.classList); //shows all the classes (6) (DOMTokenList)

//adding a class to an element
elemFW.classList.add("s-new", "z-new");
console.log(elemFW.classList); //shows all the classes (8) (DOMTokenList)

//removing a class to an element
elemFW.classList.remove("s-new");
console.log(elemFW.classList); //shows all the classes (7) (DOMTokenList)

//TOGGLING A CLASS IN AN ALEMENT(ADD OR REMOVE)
//VERY USEFUL WHEN USING CSS FRAMEWORKS!
const titleElement = document.querySelector("#page-title");

titleElement.classList.toggle("page-title"); //adds the class (which makes it red)
titleElement.classList.toggle("page-title"); //removes the class

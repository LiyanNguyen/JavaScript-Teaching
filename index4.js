//OBJECT LITERALS

//array of objects
const voice = [
  { line: "UOOOGGHH" },
  { line: "SEEEEEEGGS" },
  { line: "ORE WA" },
  { line: "SEGGS WO SURUN JANE" },
];

console.log(voice);

let chara = {
  name: "Hot Tao",
  age: 14,
  type: "Fire",
  abilities: ["Fire-Sword", "Fire-Polearm", "FIREHOT"],
  damage: 690,
  voiceLines: voice,

  //method of this object
  //dont turn these function into arrow functions, this. keyword cannot be accessible
  attack(oof) {
    console.log("She attacked!", this.damage, oof);
  },
  dodge(miss) {
    console.log("She dodged!", miss);
  },
  showAbility(index) {
    console.log(this.abilities[index]);
  },
  seeAllAbilities() {
    this.abilities.forEach((abilityName) => {
      console.log(abilityName);
    });
  },
  seeVoiceLine() {
    this.voiceLines.forEach((voiceLineElement) => {
      console.log(voiceLineElement.line);
      //note that 'voiceLineElement' is each element of the array
      //which then refers to an object, then we use .line
      //to refer to the actual value of that property
    });
  },
};

console.log(chara);
console.log(chara.name);
console.log(chara["name"]);

chara.age = 45;
console.log(chara.age);

chara["name"] = "Amber";
console.log(chara.name); //Amber
console.log(chara["name"]); //square bracket way, useful in reserved keywords as variables

console.log(typeof chara); //object
console.log(typeof chara.name); //string

//method call of an object
//methods are just functions inside an object
chara.attack("yikes"); //She attacked! 690 yikes

chara.dodge("woosh"); //She dodged! woosh
chara.showAbility(2); //Fire-Polearm
chara.seeAllAbilities();
chara.seeVoiceLine();

//MATH OBJECTS

//all math methods
console.log(Math);

console.log(Math.PI);
console.log(Math.E);

const area = 69.69;
const area2 = 69.2;

//round down or up to nearest whole number
console.log(Math.round(area)); //70
console.log(Math.round(area2)); //69

//round down (all the time)
console.log(Math.floor(area)); //69
console.log(Math.floor(area2)); //69

//round up (all the time)
console.log(Math.ceil(area)); //70
console.log(Math.ceil(area2)); //70

//take away the decimal
console.log(Math.trunc(area)); //69
console.log(Math.trunc(area2)); //69

//random numbers
const rdm = Math.random();
console.log(rdm); //RNG (between 0 - 1 by default)
console.log(Math.round(rdm)); //round the random so its always either 1 or 0

// get random number between 0 - 1 THEN multiply by 100 so we get 0 - 100
// THEN we round it to nearest whole number
console.log(Math.round(rdm * 100));

/*=====================
PRIMITIVES & REFERENCES
=====================*/
//STACK AND HEAP DIFFERENCE!

//primitive values (STACK)
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`SC1: ${scoreOne}, SC2: ${scoreTwo}`); //SC1: 50, SC2: 50

scoreOne = 75; //we update the value
console.log(`SC1: ${scoreOne}, SC2: ${scoreTwo}`); //SC1: 75, SC2: 50
//notice how scoreTwo didnt update, because its a seperate stack
//scoreTwo was defined with the old value of scoreOne

//reference values (HEAP)
const UserOne = { name: "Hu Tao", age: 14 };
const UserTwo = UserOne;

console.log(UserOne, UserTwo); //{name: "Hu Tao", age: 14} x2

UserOne.age = 69; //we update the value
console.log(UserOne, UserTwo); //{name: "Hu Tao", age: 69} x2
//notice how UserTwo also update, because its pointing to the same heap
//UserTwo was defined with whatever UserOne was pointing to (which is the object)

UserTwo.age = 45; //we update the value
console.log(UserOne, UserTwo); //{name: "Hu Tao", age: 45} x2
//updating UserTwo ALSO updates UserOne, because they are pointing to the same heap!

//REFERENCES TYPES ARE STORED ONCE! but you can have multiple pointers to it
//references types can be: arrays, objects, functions
//stack is faster than heap, heap has more space than stack

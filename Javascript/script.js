alert("hello world");
document.write("Nigga is here");
var age = 45;
var nation = "Pakistani";
var feepaid = true;

alert(age);
alert(nation);

console.log(age);
console.log(feepaid);

age = 21;
console.log(age);

//Variable for string
var name = "Shahwar Afridi"
console.log(name);
name = "Arham Afridi";
console.log(name);
var message = "What is your Fathser's Name";
console.log(message);

//Variable for number
var weight = 80.5;
console.log(weight);
var newweight = weight + 20;
console.log(newweight);

//Variable for boolean
var isfeepaid = true;
console.log(isfeepaid);

//Undefined vs Null
var learn;
console.log(learn); //console par undefined lekha ayega
learn = "Undefined vs Null";
console.log(learn);
learn = undefined;
console.log(learn);

var yoyo = null;
console.log(yoyo);

//Dynamic Datatypes
var a = 35;
console.log(a);
a = "apple";
console.log(a);
a = true;
console.log(a);

//Typeof Operator
var banana = "Favourite";
console.log(typeof banana);

banana = 56;
console.log(banana);

//Semicolon is the end of statements,therefore we can 
//add more than one statemnents at on a single line
// Semicoln = new line. hence no need to add semicolon if you are changing line
//however Semicolon increases code understandbility.
var a = 5;
var b = 6;
var c = 0;
c = a + b;
console.log(c);

//Legal and Illegal Variable name

//Allowed
var age = 56;
var $age;
var _age;
var First_Name;
var hello$World;

//Not Allowed
var 5 age;
var hello£ world;
var first name;

//Comments

/* Multi-Line Comment
this is the example*/
//Single Line comment
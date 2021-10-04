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
/*var 5 age;
var hello£ world;
var first name;*/

//Comments

/* Multi-Line Comment
this is the example*/
//Single Line comment

//Reserved keyword wo hote hain jo hum as a variable name use nhy karsakte

/*
 var for = 5;
  var if =6;
  */

//Increment and decrement operator

var z = 5;
z++; // z = z + 1
console.log(z);
var y = 10;
y--; // y = y - 1
console.log(y);

//Pre-Increment (Phala increment ya decrement hoga phir update hoga)
var w = 10; //w = 11
var x = ++w; //w = 11
console.log("w = " + w);
console.log("x = " + x);

var h = 15;
var l = --h;
console.log("h = " + h); //h = 14
console.log("l = " + l); //l = 14

//Post-Increment (Phala update hoga phir increment ya decrement hoga)
var t = 5;
var r = t++;
console.log("t = " + t); //t = 6
console.log("r = " + r); //r = 5

var e = 10;
var u = e--;
console.log("e = " + e); //e = 9
console.log("u = " + u); // u = 10

//example
var p = 6; //7  //6
var j = 7; //6
var g = ++p - --j + --p;
console.log("g = " + g);

//example
var q = 4;
var m = 2;
var n = q++ - m;
alert(q); //5
alert(m); //2
alert(n); //2
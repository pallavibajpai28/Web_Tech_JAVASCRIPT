// Day 1


console.log("External JavaScript file loaded."); 


//^ Primitive Data Types in JavaScript - 5 types number, string, boolean, null, undefined


//! 1.number data type  
var a=10;
console.log(a); //10 

var b=20;
console.log(b);  //20 




  //! typeof operator - to know the return data type of variables
console.log(typeof a); //number
console.log(typeof b); //number

var c = 187643095732597348501;
console.log(c); //187643095732597340000
console.log(typeof c); //number




//! 2. boolean data type
let y = false;
console.log(y); //false
console.log(typeof y); //boolean    




//! 3. string data type
let firstName = "John";
console.log(firstName); //John
console.log(typeof firstName); //string 

let name1 = 'Pallavi';
console.log(name1); //Pallavi
console.log(typeof name1); //string

console.log('My name is "Ram"'); //My name is "Ram"




// template literals - backtick (``) : when you want to access the value inside the string
//  or when you want to perform any expression inside the string we need string interpolation using ${}

console.log(`My name is ${firstName} and my age is ${20+4}.`); //My name is John and my age is 24.




//! 4. null data type
let age = null;
console.log(age); //null
console.log(typeof age); //object




//! 5. undefined data type
let city;
console.log(city); //undefined
console.log(typeof city); //undefined






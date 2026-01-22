// Day 1


// console.log("External JavaScript file loaded."); 


// //^ Primitive Data Types in JavaScript - 5 types number, string, boolean, null, undefined


// //! 1.number data type  
// var a=10;
// console.log(a); //10 

// var b=20;
// console.log(b);  //20 




//   //! typeof operator - to know the return data type of variables
// console.log(typeof a); //number
// console.log(typeof b); //number

// var c = 187643095732597348501;
// console.log(c); //187643095732597340000
// console.log(typeof c); //number




// //! 2. boolean data type
// let y = false;
// console.log(y); //false
// console.log(typeof y); //boolean    




// //! 3. string data type
// let firstName = "John";
// console.log(firstName); //John
// console.log(typeof firstName); //string 

// let name1 = 'Pallavi';
// console.log(name1); //Pallavi
// console.log(typeof name1); //string

// console.log('My name is "Ram"'); //My name is "Ram"




// // template literals - backtick (``) : when you want to access the value inside the string
// //  or when you want to perform any expression inside the string we need string interpolation using ${}

// console.log(`My name is ${firstName} and my age is ${20+4}.`); //My name is John and my age is 24.




// //! 4. null data type
// let age = null;
// console.log(age); //null
// console.log(typeof age); //object




// //! 5. undefined data type
// let city;
// console.log(city); //undefined
// console.log(typeof city); //undefined





//Day 2



// //~ Declaration types -var

// var a;
// console.log(a)

// a=10;
// console.log(a);

// var b=20;
// console.log(b);

// var a;
// console.log(a);


// a=20;
// console.log(a);

// //~let

// let a;
// console.log(a);

// a=20;
// console.log(a);

// let b=30;
// console.log(b);

// a=40;
// console.log(a);

// //~ const

// const d=20;
// console.log(d);



//~ Type Conversion

// console.log("hello" + 10);
// console.log("hello"+"string");
// console.log("hello"+"10");
// console.log(10+"10");
// console.log(10+true);
// console.log(10+10);
// console.log(true+"10");
// console.log(true+true);
// console.log("30"-10);
// console.log("hello"-10);
// console.log(null -20);
// console.log(10=="10");
// console.log(10 ==="10");
// console.log(true==1);
// console.log(true===1);









// Day 3 Function types - 1.Named function 2.Function Declaration 3.Anonymous Function 4.Function Expression
//                        5.Arrow function 6.Higher Order Function 7.Callback Function

// function addition(){

//   console.log(2+2)
// }
// addition()

// function add(a, b){  // a, b are parameters

//   console.log(a + b)
// }
// add(4,5)  // 4,5 are argument
// add(2,3)


//~ function declaration
// Hoisting is possible only with Function Declaration
// add(6,7)
// function add(a,b) { // the hoisting is possible
//   console.log(a + b)
// }


//~ function expression
// a(6,7)
// var a = function(a,b) { // here we are using function expression, so hoisting not possible
// console.log(a + b) 
// }


//~ Arrow function

// let app =()=>{
//     console.log("hello");
    
// }
// app()


// let app1 =_=>console.log("yoyo");
// app1()

// let app2 =a=>console.log("bolo");
// app2()



// let num = a=>{return a}
// console.log(num(5));

//~ higher order func

// function add(a){
//     return a()
// }
// console.log(add(num));

//~ callback func

// function num(){
//     return 8
// }






//Day 4


//Q.1 check whether eligible for voting or not

// let age=prompt("Enter your age:")

// function voting() {

//     if(age>=18)
//     {
//         console.log("Eligible for Voting")
//     }

//     else{
//         console.log("Not Eligible for Voting")
//     }
// }
// voting()


//Q2. check whether even or odd

// let num = prompt("enter a number")

// let Numcheck = () => {

//     if(num%2==0)
//     {
//         console.log(num+ " is Even Number")
//     }

//     else{
//         console.log (num+" is Odd Number")
//     }
// }
// Numcheck()



//Q3. addition of 2 numbers

// let num1 = parseInt(prompt("Enter 1st Number:"))
// let num2 = parseInt(prompt("Enter 2nd Number:"))

// function addition() {
//     return num1 + num2
// }
// console.log(addition())



//Q.4 voting age Q but in a different way



//  function voting(age) {

//      if(age>=18)
//      {
//          console.log("Eligible for Voting")
//      }

//      else{
//          console.log("Not Eligible for Voting")
//      }
//  }
  //voting(20) //way1

 //let a = parseInt(prompt("Enter your age:"))  //way2 
 //voting(a)



//& Q1.  create a function that accepts 2 numbers and return the largest number

// let num1 = parseInt(prompt("Enter 1st Number:"))
// let num2 = parseInt(prompt("Enter 2nd Number:"))

// function Greater() {

//     if(num1>num2)
//     {
//         console.log(num1 + " is Greater")
//     }
//     else{
//         console.log(num2 + " is Greater")
//     }
// }
// Greater()


//& Q2. create a function that accepts a number and check whether the number is positive , negative or zero

// let number = parseInt(prompt("Enter a Number:"))

// function checkNumber() {

//     if(number>0)
//     {
//         console.log(number + " is Positive Number")
//     }
//     else if(number<0){
//         console.log(number + " is Negative Number")
//     }
//     else{
//         console.log("The number is Zero")
//     }
// }
// checkNumber()


// //& Q3. create a function that check whether a year is leap year or not

// let year = parseInt(prompt("Enter a Year:"))

// function leapYear() {

//     if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
//     {
//         console.log(year + " is a Leap Year")
//     }
//     else{
//         console.log(year + " is not a Leap Year")
//     }
// }
// leapYear()


// //& Q4. write a function that finds the largest of three numbers using only if...else

// let num1 = parseInt(prompt("Enter 1st Number:"))
// let num2 = parseInt(prompt("Enter 2nd Number:"))  
// let num3 = parseInt(prompt("Enter 3rd Number:"))

// function Largest() {

//     if(num1>num2 && num1>num3){
//         console.log(num1+ " is greatest")
// }

//     else if(num2>num3){

//     }
// }











//Day5


//Palindrome number- number reverse hone pe bhi same reheta h e.g 121 reverse ->121

// function isPalindrome(num) {
//     let temp = num;
//     let reverse = 0;

//     while(temp>0) {
//         let digit = temp % 10;
//         reverse = reverse*10 + digit;
//         temp = parseInt(temp / 10);
//     }


//     if(reverse === num) {
//         return "Palindrome Number";
//     }
//     else {
//         return "Not a Palindrome Number";
//     }
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(123));


//Armstrong number - is a number that is equal to the sum of cubes of its digits e.g 153 -> 1^3 + 5^3 + 3^3 =153 for 2 digits it will be sum of the square of digits

// function isArmstrong(num) {
//     let temp = num;
//     let digits = 0;
//     let sum = 0;

//     let count = num;
//     while(count > 0) {
//         digits++;
//         count = parseInt(count / 10);
//     }

//     while(temp > 0) {
//         let digit = temp % 10;
//         sum = sum + digit ** digits;
//         temp = parseInt(temp / 10);
//     }

//     if (sum === num) {
//         return "Armstrong Number";
//     }
//     else {
//         return "Not an Armstrong Number";
//     }
// }

// console.log(isArmstrong(153));
// console.log(isArmstrong(370));
// console.log(isArmstrong(123));


// //& ARRAYS - 2 ways to create an array 1. using array literal 2. using new keyword (Array() constructor)

// //~ using array literal
// let a = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(typeof a); //object

// //~ using new keyword
// let b = new Array(60, "70", 80, 90, 100);
// console.log(b);
// console.log(typeof b); //object


// //^ Array Methods

// //! 1. push() - adds an element at the end of the array
// let a = [1, 2, 3, 4, 5];
// a.push(10);
// console.log(a); // [1, 2, 3, 4, 5, 10]

// //! 2. pop() - removes the last element from the array
// a.pop();
// console.log(a); // [1, 2, 3, 4, 5]

// //! 3. shift() - removes the first element from the array
// a.shift();
// console.log(a); // [2, 3, 4, 5]

// //! 4. unshift() - adds elements at the beginning of the array
// a.unshift(-1, 0, 1);
// console.log(a); // [-1, 0, 1, 2, 3, 4, 5]


// //! 5. concat() - merges two or more arrays
// let b = [6, 7, 8, 9, 10];
// let c = a.concat(b);
// console.log(c); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// //! 6. flat() - flattens a nested array and returns a new single array
// let nestedArray = [1, 2, [3, 4], [5, 6], [7, 8]];
// let flatArray = nestedArray.flat(); 
// console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8]


// //! 7. includes() - checks if an array contains a specific element
// console.log(c.includes(5)); // true
// console.log(c.includes(15)); // false


// //! 8. slice() - returns a shallow copy of a portion of an array
// let d = c.slice(2, 7); // from index 2 to 6
// console.log(d); // [1, 2, 3, 4, 5]


// //! 9. splice() - adds/removes elements from an array
// c.splice(3, 0, 100, 200); // at index 3, remove 0 elements,  add 100, 200
// console.log(c); // [-1, 0, 1, 100, 200, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// c.splice(4, 2); // at index 4, remove 2 elements
// console.log(c); // [-1, 0, 1, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// c.splice(5, 3, 300, 400); // at index 5, remove 3 elements, add 300, 400
// console.log(c); // [-1, 0, 1, 100, 2, 300, 400, 5, 6, 7, 8, 9, 10]


// //! 10. toString() - converts an array to a string to apply string methods
// let str = c.toString();
// console.log(str); // "-1,0,1,100,2,300,400,5,6,7,8,9,10"


// //! 11. join() - joins all elements of an array into a string using a separator
// let str1 = c.join("*");
// console.log(str1); // "-1*0*1*100*2*300*400*5*6*7*8*9*10"








//Day 6

//^ ARRAY ADVANCE METHODS : map(), filter(), reduce() for interation over arrays (can be only used on arrays, if want )

// //! 1. map() - creates a new array by applying a callback function to each element of the original array (applies the task on each element) and input == output
// let num = [1, 2, 3, 4, 5, 6];
// console.log(num); // [1, 2, 3, 4, 5, 6]

// let three = num.map( (i) => {
// return i * 3;
// })

// console.log(three); // [3, 6, 9, 12, 15, 18]

// //! 2. filter() - to filter the elements and returns a new array based on condition, uses callback function as an argument and input != output
// let even = three.filter( (item) => {
//     return item % 2 == 0;
// })

// console.log(even); // [6, 12, 18]

// //! 3. reduce() - reduces the array to a single value, uses callback function and initial value as an argument
// let total = even.reduce((a, c) => {
//     return a+c
// },0)

// console.log(total)


// //* Q. length of words (use map), filter words less than 3 (use filter), and the merge all words (use reduce)

// let words = ["HTML", "CSS", "JAVASCRIPT", "REACT"]

// let count = words.map( i => i.length) // .length to find length of each word
// console.log(count) // [4, 3, 10, 5]


// let lengthProp = words.filter( i => i.length > 3) // filter words having length greater than 3
// console.log(lengthProp) // ["HTML", "JAVASCRIPT", "REACT"]


// let merge = words.reduce((a, c) =>  [a+c]) // merging all words a is HTML, c is CSS and so on
// console.log(merge) // ["HTMLJAVASCRIPTREACT"]

//* Q1. square only even numbers
//* Q2. sum of numbers greater than 10
//* q3. count total characters
//* Q4. find the largest number in an array using reduce
//* Q5. filter words more than 3 letters

// //? ans1
// let num = [1, 2, 3, 4, 5, 6]
// let even = num.filter( (i) => i%2 == 0 )
// console.log(even)

// let square = even.map( (i) => i*i)
// console.log(square)

// //? ans2
// let num1 = [2, 3, 10, 20, 30, 40]
// let greaterthan10 = num1.filter( (j) => j>10)
// console.log(greaterthan10)

// let sum = greaterthan10.reduce((a, c) =>  a+c )
// console.log(sum)


// // way2 
// let num2 = [2, 3, 10, 20, 30, 40]

// let result2 = num2
//     .filter.num2(n => n>10)
    

// //? ans3
// let words1 = ["hi", "hello", "worlds", "bye"]
// let result3 = words1.reduce( (count, word) => count + word.length, 0)
// console.log(result3)

// //? ans4
// let num4 = [4, 9, 2, 8, 15];
// let result4 = num4.reduce((max, n) => n>max ? n : max);
// console.log(result4);













//Day 7



//^ STRING METHODS

//! length() - returns the length of the string
let word = "Web Technology";
console.log(word.length); // 14


//! charAt() - returns the character at the specified index
console.log(word.charAt(4)); // T


//! charCodeAt() - returns the Unicode of the character at the specified index
console.log(word.charCodeAt(4)); // 84

//! at() - returns the character at the specified index (supports negative indexing)
console.log(word.at(-1)); // y


//! toUpperCase() - converts the string to uppercase
console.log(word.toUpperCase()); // WEB TECHNOLOGY


//! toLowerCase() - converts the string to lowercase
console.log(word.toLowerCase()); // web technology


//! trimStart() - removes whitespace from the beginning of the string
let str1 = "   Hello World   ";
console.log(str1); // "   Hello World   "
console.log(str1.trimStart()); // "Hello World   "


//! trimEnd() - removes whitespace from the end of the string
console.log(str1.trimEnd()); // "   Hello World"


//! trim() - removes whitespace from both ends of the string
console.log(str1.trim()); // "Hello World"


//! replace() - replaces a specified value with another value in the string
let newStr = word.replace("Web", "Front-End")
console.log(newStr); // Web Technology --> Front-End Technology


//! replaceAll() - replaces all occurrences of a specified value with another value in the string
let str2 = "JavaScript is great. I love JavaScript.";
let newStr2 = str2.replaceAll("JavaScript", "JS");
console.log(newStr2); // "JS is great. I love JS."


//! split() - splits the string into an array of substrings based on a specified separator
let array = word.split(",");
console.log(array); // ["Web Technology"]


//! includes() - checks if the string contains a specified value
console.log(word.includes("Tech")); // true


//! 
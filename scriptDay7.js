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

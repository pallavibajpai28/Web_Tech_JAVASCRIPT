// Day 14

//^ BOM (Browser Object Model) : it provides methods to interact with the browser window and control browser features like alerts, prompts, confirmations, and navigation.
//^ BOM (Browser Object Model) Methods 

//! 1. prompt() : This method is used to display a dialog box that prompts the user for input. It returns the input value as a string.

let age = parseInt(prompt("Please enter your age:"));

//! 2. alert() : This method is used to display an alert box with a specified message and an OK button.

function voting() {
    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote.");
    }
}
voting();

//! 3. confirm() : This method is used to display a dialog box with a specified message, along with OK and Cancel buttons. It returns true if the user clicks OK, and false if the user clicks Cancel.

let file = window.confirm("Are you sure to delete this content?");
console.log(file); // true or false based on user action





//^ DOM (Document Object Model) : it represents the structure of an HTML document as a tree of objects, allowing scripts to manipulate the content, structure, and style of web pages dynamically.

console.log(document); // it represents the entire HTML document as an object.

//^ DOM Direct Methods :

//! 1. all : This property returns a collection of all elements in the document.

console.log(document.all); // HTMLAllCollection of all elements in the document as array
                           // output : HTMLAllCollection(7) [html, head, meta, meta, title, body, script, viewport: meta] 


//! 2. scripts : This property returns a collection of all script elements in the document.

console.log(document.scripts); // HTMLCollection of all script elements in the document
                               // output : HTMLCollection(2) [script]


//! 3. images : This property returns a collection of all image elements in the document.

console.log(document.images); // HTMLCollection of all image elements in the document
                               // output : HTMLCollection []


//! 4. links : This property returns a collection of all anchor elements (links) in the document.

console.log(document.links); // HTMLCollection of all anchor elements in the document
                              // output : HTMLCollection []


//! 5. forms : This property returns a collection of all form elements in the document.
console.log(document.forms); // HTMLCollection of all form elements in the document
                              // output : HTMLCollection []


//! 6. body : This property returns the body element of the document.
console.log(document.body); // HTMLBodyElement representing the body of the document

                            // output : <body>...</body>

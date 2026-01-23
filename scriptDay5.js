// Day5


// Palindrome number- number reverse hone pe bhi same reheta h e.g 121 reverse ->121

function isPalindrome(num) {
    let temp = num;
    let reverse = 0;

    while(temp>0) {
        let digit = temp % 10;
        reverse = reverse*10 + digit;
        temp = parseInt(temp / 10);
    }


    if(reverse === num) {
        return "Palindrome Number";
    }
    else {
        return "Not a Palindrome Number";
    }
}
console.log(isPalindrome(121));
console.log(isPalindrome(123));


// Armstrong number - is a number that is equal to the sum of cubes of its digits e.g 153 -> 1^3 + 5^3 + 3^3 =153 for 2 digits it will be sum of the square of digits

function isArmstrong(num) {
    let temp = num;
    let digits = 0;
    let sum = 0;

    let count = num;
    while(count > 0) {
        digits++;
        count = parseInt(count / 10);
    }

    while(temp > 0) {
        let digit = temp % 10;
        sum = sum + digit ** digits;
        temp = parseInt(temp / 10);
    }

    if (sum === num) {
        return "Armstrong Number";
    }
    else {
        return "Not an Armstrong Number";
    }
}

console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(123));


//& ARRAYS - 2 ways to create an array 1. using array literal 2. using new keyword (Array() constructor)

//~ using array literal
let a = [10, 20, 30, 40, 50];
console.log(a);
console.log(typeof a); //object

//~ using new keyword
let b = new Array(60, "70", 80, 90, 100);
console.log(b);
console.log(typeof b); //object


//^ Array Methods

//! 1. push() - adds an element at the end of the array
let a = [1, 2, 3, 4, 5];
a.push(10);
console.log(a); // [1, 2, 3, 4, 5, 10]

//! 2. pop() - removes the last element from the array
a.pop();
console.log(a); // [1, 2, 3, 4, 5]

//! 3. shift() - removes the first element from the array
a.shift();
console.log(a); // [2, 3, 4, 5]

//! 4. unshift() - adds elements at the beginning of the array
a.unshift(-1, 0, 1);
console.log(a); // [-1, 0, 1, 2, 3, 4, 5]


//! 5. concat() - merges two or more arrays
let b = [6, 7, 8, 9, 10];
let c = a.concat(b);
console.log(c); // [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//! 6. flat() - flattens a nested array and returns a new single array
let nestedArray = [1, 2, [3, 4], [5, 6], [7, 8]];
let flatArray = nestedArray.flat(); 
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8]


//! 7. includes() - checks if an array contains a specific element
console.log(c.includes(5)); // true
console.log(c.includes(15)); // false


//! 8. slice() - returns a shallow copy of a portion of an array
let d = c.slice(2, 7); // from index 2 to 6
console.log(d); // [1, 2, 3, 4, 5]


//! 9. splice() - adds/removes elements from an array
c.splice(3, 0, 100, 200); // at index 3, remove 0 elements,  add 100, 200
console.log(c); // [-1, 0, 1, 100, 200, 2, 3, 4, 5, 6, 7, 8, 9, 10]

c.splice(4, 2); // at index 4, remove 2 elements
console.log(c); // [-1, 0, 1, 100, 2, 3, 4, 5, 6, 7, 8, 9, 10]

c.splice(5, 3, 300, 400); // at index 5, remove 3 elements, add 300, 400
console.log(c); // [-1, 0, 1, 100, 2, 300, 400, 5, 6, 7, 8, 9, 10]


//! 10. toString() - converts an array to a string to apply string methods
let str = c.toString();
console.log(str); // "-1,0,1,100,2,300,400,5,6,7,8,9,10"


//! 11. join() - joins all elements of an array into a string using a separator
let str1 = c.join("*");
console.log(str1); // "-1*0*1*100*2*300*400*5*6*7*8*9*10"








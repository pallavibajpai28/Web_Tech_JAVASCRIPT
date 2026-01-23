// Day 6

// ^ ARRAY ADVANCE METHODS : map(), filter(), reduce() for interation over arrays (can be only used on arrays, if want )

//! 1. map() - creates a new array by applying a callback function to each element of the original array (applies the task on each element) and input == output
let num = [1, 2, 3, 4, 5, 6];
console.log(num); // [1, 2, 3, 4, 5, 6]

let three = num.map( (i) => {
return i * 3;
})

console.log(three); // [3, 6, 9, 12, 15, 18]

//! 2. filter() - to filter the elements and returns a new array based on condition, uses callback function as an argument and input != output
let even = three.filter( (item) => {
    return item % 2 == 0;
})

console.log(even); // [6, 12, 18]

//! 3. reduce() - reduces the array to a single value, uses callback function and initial value as an argument
let total = even.reduce((a, c) => {
    return a+c
},0)

console.log(total)


//* Q. length of words (use map), filter words less than 3 (use filter), and the merge all words (use reduce)

let words = ["HTML", "CSS", "JAVASCRIPT", "REACT"]

let count = words.map( i => i.length) // .length to find length of each word
console.log(count) // [4, 3, 10, 5]


let lengthProp = words.filter( i => i.length > 3) // filter words having length greater than 3
console.log(lengthProp) // ["HTML", "JAVASCRIPT", "REACT"]


let merge = words.reduce((a, c) =>  [a+c]) // merging all words a is HTML, c is CSS and so on
console.log(merge) // ["HTMLJAVASCRIPTREACT"]

* Q1. square only even numbers
* Q2. sum of numbers greater than 10
* q3. count total characters
* Q4. find the largest number in an array using reduce
* Q5. filter words more than 3 letters

//? ans1
let num = [1, 2, 3, 4, 5, 6]
let even = num.filter( (i) => i%2 == 0 )
console.log(even)

let square = even.map( (i) => i*i)
console.log(square)

//? ans2
let num1 = [2, 3, 10, 20, 30, 40]
let greaterthan10 = num1.filter( (j) => j>10)
console.log(greaterthan10)

let sum = greaterthan10.reduce((a, c) =>  a+c )
console.log(sum)


// way2 
let num2 = [2, 3, 10, 20, 30, 40]

let result2 = num2
    .filter.num2(n => n>10)
    

//? ans3
let words1 = ["hi", "hello", "worlds", "bye"]
let result3 = words1.reduce( (count, word) => count + word.length, 0)
console.log(result3)

//? ans4
let num4 = [4, 9, 2, 8, 15];
let result4 = num4.reduce((max, n) => n>max ? n : max);
console.log(result4);













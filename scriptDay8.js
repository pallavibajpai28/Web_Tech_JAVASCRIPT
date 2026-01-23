// Day 8 

// ^ Object : collection of key value pairs 



let student = {
    name : "Pallavi",
    age : 22,
    isMarried : false,
    hobbies: ["Sleeping", "Coding", "singing"],
    isWorking : ()=>"Yes, I am Working",
    address : {city : "Vashi"}

}

console.log(student.name)
console.log(student.age)
console.log(student.isMarried)
console.log(student.hobbies)
console.log(student.isWorking())
console.log(student.address)
console.log(student.address.city)



// extarction of values from object (destructuring): destructuring means pulling out values from object and storing them in variables using ${}

let employee = {
    name1 : "Pallavi Bajpai",
    age1 : 23,
    email : "pallavibajpai28@gmail.com",
    dept : "IT",
    sal : "40000",
}



console.log(`Employee name is ${name1}`)
console.log(`Employee ${name1} age is ${age1}`)  
console.log(`Employee's email id is ${email}`)                                   
console.log(`Department is ${dept}`)
console.log(`Employee's salary is ${sal}`)



// Q. 1. find the price after discount for each fruit (.map will be used)
//    2. filter only apples  (.filter will be used)
//    3. find total profit from apples (original price - discounted price)     (.reduce will be used)



//^ Creating an array of objects representing fruits with their prices and discounts
let fruits = [
    {name : "Apple", price : 100, discount : 20},
    {name : "Banana", price : 80, discount : 10},
    {name : "Orange", price : 50, discount : 5},
    {name : "Apple", price : 150, discount : 30},
    {name : "Banana", price : 100, discount : 15},
    {name : "Orange", price : 80, discount : 8},
];

//! Calculating the price after discount for each fruit using .map method

let fruitswithDiscount = fruits.map( fruit => {
    let discountAmount = fruit.price - (fruit.price * fruit.discount) / 100;
    return {
        name : fruit.name,
        originalPrice : fruit.price,
        discount : fruit.discount,
        discountAmount : discountAmount
    }
});
console.log("With Discount : ",fruitswithDiscount);



//! Filtering only apples from the fruitswithDiscount array using .filter method

let onlyApples = fruitswithDiscount.filter( fruit => fruit.name === "Apple");
console.log("Only Apples : ",onlyApples);



//! Calculating the total profit from apples using .reduce method

let totalProfit = onlyApples.reduce((acc, fruit) => {
    return acc + (fruit.originalPrice - fruit.discountAmount)}, 0);
console.log("Total Profit from Apples : ",totalProfit);



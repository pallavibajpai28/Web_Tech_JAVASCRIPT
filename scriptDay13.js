//Day 13

//^ Promises in JavaScript : it is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
//^ It allows you to handle asynchronous operations more effectively by providing a way to attach callbacks for success and failure cases.
//* States of a Promise :
//! 1. Pending : initial state, neither fulfilled nor rejected.
//! 2. Fulfilled : the operation completed successfully.
//! 3. Rejected : the operation failed.


let ans = "No"
let myPromise = new Promise((resolve,reject)=>{
    if(ans === "Yes"){
        resolve("she said yes")
    }
    else{
        reject("she said no")
    }
})
console.log(myPromise);







//* .then() : it is used to handle the fulfilled state of a promise.
//* .catch() : it is used to handle the rejected state of a promise.

myPromise.then((result)=>console.log(result)).catch(error=>console.log(error))

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise1")
    },100);
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise2")
    },500);
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise3")
    },1000);
})








//^ Promise Methods :

//! 1. Promise.all() : it takes an array of promises as input and returns a single promise that resolves when all the input promises have resolved, or rejects if any of the input promises reject.
Promise.all([promise1,promise2,promise3]).then(result=>console.log(result)).catch(error=>console.log(error))


//! 2. Promise.any() : it takes an array of promises as input and returns a single promise that resolves as soon as any of the input promises resolve, or rejects if all the input promises reject.
Promise.any([promise1,promise2,promise3]).then(result=>console.log(result)).catch(error=>console.log(error))
//only resolved promise 


//! 3. Promise.race() : it takes an array of promises as input and returns a single promise that resolves or rejects as soon as any of the input promises resolve or reject.
Promise.race([promise1,promise2,promise3]).then(result=>console.log(result)).catch(error=>console.log(error))
//first exeuted promise return krega


//! 4. Promise.allSettled() : it takes an array of promises as input and returns a single promise that resolves when all the input promises have settled (either resolved or rejected), with an array of objects that describe the outcome of each promise.
Promise.allSettled([promise1,promise2,promise3]).then(result=>console.log(result)).catch(error=>console.log(error))










//^ Fetch API : it provides a modern way to make network requests and handle responses using promises. It is built into modern browsers and allows you to easily fetch resources such as JSON data, text files, images, etc., from a server.

let data2 = fetch("https://fakestoreapi.com/products/1").then(result=>console.log(result.json())).then(data=>console.log(data)).catch(error=>console.log(error)) 
// what is happening here : the fetch function returns a promise that resolves to the Response object representing the response to the request. 
// The first then() method is used to parse the response as JSON using the json() method, which also returns a promise. 
// The second then() method is used to handle the parsed JSON data.
// If any error occurs during the fetch or parsing process, it is caught in the catch() method.








//^ Async/Await : it is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner. 
//^ It is built on top of promises and provides a way to handle asynchronous operations using the async and await keywords.

async function fetchData(params) {
    let data = await  fetch("https://fakestoreapi.com/products/1")
    let response = await data.json()
    console.log(response);
}


fetchData();

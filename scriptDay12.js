//Day 12


//^ Asynchronous JavaScript : it allows the program to perform tasks without blocking the main thread, enabling other operations to continue while waiting for certain tasks to complete, such as fetching data from a server or waiting for user input.

//* Common Asynchronous Methods in JavaScript :

//! setTimeout() : This function is used to execute a specified function or code snippet after a specified delay (in milliseconds).

//! setInterval() : This function is used to execute a specified function or code snippet repeatedly at specified intervals (in milliseconds).

//! clearInterval() : This function is used to stop the execution of a function that was set to run repeatedly using setInterval().

console.log("1st line")
console.log("2nd line")
console.log("imp")
console.log("1st line")
setTimeout(()=>{
        console.log("2nd line")
    },1000);
    
    console.log("imp");
console.log("hii")
setInterval(()=>{
    console.log("i am executing again and again")
},1500)

setInterval
setTimeout

let count  = 0 
let IntervalId = setInterval(()=>{
    count++
    console.log(count)

    if(count === 10){
        clearInterval(IntervalId)
        console.log("Done....")
    }

},1000)

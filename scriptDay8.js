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



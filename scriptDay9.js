//Day 9




//^ OBJECT METHODS

 let student = {
    name : "Pallavi",
    age : 22,
    isMarried : false,
    hobbies: ["Sleeping", "Coding", "singing"],
    isWorking : ()=>"Yes, I am Working",
    address : {city : "Vashi"}
 }


//! 1. keys() - returns an array of all the keys present in the object, in the same order as we get with a normal loop.

 let keys = Object.keys(student);
 console.log(keys); // ["name", "age", "isMarried", "hobbies", "isWorking", "address"]





//! 2. values() - returns an array of all the values present in the object, in the same order as we get with a normal loop.

    let values = Object.values(student);
    console.log(values); // ["Pallavi", 22, false, Array(3), ƒ, {…}]




//! 3. entries() - returns an array of key-value pairs present in the object, in the same order as we get with a normal loop.

    let entries = Object.entries(student);
    console.log(entries); // (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
    // 0: (2) ["name", "Pallavi"]
    // 1: (2) ["age", 22]




//! 4. seal() - prevents new properties from being added and existing properties from being removed, but allows modification of existing properties.

    Object.seal(student);

    //* trying to add but it will not be added
    student.city = "Navi Mumbai"; // Adding new property (will not be added)
    console.log(student.city); // undefined


    //* trying to delete but it will not be deleted
    delete student.isMarried; // Deleting existing property (will not be deleted)
    console.log(student.isMarried); // false


    //* modifying existing property, which is allowed
    student.age = 23; // Modifying existing property
    console.log(student.age); // 23




//! 5. isSealed() - checks if an object is sealed.

    let sealCheck = Object.isSealed(student);
    console.log(sealCheck); // true




//! 6. freeze() - prevents new properties from being added, existing properties from being removed, and existing properties from being modified.

    Object.freeze(student);
    student.age = 24; // Trying to modify existing property (will not be modified)
    console.log(student.age); // 23




//! 7. isFrozen() - checks if an object is frozen.

    let freezeCheck = Object.isFrozen(student);
    console.log(freezeCheck); // true

    


//! 8. assign() - copies the values of all enumerable own properties from one or more source objects to a target object.

    let employee = {
        id : 101,
        department : "IT"
    }
    let mergedObject = Object.assign({}, student, employee);
    console.log(mergedObject); // {name: "Pallavi", age: 23, isMarried: false, hobbies: Array(3), isWorking: ƒ, address: {…}, id: 101, department: "IT"}


// Day 3 Function types - 1.Named function 2.Function Declaration 3.Anonymous Function 4.Function Expression
                       // 5.Arrow function 6.Higher Order Function 7.Callback Function

function addition(){

  console.log(2+2)
}
addition()

function add(a, b){  // a, b are parameters

  console.log(a + b)
}
add(4,5)  // 4,5 are argument
add(2,3)


~ function declaration
Hoisting is possible only with Function Declaration
add(6,7)
function add(a,b) { // the hoisting is possible
  console.log(a + b)
}


~ function expression
a(6,7)
var a = function(a,b) { // here we are using function expression, so hoisting not possible
console.log(a + b) 
}


~ Arrow function

let app =()=>{
    console.log("hello");
    
}
app()


let app1 =_=>console.log("yoyo");
app1()

let app2 =a=>console.log("bolo");
app2()



let num = a=>{return a}
console.log(num(5));

~ higher order func

function add(a){
    return a()
}
console.log(add(num));

~ callback func

function num(){
    return 8
}




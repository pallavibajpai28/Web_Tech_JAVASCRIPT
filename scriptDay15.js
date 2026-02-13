//Day 15




//^ DOM Indirect Methods :

//! 1. getelementbyId() : it returns the element that has the ID attribute with the specified value.

let h1=document.getElementById('heading')
console.log(h1)

h1.style.color="red"

//! 2. getElementByClassName() : it returns a collection of all elements in the document with the specified class name.

let abc=document.getElementsByClassName('tech')
console.log(abc)

//! 3. querySelector() : it returns the first element that matches a specified CSS selector(s) in the document.

let top1=document.querySelector('#heading')
console.log(top1)

//! 4. querySelectorALL() : it returns a static NodeList of all elements that match a specified CSS selector(s) in the document.

let see=document.querySelectorAll('.tech')
console.log(see)







//^ DOM Manipulation Methods :

//! 1.innerHtml 

let container = document.getElementById('container')
console.log(container)

container.innerHTML="<h1>Hello from div</h1>"

//! 2.textContext 

let container=document.getElementById('container')
container.textContent="HEllo Pallavi!"

//! 3.createElement()

let li=document.createElement('li')
li.textContent="Dekho na Dekho na Guyss!!"
let ul=document.getElementById('list')


ul.appendChild(li)

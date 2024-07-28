// DAY 9: DOM Manipulation

// ACTIVITY 1: Selecting & Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text-content
let heading = document.getElementById("mainHeading");
heading.textContent = "Learning JS";

// Task 2: Select an HTML element by its class and change its background color.
let div1 = document.querySelector(".div1");
div1.style.backgroundColor = "yellow";


// ACTIVITY 2: Creating & Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
let newdiv = document.createElement("div");
newdiv.innerHTML = "This is a new div";
document.body.appendChild(newdiv);

// Task 4: Create a new li element and add it to an existing ul list.
let newElement = document.createElement("li");
let list = document.getElementById("Days");
newElement.innerHTML = "Sunday";
list.insertAdjacentElement("beforeend",newElement);


// ACTIVITY 3: Removing Elements
// Task 5: Select an HTML element and remove it from DOM.
let parent = document.querySelector('.div1');
let child = document.querySelector('#para1');
parent.removeChild(child);

// Task 6: Remove the last child of a specific HTML element.
let lastchild = list.lastElementChild;
list.removeChild(lastchild);


// ACTIVITY 4: Modifying Attributes & Classes
// Task 7: Select an HTML element and change one of its attributes (e.g. src of an img tag).
document.getElementById("smiley").src = "https://clipground.com/images/thumbs-up-clipart-emoji-3.jpg";

// Task 8: Add and remove a CSS class to/from an HTML element.
let para2 = document.getElementById("para2");
para2.classList.add("class1");

let demo = document.getElementById("demo");
demo.classList.remove("demo");


// ACTIVITY 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let lastpara = document.getElementById("lastpara");

let btn1 = document.getElementById("btn");
btn1.addEventListener("click",()=>{
    lastpara.innerHTML = "Hello world!";
    btn1.innerHTML = "Text changed";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
//let para = document.getElementById("para1");
demo.addEventListener("mouseover",()=>{
    demo.style.borderColor = "black";
    demo.style.borderRadius = "5px";
});
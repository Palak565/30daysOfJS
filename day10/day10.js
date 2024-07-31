// DAY 10: Event Handling

// ACTIVITY 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
function changetxt(obj)
{
    document.getElementById("obj").innerHTML = "Text changed"
}

let p1 = document.getElementById("p1");
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click",function(){
    document.getElementById("p1").innerHTML = "Text changed"
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
let img1 = document.getElementById("img1");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("dblclick",function(){
    if (img1.style.visibility == "hidden")
    {
        img1.style.visibility = "visible";
    }
    else
    {
        img1.style.visibility = "hidden";
    }
});


// ACTIVITY 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
let p2 = document.getElementById("p2");
p2.addEventListener("mouseover",function(){
    this.style.backgroundColor = "yellow";
});

// Task 4: Add a mouseout event listener that resets its background color.
p2.addEventListener("mouseout",function(){
    this.style.backgroundColor = "white";
});


// ACTIVITY 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById("keydown").addEventListener("keydown",function(event){
    console.log(`${event.key} is pressed`);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById("keyup").addEventListener("keyup",function(){
    document.getElementById("task6").innerHTML = "Keyup: " + this.value;
});


// ACTIVITY 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let formdata = new FormData(event.target);
    let formval = {};
    formdata.forEach((value,key)=>{
        formval[key] = value;
    })
    console.log(formval);
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById("task8").addEventListener("change",function(){
    document.getElementById("p8").innerHTML = "Selected option: " + this.value;
});


// ACTIVITY 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let list = document.getElementById("task10parent");
list.addEventListener("click",function(event){
    if (event.target.tagName === "li")
        console.log(event.target.innerHTML);
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
let btn4 = document.getElementById("btn4");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.innerText);
    }
});
btn4.addEventListener("click", function() {
    let child = document.createElement("li");
    let input = document.getElementById("input").value;
    child.textContent = input;
    list.appendChild(child);
});
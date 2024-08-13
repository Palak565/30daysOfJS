// DAY 20: LocalStorage and SessionStorage


// ACTIVITY 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("str1", "This is in local storage.");
console.log(localStorage.getItem("str1")); // O/P : This is in local storage.


// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let obj = {name: "Palak" , branch: "IT"};
localStorage.setItem("object",JSON.stringify(obj));
let res2_1 = localStorage.getItem("object");
let res2_2 = JSON.parse(res2_1);
console.log(res2_2); // O/P : {name: 'Palak', branch: 'IT'}



// ACTIVITY 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
window.onload = function() {
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("email").value = localStorage.getItem("email");

    document.getElementById("displayName").textContent = "Name: " + localStorage.getItem("name");
    document.getElementById("displayEmail").textContent = "Email: " + localStorage.getItem("email");
}

document.getElementById("Form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);

    document.getElementById("displayName1").textContent = "Name: " + localStorage.getItem("name");
    document.getElementById("displayEmail1").textContent = "Email: " + localStorage.getItem("email");
});


// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log(localStorage.getItem("str1")); // O/P : This is in local storage.
localStorage.removeItem("str1");
console.log(localStorage.getItem("str1")); // O/P : null



// ACTIVITY 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("str5", "This is in session storage.");
console.log(sessionStorage.getItem("str5"));


// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let obj2 = {name: "Bhumi", age: 20};
let toStr = JSON.stringify(obj2);
sessionStorage.setItem("object2",toStr);
let object2 = sessionStorage.getItem("object2");
let _obj2 = JSON.parse(object2);
console.log(_obj2); // O/P : {name: 'Bhumi', age: 20}



// ACTIVITY 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
window.onload = function() {
    document.getElementById("name").value = sessionStorage.getItem("name");
    document.getElementById("email").value = sessionStorage.getItem("email");

    document.getElementById("displayName2").textContent = "Name: " + sessionStorage.getItem("name");
    document.getElementById("displayEmail2").textContent = "Email: " + sessionStorage.getItem("email");
}

document.getElementById("Form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    sessionStorage.setItem("name", document.getElementById("name").value);
    sessionStorage.setItem("email", document.getElementById("email").value);

    document.getElementById("displayName2").textContent = "Name: " + sessionStorage.getItem("name");
    document.getElementById("displayEmail2").textContent = "Email: " + sessionStorage.getItem("email");
});

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage.getItem("object2")); // O/P : {"name":"Bhumi","age":20}
sessionStorage.removeItem("object2");
console.log(sessionStorage.getItem("object2")); // O/P : null



// ACTIVITY 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function Store(key, val){
    localStorage.setItem(key, val);
    sessionStorage.setItem(key, val);

    console.log("Local storage: ", localStorage.getItem(key));
    console.log("Session storage: ", sessionStorage.getItem(key));
}
Store("Abc",123);
// O/P : Local storage:  123
//       Session storage:  123

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearStorage(){
    localStorage.clear();
    sessionStorage.clear();

    if (localStorage.length == 0 && sessionStorage.length == 0)
        console.log("Both storages are clear");
    else
        console.log("Storage clear failed");
}
clearStorage();
// O/P : Both storages are clear

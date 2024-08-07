// DAY 15: Closures

const { uniqueId } = require("lodash");

// ACTIVITY 1: Understanding Closures
//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer(){
    let outervar = 56;
    function inner(){
        console.log(outervar);
    }
    return inner;
}
let res1 = outer();
res1(); // O/P : 56


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter(){
    let count = 0;
    return{
        increment: ()=>{
            count = count+1;
            return count;
        },

        getval: ()=>{
            return count;
        }
    }
}

let val = counter();
console.log(val.getval()); // O/P : 0
console.log(val.increment()); // O/P : 1


// ACTIVITY 2: Practical Closures
// Task 3: Write a function that generates unique IDs.Use a closure to keep track of the last generated ID and increment it with each call.
function uniqId(){
    let id = 123;

    return function(){
        console.log(id);
        id++;
    }
}
const generateId = uniqId();
generateId();    // 123
generateId();    // 124


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greeting(name){
    return function(){
          console.log("Hello", name);
    }
}
let greet = greeting("Palak");
greet();


// ACTIVITY 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
let functions = [];

for (let i = 0; i < 5; i++) {
    functions.push(() => {
        console.log(i);
    });
}

functions[0]();    // 0
functions[1]();    // 1
functions[2]();    // 2
functions[3]();    // 3

// ACTIVITY 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const createItemManager = () => {
    const items = [];

    return {
        addItem: (item) => {
            items.push(item);
        },
        removeItem: (item) => {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        listItems: () => {
            return items.slice();
        }
    };
};


const itemManager = createItemManager();

itemManager.addItem("Item 1");
itemManager.addItem("Item 2");
itemManager.addItem("Item 3");
console.log(itemManager.listItems()); // Output: ["Item 1", "Item 2", "Item 3"]
itemManager.removeItem("Item 2");
console.log(itemManager.listItems()); // Output: ["Item 1", "Item 3"]

// ACTIVITY 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
const memoize = (fn) => {
    const cache = {};

    return (arg) => {
        if (arg in cache) {
            return cache[arg];
        } else {
            const result = fn(arg);
            cache[arg] = result;
            return result;
        }
    };
};


// Task 8: Create a memoized version of a function that calculates the factorial of a number.
const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial(5)); // Output: 120 (from cache)
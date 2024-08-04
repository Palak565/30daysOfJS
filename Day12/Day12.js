// DAY 12 : Error Handling

// ACTIVITY 1: Basic error-handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
let task1 = ()=>{
    throw new Error("Intentional Error");
};


try {
    task1();
    console.log("Success");
} catch (error) {
    console.log("An error occured");
};


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
let task2 = (a,b)=>{
    if (b == 0)
        throw new Error("Denominator can't be zero");
    else
        return a/b;
};

try {
    console.log(task2(2,0));
} catch (error) {
    console.log(`Error: ${error.message}`);
};
// O/P : Error: Denominator can't be zero


// ACTIVITY 2 : Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch & finally blocks to observe the execution flow.
try {
    console.log("This is in try-block");
} catch (error) {
    console.log("This is catch-block");
} finally {
    console.log("This is in finally-block");
};



// ACTIVITY 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class customError extends Error{
    constructor(ans)
    {
        super(ans);
        this.name = "customErrorClass";
    };
};

function throwCustomError(){
    throw new customError("It's a custom error");
}
try {
    throwCustomError();
} catch (error) {
    console.log("Error: " + error.message);
};


// Task 5 : Write a function that validates user input(e.g. checking if a string is non-empty) and throws a custom error if validation fails. Handle the custom error using a try-catch block.
function isEmpty(str){
    if (str == "")
        throw new customError("String is empty!!!");
    else
        return("Success");
};
try {
    isEmpty("");
} catch (error) {
    console.log(`Error: ${error.message}`);
};



// ACTIVITY 4 : Error Handling in Promises
// Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle rejection and log an appropriate message to the console.
let promise = (a)=>{
    return new Promise((resolve,reject)=>{
        if (a > 0)
            resolve(a + " is positive");
        else
            reject(a + " is negative");
    });
};

try{
    promise(-2);
} catch(error){
    console.log(`Error caught: ${error.message}`);
};


// Task 7 : Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and logs the error message.
async function task7(){
    promise7 = new Promise((resolve,reject)=>{
        let random = Math.random();
        if (random > 0.3)
            resolve("Promise resolved");
        reject(new Error("Promise rejected"));
    });

    try{
        res = await promise7;
        console.log("Success");
    } catch (err){
        console.log(`Error caught: ${err.message}`);
    };
};


// ACTIVITY 5 : Graceful Error Handling in Fetch
// Task 8 : Use fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalid.com")
    .then ((response)=> response.json)
    .catch((error) =>
        console.log("Error caught: " + error.message)
    );


// Task 9  : Use fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function task9() {
    try {
        let response = await fetch("https://invalid.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Caught an error: " + error.message);
    }
}

task9();
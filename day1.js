// ACTIVITY 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var num = 25;
console.log(num); // O/P : 25

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let str = "Hello world!";
console.log(str); // O/P : Hello world!

// ACTIVITY 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const work_done = true;
console.log(work_done); // O/P : true

// ACTIVITY 3: Data Types

// Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the `typeof` operator.
let number = 2, word = "two", isPrime = true;
let pencil = {brand: "apsara" , quality: "extra dark"};
let arr = [1, 4, 9, 8];
console.log(typeof(number)); // O/P : number
console.log(typeof(word)); // O/P : string
console.log(typeof(isPrime)); // O/P : boolean
console.log(typeof(pencil)); // O/P : object
console.log(typeof(arr)); // O/P : object

// ACTIVITY 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let x = 2;
console.log(x); // O/P : 2
x = 5;
console.log(x); // O/P : 5

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const val = 10;
console.log(val); // O/P : 10

// Variables declared with `const` cannot be reassigned values.
// val = 20;
// console.log(val); // TypeError: Assignment to constant variable.

// FEATURE REQUEST

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let integer = 5;
let String = "Javascript";
let bool = false;
let obj = {key : "val"};
let array = [1,2,3,4,5];
let newVar;
let nullVal = null;

console.log("Value: ", integer, " Type: ", typeof(integer));
// O/P : Value:  5  Type:  number

console.log("Value: ", String, " Type: ", typeof(String));
// O/P : Value:  Javascript  Type:  string

console.log("Value: ", bool, " Type: ", typeof(bool));
// O/P : Value:  false  Type:  boolean 

console.log("Value: ", obj, " Type: ", typeof(obj));
// O/P : Value:  { key: 'val' }  Type:  object

console.log("Value: ", arr, " Type: ", typeof(arr));
// O/P : 

console.log("Value: ", newVar, " Type: ", typeof(newVar));
// O/P : Value:  undefined  Type:  undefined

console.log("Value: ", nullVal, " Type: ", typeof(nullVal));
// O/P : Value:  null  Type:  object

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVar = "assigned";
console.log(letVar); // Output: assigned
letVar = "reassigned";
console.log(letVar); // Output: reassigned

const constVar = "assign";
console.log(constVar); // Output: assign
// `const` variables cannot be reassigned values.
// constVar = "reassign";
// console.log(constVar); // TypeError: Assignment to constant variable. 
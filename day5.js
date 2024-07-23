// DAY 5: Functions

// ACTIVITY 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
let num1 = 10;

function EvenOdd(x)
{
    if (x % 2 == 0)
        console.log ("Even");
    else
        console.log("Odd");
}

EvenOdd(num1); // O/P : Even


// Task 2: Write a function to calculate the square of a number and return the result.
let num2 = 5;

function square(x)
{
    return x*x;
}

console.log(square(num2)); // O/P : 25


// ACTIVITY 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function max (x,y)
{
    if (x >= y)
        return x;
    else    
        return y;
}

let a = 4, b = 87;
console.log(max(a,b)); // O/P : 87


// Task 4: Write a function expression to concatenate two strings and return the result.
function concat(x,y)
{
    return x + y;
}

let str1 = "Java", str2 = "Script";
console.log(concat(str1,str2)); // O/P : JavaScript



// ACTIVITY 3: Arrow Functions
// Task 5: Write an arrow function to calculate sum of two numbers and return the result.
let sum = (a,b) => a + b;
console.log(sum(8,12)); // O/P : 20


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let charPresent = (str, ch) => str.includes(ch);
console.log (charPresent("Javascript", 'c')); // O/P : true
console.log (charPresent("Javascript", 'k')); // O/P : false



// ACTIVITY 4: Function Parameeters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for second parameter.
function subtract (a, b = 2)
{
    return a-b;
}
console.log(subtract(8)); // O/P : 6


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function details(name, age = 20)
{
    return 'Hello, ' + name + '. Are you ' + age + ' years old?';
}
console.log(details("Kavya")); // O/P : Hello, Kavya. Are you 20 years old?



// ACTIVITY 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function func2 ()
{
    console.log ("Hello world!");
}
function func1(func2, num)
{
    for (let i = 0; i < num; i++)
        func2();
}

func1(func2,5);
// O/P :
// Hello world!
// Hello world!
// Hello world!
// Hello world!
// Hello world!


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function cube(x)
{
    return x*x*x;
}
function double(x)
{
    return 2*x;
}

function f3(f1,f2,x)
{
    let a = f1(x);
    let b = f2(x);
    console.log("f1(" + x + ") = " + a);
    console.log("f2(" + x + ") = " + b);
}

f3(cube,double,5);
// O/P : f1(5) = 125
//       f2(5) = 10
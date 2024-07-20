// Day 02

// ACTIVITY 1: Arithmetic Operators
// Task 1: Write a program to add two numbers and log the result to the console.
let x = 2, y = 5, z = 7;
let sum = x + y;
console.log(sum); // O/P : 7

// Task 2: Write a program to subtract two numbers and log the result to the console.
let diff = x - y;
console.log(diff); // O/P : -3

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = x * y;
console.log(product); // O/P : 10

// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = x / y;
console.log(quotient); // O/P : 0.4

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = x % y;
console.log(remainder); // O/P : 2

//ACTIVITY 2: Assignment Operators
//Task 6: Use '+=' operator to add a number to a variable and log the result to the console.
x += 10;
console.log(x); // O/P : 12

//Task 7: Use '-=' operator to subtract a number from a variable and log the result to the console.
x -= 5;
console.log(x); // O/P : 7

// ACTIVITY 3: Comparison Operators
// Task 8:Write a program to compare two numbers using '>' and '<' and log the result to the console.
console.log(x > y); // O/P : true
console.log(x < y); // O/P : false

// Task 9:Write a program to compare two numbers using '>' and '<' and log the result to the console.
console.log(z >= y); // O/P : true
console.log(z <= x); // O/P : true

// Task 10:Write a program to compare two numbers using '==' and '===' and log the result to the console.
console.log(x == z); // O/P : true
console.log(2 == '2'); // O/P : true
console.log(2 === '2'); // O/P : false

//ACTIVITY 4: Logical Operators
// Task 11: Write a program that uses '&&' operator to combine two conditions and log the result to the console.
console.log((x < y) && (y < z)); // O/P : false
console.log((x >= y) && (y < z)); // O/P : true

// Task 12: Write a program that uses '||' operator to combine two conditions and log the result to the console.
console.log((x < y) || (y > z)); // O/P : false
console.log((x >= y) || (y < z)); // O/P : true

// Task 13: Write a program that uses '!' operator to combine two conditions and log the result to the console.
console.log(!(x >= y)); // O/P : false
console.log(!(y > z)); // O/P : true

// ACTIVITY 5: Ternary Operator
// Task 14: Write a program that uses ternary operator to check if a number is positive or negative and log the result to the console.
console.log((4 >= 0) ? "POSITIVE" : "NEGATIVE"); // O/P : POSITIVE
console.log((-7 >= 0) ? "POSITIVE" : "NEGATIVE"); // O/P : NEGATIVE

// FEATURE REQUEST
// 1. Arithmetic Operators Script: Write a script that performs basic arithmetic operations( addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let num1 = 10, num2 = 15;
console.log(num1 + num2); // O/P : 25
console.log(num1 - num2); // O/P : -5
console.log(num1 * num2); // O/P : 150
console.log(num1 / num2); // O/P : 0.6666
console.log(num1 % num2); // O/P : 10

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
console.log((num1 < num2) && (num2 < z)); // O/P : false
console.log((num1 >= num2) || (num2 > z)); // O/P : true
console.log(!(num1 >= num2)); // O/P : true

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
console.log((100 >= 0) ? "POSITIVE" : "NEGATIVE"); // O/P : POSITIVE
console.log((-56 >= 0) ? "POSITIVE" : "NEGATIVE"); // O/P : NEGATIVE

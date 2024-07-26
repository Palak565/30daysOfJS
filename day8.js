// DAY 8: ES6+ Features

// ACTIVITY 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Arya", age = 25;
let person = `${name} is ${age} years old.`
console.log(person); // O/P : Arya is 25 years old.


// Task 2: Create a multi-line string using template literals and log it to the console.
let MultiLineStr = `Hi, I am good.
Hope you're 
also doing well.`
console.log(MultiLineStr);
// O/P : Hi, I am good.
// Hope you're
// also doing well.



// ACTIVITY 2: Destructuring
// Task 3: Use array destructuring to extract the first & second elements from an array of numbers and log them to the console.
let arr1 = [4 ,5 , 8, 9 , 2];
let [first, second] = arr1;
console.log(first); // O/P : 4
console.log(second); // O/P : 5


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title : "My Adventrous Journey towards ME",
    author : "Priyanka Mehta"
};
let {title : book_title, author : book_author} = book;
console.log(book_title); // O/P : My Adventrous Journey towards ME
console.log(book_author); // O/P : Priyanka Mehta



// ACTIVITY 3: Spread & Rest Operators
// Task 5: Use the spread operator to create a new array that includes all the elements of an existing array plus additional elements, and log the new array to the console.
let arr2 = [1, 2, 3];
function addElements(arr, num1,num2,num3)
{
    newarr= [...arr,num1,num2,num3];
    return newarr;    
}
console.log(addElements(arr2, 5, 9, 7)); // O/P : [ 1, 2, 3, 5, 9, 7 ]


// Task 6: Use rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.
function add(...args)
{
    let sum = 0;
    for (let arg of args)
        sum = sum + arg;
    return sum;
}
console.log(add(1,2,3,4,5,6));



// ACTIVITY 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having default value of 1. Log the result of calling this function with & without the second parameter.
function product(a, b = 1)
{
    return a*b;
}
console.log(product(5,2)); // O/P : 10
console.log(product(5)); // O/P : 5



// ACTIVITY 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods & properties, and log the object to the console.
var TreeName = "Mango";
var fruit = true;
var taste = function() { return "Sweet" };
let tree = {TreeName, fruit, taste};
console.log(tree); // O/P : { TreeName: 'Mango', fruit: true, taste: [Function: taste] }
console.log(tree.taste()); // O/P : Sweet


// Task 9: Create an object with computed property names based on variables and log the object to the console.
let key1 = "firstname", key2 = "lastname";
let fullname = { [key1] : "Palak", [key2] : "Goyal"};
console.log(fullname); // O/P : { firstname: 'Palak', lastname: 'Goyal' }
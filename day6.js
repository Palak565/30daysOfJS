// DAY 6: Arrays

// ACTIVITY 1: Array Creation & Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr1 = [1,2,3,4,5];
console.log(arr1); // O/P : [ 1, 2, 3, 4, 5 ]


// Task 2: Access the first and last elements of the array and log them to the console.
console.log("1st element = " + arr1[0] + " last element = " + arr1[arr1.length-1]); // O/P : 1st element = 1 last element = 5



// ACTIVITY 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let arr2 = [1,6,9,4,7];
arr2.push(5);
console.log(arr2); // O/P : [ 1, 6, 9, 4, 7, 5 ]


// Task 4: Use the pop method to remove the last element fom the array and log the updated array.
arr2.pop();
console.log(arr2); // O/P : [ 1, 6, 9, 4, 7 ]


// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr2.shift();
console.log(arr2); // O/P : [ 6, 9, 4, 7 ]


// Task 6: Use the shift method to add a new number to the beginning of the array and log the updated array.
arr2.unshift(0);
console.log(arr2); // O/P : [ 0, 6, 9, 4, 7 ]



// ACTIVITY 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
function double(x)
{
    return 2*x;
}
let arr3 = [1,4,5,7,9];
let updated_arr3 = arr3.map(double);
console.log(updated_arr3); // O/P : [ 2, 8, 10, 14, 18 ]


// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
function isEven(x)
{
    return !(x % 2);
}
let even = arr3.filter(isEven);
console.log(even); // O/P : [ 4 ]


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
function sum(total,num)
{
    return total + num;
}
console.log(arr3.reduce(sum)); // O/P : 26



// ACTIVITY 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
let arr4 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr4.length; i++)
{
    console.log(arr4[i]);
}
// O/P :
// 10
// 20
// 30
// 40
// 50


// Task 11 : Use the forEach method to iterate over the array and log each element to the console.
arr5 = [23, 49, 78, 64];
function print(num)
{
    console.log(num);
}
arr5.forEach(print);
// O/P : 
// 23
// 49
// 78
// 64



// ACTIVITY 5: Multi-Dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
// O/P : [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]


// Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][0]); // O/P : 4

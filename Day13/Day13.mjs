// DAY 13 : Modules

// ACTIVITY 1: Creating & Exporting Modules
// Task 1 : Create a module that exports a function to add two numbers. Import and use this module in another script.
import { add } from "./utility.mjs";
let sum = add(3,5);
console.log(`Sum = ${sum}`); // O/P : Sum = 8


// Task 2 : Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import {person} from "./utility.mjs";
let p1 = person;
console.log(p1.name); // O/P : Meenu
console.log(p1.intro()); // O/P : Hi, I am Meenu



// ACTIVITY 2 : Named & Default Exports
// Task 3 : Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import {subtract, modulo} from "./utility.mjs";
let diff = subtract(7,3);
let rem = modulo(7,3);
console.log(`Diff = ${diff}`); // O/P : Diff = 4
console.log(`Remainder = ${rem}`); // O/P: Remainder = 1


// Task 4 : Create a module that exports a single function using default export. Import and use this function in another script.
import defaultExport from './utility.mjs';
console.log(defaultExport()); // O/P : This is default export


// ACTIVITY 3 : Importing entire modules
// Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as mod from "./utility.mjs";
console.log("pi = ", mod.pi); // O/P : pi = 3.14


// ACTIVITY 4 : Using Third-Party Modules
// Task 6 : Install a third-party module (e.g. lodash) using npm. Import and use a function from this module in a script.
import _ from "lodash";
let array = [1, [2, 3], 4, [5], 6];
let flattened = _.flatten(array);
console.log(flattened); // O/P : [ 1, 2, 3, 4, 5, 6 ]


// Task 7 : Install a third-party module (e.g. axios) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log('Error caught:', error);
    });
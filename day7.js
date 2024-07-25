// DAY 7 : Objects

// ACTIVITY 1: Object Creation & Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {title: "30 days of JS", author: "R.K. Sharma", year: 2015};
console.log(book); 
// O/P : { title: '30 days of JS', author: 'R.K. Sharma', year: 2015 }


// Task 2: Access and log the title and author properties of the book object.
console.log("Title - " + book.title); // O/P : Title - 30 days of JS
console.log("Author - " + book["author"]); // O/P : Author - R.K. Sharma



// ACTIVITY 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.details = function(){console.log(`Book details: Title: ${this.title} & Author: ${this.author}`)};
book.details(); // O/P : Book details: Title: 30 days of JS & Author: R.K. Sharma


// Task 4: Add a method to the book object that takes a parameter (year) & updates the book's year property, then log the updated object.
book.updateYear = function(newYear){
    this.year = newYear;
}
// Before updation
console.log(book.year); // O/P : 2015
// After updation
book.updateYear(2020);
console.log(book.year); // O/P : 2020



// ACTIVITY 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name : "MyLib",
    books : ["Advanced DSA", "Python Programmer", "Be A JS Expert"]
};
console.log(library);
// O/P : {
//   name: 'MyLib',
//   books: [ 'Advanced DSA', 'Python Programmer', 'Be A JS Expert' ]
// }


// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name); // O/P : MyLib
console.log(library.books); // O/P : [ 'Advanced DSA', 'Python Programmer', 'Be A JS Expert' ]



// ACTIVITY 4: The 'this' Keyword
// Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.
book.str = function(){
    return `Title:${this.title}, Year:${this.year}`;
}
console.log(book.str()); // O/P : Title:30 days of JS, Year:2020



// ACTIVITY 5: Object Iteration
// Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
let BOOK = {
    Title : "Javascript",
    Year : 2016,
    Price : 400
}
for (let i in BOOK)
{
    console.log(`${i}:${BOOK[i]}`);
}
// O/P :
// Title:Javascript
// Year:2016
// Price:400


// Task 9: Use 'Object.keys' & 'Object.values' methods to log all the keys and values of the book object.
console.log(Object.keys(BOOK)); // O/P : [ 'Title', 'Year', 'Price' ]
console.log(Object.values(BOOK)); // O/P : [ 'Javascript', 2016, 400 ]
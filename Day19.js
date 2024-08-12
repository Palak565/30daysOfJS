//DAY 19: Regular Expressions



//ACTIVITY 1: Basic Regular Expressions
//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let text1 = "Learn Javascript for web development. You can build many projects using JAVASCRIPT";
let res1 = text1.match(/javascript/ig);
console.log(res1); // O/P : [ 'Javascript', 'JAVASCRIPT' ]


// Task 2: Write a regular expression to match all digits in a string. Log the matches.
let text2 = `A : How long did you take to complete the project?
             B : 15 days.
             A : Really? It took me only 10 days.`;
let res2 = text2.match(/[0-9]/g);
console.log(res2); // O/P : [ '1', '5', '1', '0' ]


// ACTIVITY 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let text3 = `How are you doing?
             I am doing wEll`;
let res3 = text3.match(/\b[A-Z][a-z]*/g);
console.log(res3); // O/P : [ 'How', 'I' ]


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let text4 = "+91 78956xxxxx";
let res4 = text4.match(/[0-9]+/g);
console.log(res4); // O/P : [ '91', '78956' ]


// ACTIVITY 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let text5 = "(123) 456-7890";
let res5 = text5.match(/\((\d{3})\)\s(\d{3})-(\d{4})/);

console.log(`AreaCode = ${res5[1]}`); // O/P : AreaCode = 123
console.log(`Central Office Code = ${res5[2]}`); // O/P : Central Office Code = 456
console.log(`Line number = ${res5[3]}`); // O/P : Line number = 7890


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = "abcd123@gmail.com";
let res6 = email.match(/^(.+)@(.+)$/);
console.log("Username = " + res6[1]); // O/P : Username = abcd123
console.log("Domain = " + res6[2]); // O/P : Domain = gmail.com



// ACTIVITY 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let text7 = "Hello Everyone!";
let res7_1 = text7.match(/^hello/i);
console.log(res7_1[0]); // O/P : Hello
let res7_2 = text7.match(/^everyone/i);
console.log(res7_2); // O/P : null

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let text8 = "Hello Everyone!";
let res8_1 = text8.match(/hello$/i);
console.log(res8_1); // O/P : null
let res8_2 = text8.match(/everyone\!$/i);
console.log(res8_2[0]); // O/P : Everyone!



// ACTIVITY 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password1 = "569+";
let password2 = "Abc567pq$";
let passRegex =(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
let res9_1 = passRegex.test(password1);
let res9_2 = passRegex.test(password2);
console.log(`Is password '${password1}' valid? ${res9_1}`); // O/P : Is password '569+' valid? false
console.log(`Is password '${password2}' valid? ${res9_2}`); // O/P : Is password 'Abc567pq$' valid? true



// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let urlRegex = /^(?:(?:https?):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;
let url1 = "abc.com"; // Typically considered valid if no scheme required
let url2 = "http://abc"; // Valid URL with scheme and domain

let res10_1 = urlRegex.test(url1);
let res10_2 = urlRegex.test(url2);

console.log(`Is URL '${url1}' valid? ${res10_1}`); // Expected: true
console.log(`Is URL '${url2}' valid? ${res10_2}`); // Expected: false


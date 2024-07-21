// DAY 3: CONTROL STRUCTURES

// ACTIVITY 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console.
let x = 5;
if (x > 0)
    console.log("Positive"); // O/P : Positive
else if (x == 0)
    console.log("Zero");
else
    console.log("Negative");

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18)
    console.log("Eligible to vote"); // O/P : Eligible to vote
else 
    console.log("Not eligible to vote");

// ACTIVITY 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 2, b = 9, c = 15;
if (a >= b)
{
    if (a >= c)
        console.log(a + " is largest");
    else
        console.log(c + " is largest");
}
else if (b >= c)
{
    if (b >= a)
        console.log(b + " is largest");
    else
        console.log(a + " is largest");
}
else if (c >= a)
{
    if (c >= b)
        console.log(c + " is largest");
    else
        console.log(b + " is largest");
}
// O/P : 15 is largest

// ACTIVITY 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5, text;
switch (day)
{
    case 1: text = "Monday";break;
    case 2: text = "Tuesday";break;
    case 3: text = "Wednesday";break;
    case 4: text = "Thursday";break;
    case 5: text = "Friday";break;
    case 6: text = "Saturday";break;
    case 7: text = "Sunday";break;
    default: text = "Not a valid day!";
}
console.log(text); // O/P : Friday

// Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the result to the console.
let marks = 56, grade;
switch (Math.floor(marks/10))
{
    case 8: case 9: case 10:
        grade = 'A';
        break;
    case 6: case 7:
        grade = 'B';
        break;
    case 5:
        grade = 'C';
        break;
    case 4:
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(grade); // O/P : C

// ACTIVITY 4: Conditional(Ternary) Operator
// Task 6: Write a program that uses a ternary operator to check if a number is even or odd and log the result to the console.
let num = 5;
num % 2 == 0 ? console.log(num + " is even") : console.log(num + " is odd"); // O/P : 5 is odd

// ACTIVITY 5: Combining Conditions
// Task 7: Write a program to check if a year is leap year using multiple conditions and log the result to the console.
let year = 1900;
if (year % 4 != 0)
    console.log(year + " is not a leap year.");
else
{
    if (year % 100 != 0)
        console.log(year + " is a leap year.");
    else
    {
        if (year % 400 == 0)
            console.log(year + " is a leap year.");
        else
            console.log(year + " is not a leap year.");
    }
} 
// O/P : 1900 is not a leap year.

// Feature Request -> Completed
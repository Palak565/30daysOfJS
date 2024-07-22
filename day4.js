// DAY 4: Loops

// ACTIVITY 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++)
    console.log (i);
// O/P : 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10   


// Task 2: Write a program to print multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++)
    console.log ("5 * " + i + " = " + 5*i);
// O/P : 
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50  



// ACTIVITY 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0, j = 1;
while (j <= 10)
{
    sum = sum + j;
    j++;
}
console.log(sum); // O/P : 55


// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let x = 10;
while (x > 0)
{
    console.log(x);
    x--;
}
// O/P :
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1      



// ACTIVITY 3: Do...While loop
// Task 5:Write a program to print numbers from 1 to 5 using a do...while loop.
let a = 1;
do
{
    console.log(a);
    a++;
}while (a <= 5);
// O/P :
// 1
// 2
// 3
// 4
// 5


// Task 6: Write a program to calculate factorial of a number using a do...while loop.
let num = 5, fact = 1;
do
{
    fact *= num;
    num--;
}while (num >= 1);
console.log("Factorial of 5 = " + fact); // O/P : 120



// ACTIVITY 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops.

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

let m, n, pattern = '';
for (m = 1; m <= 5; m++)
{
    for (n = 1; n <= m; n++)
        pattern = pattern + "* ";
    console.log(pattern);
    pattern = '';
}
// O/P:
// *
// * *
// * * *
// * * * *
// * * * * *



// ACTIVITY 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
let num1 = 1;
while (num1 <= 10)
{
    if (num1 == 5)
    {    num1++;
        continue;
    }
    console.log(num1);
    num1++;
}
// O/P :
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10


// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
let num2 = 1;
while (num2 <= 10)
{
    if (num2 == 7)
        break;
    console.log(num2);
    num2++;
}
// O/P :
// 1
// 2
// 3
// 4
// 5
// 6
// DAY 21: Leetcode Easy

// ACTIVITY 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target. Log the indices for a few test cases.
function TwoSum(arr, target){
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i+1; j < arr.length; j++)
        {
            if (arr[i]+arr[j] == target)
                return [i,j];
        }
    }
    return [-1,-1];
}
let arr1 = [1, 5, 9, 7, 6, 2];
let target1 = 12;
console.log(TwoSum(arr1,target1)); // O/P : [ 1, 3 ]

let arr2 = [10, 23, 12, 80, 53];
let target2 = 55;
console.log(TwoSum(arr2,target2)); // O/P : [ -1, -1 ]


// ACTIVITY 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero. Log the reversed integers for a few test cases.
function ReverseInt(num)
{
    let n = num, ans = 0;
    if (num < 0)
        n = -num;
    while ( n > 0 )
    {
        ans = ans*10 + (n%10);
        n = Math.floor(n/10);
    }
    if (num >= 0)
        return ans;
    return -ans;
    
}

console.log(ReverseInt(559));
console.log(ReverseInt(450));
console.log(ReverseInt(-123));


// ACTIVITY 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise. Log the result for a few test cases, including edge cases like negative numbers.
function PalindromeNumber(num)
{
    if (num < 0)
        return false;
    let rev = ReverseInt(num), n = num;
    let len = 0;
    while (n > 0)
    {
        len++;
        n = Math.floor(n/10);
    }
    let i = 1;
    while (i <= Math.floor(len))
    {
        if (rev % 10 != num % 10)
            return false;
        rev = Math.floor(rev/10);
        num = Math.floor(num/10);
        i++;
    }
    return true;
}
console.log("Is 565 a palindrome number: ", PalindromeNumber(565)); // O/P : Is 565 a palindrome number:  true
console.log("Is 335 a palindrome number: ", PalindromeNumber(335)); // O/P : Is 335 a palindrome number:  false
console.log("Is -100 a palindrome number: ", PalindromeNumber(-100)); // O/P : Is -100 a palindrome number:  false


// ACTIVITY 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them. Create a few test cases with linked lists and log the merged list.
class node{
    constructor(val,next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    insert(val){
        let temp = this.head;
        if (this.head == null)
        {
            this.head = new node(val);
            return;
        }
        while (temp.next != null)
            temp = temp.next;
        temp.next = new node(val);
    }

    print(){
        let temp = this.head;
        let ans = "";
        while (temp != null)
        {
            ans = ans + temp.val + " ";
            temp = temp.next;
        }
        console.log(ans);
    }
}

function MergeLists(head1, head2)
{
    if (head1 == null)
        return head2;
    else if (head2 == null)
        return head1;

    let temp1 = head1, temp2 = head2;
    let head3 = null, temp3 = null;
    if (temp1.val <= temp2.val)
    {
        head3 = temp1;
        temp3 = head3;
        temp1 = temp1.next;
    }
    else
    {
        head3 = temp2;
        temp3 = head3;
        temp2 = temp2.next;
    }

    while (temp1 != null && temp2 != null)
    {
        if (temp1.val <= temp2.val)
        {
            temp3.next = temp1;
            temp3 = temp3.next;
            temp1 = temp1.next;
        }
        else
        {
            temp3.next = temp2;
            temp3 = temp3.next;
            temp2 = temp2.next;
        }
    }

    while (temp1 != null)
    {
        temp3.next = temp1;
        temp3 = temp3.next;
        temp1 = temp1.next;
    }
    while (temp2 != null)
    {
        temp3.next = temp2;
        temp3 = temp3.next;
        temp2 = temp2.next;
    }

    return head3;
}

let head1 = new node(1);
let LL1 = new LinkedList(head1);
LL1.insert(3);
LL1.insert(9);
LL1.insert(15);
LL1.insert(17);
let head2 = new node(3);
let LL2 = new LinkedList(head2);
LL2.insert(6);
LL2.insert(7);
LL2.insert(8);
LL2.insert(13);
LL2.insert(15);
LL2.insert(20);

let mergedHead = MergeLists(head1, head2);
let merged = new LinkedList(mergedHead);
merged.print(); // O/P : 1 3 3 6 7 8 9 13 15 15 17 20


// ACTIVITY 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}' ,'[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
class Stack{
    constructor(){
        this.top = -1;
        this.st = [];
    }
    push(val)
    {
        this.st[++(this.top)] = val;
    }

    pop()
    {
        if (this.top < 0)
            return "Empty stack";

        let val = this.st[(this.top)--];
        return val;
    }

    length()
    {
        return this.top+1;
    }
}

function ValidParentheses(str)
{
    let stack = new Stack();
    let i = 0;
    while (i < str.length)
    {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[')
            stack.push(str[i]);
        else 
        {
            let popped = stack.pop();
            if ((str[i] == ')' && popped != '(') || (str[i] == '}' && popped != '{') || (str[i] == ']' && popped != '['))
                return false;
        }
        i++;
    }

    if (stack.length() == 0)
        return true;
    return false;
}

console.log(ValidParentheses("({[]})[]")); // O/P : true
console.log(ValidParentheses("{[]()")); // O/P : false
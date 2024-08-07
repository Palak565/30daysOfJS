// DAY 16: Recursion

// ACTIVITY 1: Write a recursion function to calculate the factorial of a number. Log the result for a few test cases.
function fact(n)
{
    if (n == 0 || n == 1)
        return 1;
    return n*fact(n-1);
}

console.log(fact(5)); // O/P : 120
console.log(fact(4)); // O/P : 24


// Task 2: Write a recursive function to calculate nth fibonacci number. Log the result for a few test cases.
function fibo(n)
{
    if (n == 1 || n == 2)
        return 1;

    return fibo(n-1)+fibo(n-2);
}

console.log(fibo(3)); // O/P : 2
console.log(fibo(5)); // O/P : 5


// ACTIVITY 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all the elements in an array. Log the result for a few test cases.
function sum(arr,n)
{
    if (n == 0)
        return 0;
    return arr[n-1] + sum(arr,n-1);

}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(arr1,10)); // O/P : 55
let arr2 = [25, 50, 100];
console.log(sum(arr2,3)); // O/P : 175


// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maximum(arr,n)
{
    if (n == 0)
        return -Infinity;

    return Math.max(arr[n-1],maximum(arr,n-1)); 
}
let arr3 = [1,2,3,4,5,6];
console.log(maximum(arr3,6)); // O/P : 6
let arr4 = [-5, 9 , 27, 63 , 8];
console.log(maximum(arr4,5)); // O/P : 63


// ACTIVITY 3 : String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function ReverseStr(str, n = Math.floor(str.length/2))
{
    if (n > 0)
    {
        let arr = str.split('');
        [arr[n-1], arr[str.length-n]] = [arr[str.length-n], arr[n-1]];
        return ReverseStr(arr.join(''),n-1);
    }
    return str;
}

console.log(ReverseStr("ABCDE")); // O/P : EDCBA
console.log(ReverseStr("MORNING")); // O/P : GNINROM


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str, n = Math.floor(str.length/2))
{
    if (n == 0)
        return 1;
    else if (n > 0)
    {
        let arr = str.split('');
        if (arr[n-1] == arr[str.length-n])
            return 1*isPalindrome(str, n-1);
        else
            return 0;
    }
    
}
console.log(isPalindrome("MADAM", 5)); // O/P : 1
console.log(isPalindrome("FUNCTION", 5)); // O/P : 0
console.log(isPalindrome("REFER", 5)); // O/P : 1


// ACTIVITY 4: Recursive Approach
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function BinSearch(arr, target, s = 0, e = arr.length-1)
{
    if (e-s >= 0)
    {
        let mid = Math.floor((e+s)/2);
        if (arr[mid] == target)
            return mid;
        else if (target > arr[mid])
            return BinSearch(arr, target,mid+1,e);
        else
            return BinSearch(arr,target,s,mid-1);
    }
    return -1;
}

let arr5 = [12, 26, 39, 64, 78, 100];
console.log(BinSearch(arr5, 78)); // O/P : 4
let arr6 = [1, 5, 7, 25, 49, 57, 109];
console.log(BinSearch(arr6, 100)); // O/P : -1


// Task 8: Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.
function countOcc(arr, target, n = arr.length)
{
    if (n == 0)
        return 0;
    else
    {
        if (arr[n-1] == target)
            return 1 + countOcc(arr, target, n-1);
        return countOcc(arr,target,n-1);
    }
}

let arr7 = [1, 2, 2, 6, 2, 9];
console.log(countOcc(arr7, 2)); // O/P : 3
let arr8 = [1, 5, 2, 9, 2, 9];
console.log(countOcc(arr8, 5)); // O/P ; 1



// ACTIVITY 5: Tree Traversal
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class node{
    constructor(val, l = null, r = null)
    {
        this.val = val;
        this.l = l;
        this.r = r;
    }
}

function inorder(root)
{
    if (root != null)
    {
        inorder(root.l);
        console.log(root.val);
        inorder(root.r);
    }
}
let root1 = new node(10, 
    new node(20, new node(30, new node(40), new node(50)), new node(60))
);
inorder(root1);
// O/P :
// 40
// 30
// 50
// 20
// 60
// 10


// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function depth(root)
{
    if (root == null)
        return 0;

    else{
        let l = depth(root.l);
        let r = depth(root.r);
        if (l >= r)
            return 1+l;
        return 1+r;
    }
}

let root2 = new node(10,
    new node(20,new node(30)),
    new node(40,new node(50,new node(60,new node(70),new node(80))), new node(90))
);
console.log(depth(root2)); // O/P : 5


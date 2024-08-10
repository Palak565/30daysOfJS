// DAY 18: Algorithms

// ACTIVITY 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr){
    let n = arr.length;
    for (let i = n-1; i >= 0; i--)
    {
        for (let j = 0; j < i; j++)
        {
            if (arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr1 = [24, 56, 39, 11, 52];
console.log(bubbleSort(arr1)); // O/P : [ 11, 24, 39, 52, 56 ]


// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function SelectionSort(arr){
    for (let i = 0; i < arr.length-1; i++)
    {
        let min_index = i;
        for (let j = i+1; j < arr.length; j++)
        {
            if (arr[j] < arr[min_index])
                min_index = j;
        }
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
        //[arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
    return arr;
}

let arr2 = [36, 64, 11, 72, 5, -4];
console.log(SelectionSort(arr2)); // O/P : [ -4, 5, 11, 36, 64, 72 ]


// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quicksort(arr, start, end){
    if (start >= end) return;

    let pivot = start;
    let i = start+1, j = end;
    do
    {
        while (i <= end && arr[i] <= arr[pivot])
            i++;
            
        while (arr[j] > arr[pivot])
            j--;

        if (i < j)
            [arr[i], arr[j]] = [arr[j], arr[i]];
    }while (i <= j)
    [arr[j], arr[start]] = [arr[start], arr[j]];
    quicksort(arr, start, j-1);
    quicksort(arr, j+1, end);
    return arr;
}

let arr3 = [85, 26, 42, 30, 50];
console.log(quicksort(arr3, 0, 4)); // O/P : [ 26, 30, 42, 50, 85 ]



// ACTIVITY 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function LinearSearch(arr, target){
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == target)
            return i;
    }
    return -1;
}

let arr4 = [1, 5, 45, 17, 14, 60];
console.log(LinearSearch(arr4,45)); // O/P : 2
console.log(LinearSearch(arr4,64)); // O/P : -1


// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function BinarySearch(arr, target, start, end){
    if (start <= end)
    {
        let mid = Math.floor((start+end)/2);
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] > target)
            return BinarySearch(arr, target, start, mid-1);
        else
            return BinarySearch(arr, target, mid+1, end);
    }
    return -1;
}

let arr5 = [1, 5, 7, 9, 11, 15, 17, 23];
console.log(BinarySearch(arr5, 9, 0, arr5.length)); // O/P : 3
console.log(BinarySearch(arr5, 18, 0, arr5.length)); // O/P : -1



// ACTIVITY 3: String Algorithms
// Task 6: Write a function to count the occurences of each character in a string. Log the character counts.
function countOcc(str){
    let count = {};
    for (let char of str)
    {
        if (count[char])
            count[char]++;
        else
            count[char] = 1;
    }

    for (let char in count)
    {
        console.log(`${char} : ${count[char]}`);
    }
}

let str1 = "ACTIVITY";
countOcc(str1);
// O/P :
// A : 1
// C : 1
// T : 2
// I : 2
// V : 1
// Y : 1


// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the index of the largest value.
function longestSubstring(str){
    let start = 0, max_len = 0, max_index = 0, map = {};
    // map stores last index of a particular char in string
    for (let i = 0; i < str.length; i++)
    {
        if (map[str[i]] && map[str[i]] > start)
            start = map[str[i]] + 1;

        map[str[i]] = i;
        let curr_len = i-start+1;
        if (curr_len > max_len)
        {    
            max_len = curr_len;
            max_index = start;
        }
    }
    return max_index;
}
let str2 = "Coincidence";
console.log(longestSubstring(str2)); // O/P : 3


// ACTIVITY 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotate(arr, k){
    while (k > 0)
    {
        arr.unshift(arr[arr.length-1]);
        arr.pop();
        k--;
    }
    return arr;
}

let arr6 = [1, 3, 5, 7, 9];
console.log(rotate(arr6,3)); // O/P : [ 5, 7, 9, 1, 3 ]


// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function merge(arr1, arr2){
    let i = 0, j = 0, arr3 = [];
    while (i < arr1.length && j < arr2.length)
    {
        if (arr1[i] <= arr2[j])
            arr3.push(arr1[i++]);
        else
            arr3.push(arr2[j++]);
    }

    while (i < arr1.length)
        arr3.push(arr1[i++]);

    while (j < arr2.length)
        arr3.push(arr2[j++]);
    
    return arr3;
}

let A = [1, 5, 8];
let B = [3, 5, 6, 10];
console.log(merge(A, B)); // O/P : [ 1, 3,  5, 5, 6, 8, 10 ]



// ACTIVITY 5: Dynamic Programming
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the fibonacci numbers.
function fibonacci(n){
    let fib = [0,1];
    for (let i = 2; i < n; i++)
        fib[i] = fib[i-1] + fib[i-2];
    return fib[n-1];
}

console.log(fibonacci(10)); // O/P : 34
console.log(fibonacci(5)); // O/P : 3



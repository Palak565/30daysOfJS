// DAY 10 : LEETCODE PROBLEMS

// 2665. Counter II
var createCounter = function(init) 
{
    let ans = init;
    return{
        increment : function()
        {
            ans++;
            return ans;
        },
        decrement : function()
        {
            ans--;
            return ans;
        },
        reset : function()
        {
            ans = init;
            return ans;
        }
    }
};


// 2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) 
{
    let n = arr.length;
    let returnedArray = [];
    for (let i = 0; i < n; i++)
        returnedArray[i] = fn(arr[i],i);
    return returnedArray;    
};
// DAY 11 

// 2634. Filter Elements from Array
var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++)
    {
        let element = fn(arr[i],i);
        if (element)
            filteredArr.push(arr[i]);
    }
    return filteredArr;
};


// 2626. Array Reduce Transformation
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++)
    {
         val = fn(val,nums[i]);   
    }
    return val;
};
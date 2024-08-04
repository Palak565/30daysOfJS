// DAY 12

// 2629. Function Composition
var compose = function(functions) {
    
    return function(x) {
        let val = x;
        for (let i = functions.length-1; i >= 0; i--)
        {
            val = functions[i](val);
        }
        return val;
    }
};


// 2666. Allow One Function Call
var once = function(fn) {
    let called = 0;
    return function(...args){
        if (called == 0)
        {
            called = 1;
            return fn(...args);
        }
    }
};
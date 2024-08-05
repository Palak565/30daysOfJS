// DAY 14

// 2621. Sleep
async function sleep(millis) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(millis)
        },millis);
    })
}


// 2637. Promise Time Limit
var timeLimit = function(fn, t) {
    return async function(...args) {

        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result)=>{
                resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };
};

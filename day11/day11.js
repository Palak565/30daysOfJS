// DAY 11: Promises & Async/ Await

// ACTIVITY 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
/*function greeting(name)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Hi ${name}`);
            resolve("Promise resolved");
        },2000);
    });
};


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const task2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello world");
            reject("Task 2 rejected");  
        });
    });
};
task2().catch(error=>{
    console.error("Error caught!!!");
});



// ACTIVITY 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log the messages in a specific order.
let task3_1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 3, promise1");
            resolve("success");
        },5000);
    });
};

let task3_2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 3, promise2");
            resolve("success");
        },5000);
    });
};

task3_1().then((res)=>{
    console.log("Promise 1 fulfilled");
    task3_2().then((res)=>{
        console.log("Promise 2 fulfilled");
    });
});

*/

// ACTIVITY 3: Using Async/ Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
let task4 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task 4-> Success");
    },5000);
};

async function func4() {
    let result = await task4();
    console.log(result);
}

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
let task5 = ()=>{
    return new Promise((resolve,reject)=>{
        reject("Promise(Task 5) rejected");
    });
};

async function func5() {
    try {
        let res = task5();
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};


// ACTIVITY 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log("Task 6:", data))
    .catch(error => console.error("Task 6 Error:", error));


//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log("Task 7:", data);
    } catch (error) {
        console.error("Task 7 Error:", error);
    }
};

fetchDataAsync();



//ACTIVITY 5: Concurrent Promises
//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let promise8_1 = new Promise(resolve => setTimeout(() => resolve("Promise 8_1 resolved"), 2000));
let promise8_2 = new Promise(resolve => setTimeout(() => resolve("Promise 8_2 resolved"), 2000));
let promise8_3 = new Promise(resolve => setTimeout(() => resolve("Promise 8_3 resolved"), 3000));

Promise.all([promise8_1, promise8_2, promise8_3])
    .then(values => console.log("Task 8:", values));

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
let promise9_1 = new Promise(resolve => setTimeout(() => resolve("Promise 9_1 resolved"), 1000));
let promise9_2 = new Promise(resolve => setTimeout(() => resolve("Promise 9_2 resolved"), 2000));
let promise9_3 = new Promise(resolve => setTimeout(() => resolve("Promise 9_3 resolved"), 1500));

Promise.race([promiseA, promiseB, promiseC])
    .then(value => console.log("Task 9:", value));
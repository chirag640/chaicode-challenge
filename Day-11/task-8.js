const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.error('Error:', error);
    });

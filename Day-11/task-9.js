const promiseX = new Promise((resolve) => setTimeout(() => resolve("Promise X resolved"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Promise Y resolved"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Promise Z resolved"), 3000));

Promise.race([promiseX, promiseY, promiseZ])
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.error('Error:', error);
    });

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});

promise1.then((message) => {
    console.log(message);
});

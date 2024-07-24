const randomPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        success ? resolve("Resolved!") : reject("Rejected!");
    }, 1000);
});

randomPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Promise error:", error);
    });

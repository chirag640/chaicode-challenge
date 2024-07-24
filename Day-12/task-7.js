const randomPromise2 = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        success ? resolve("Resolved!") : reject("Rejected!");
    }, 1000);
});

const handleRandomPromise = async () => {
    try {
        const result = await randomPromise2;
        console.log(result);
    } catch (error) {
        console.log("Async error:", error);
    }
};

handleRandomPromise();

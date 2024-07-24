const resolvePromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved value");
        }, 2000);
    });
};

const asyncFunction1 = async () => {
    const result = await resolvePromise();
    console.log(result);
};

asyncFunction1();

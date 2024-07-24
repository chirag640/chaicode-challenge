const rejectPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error message");
        }, 2000);
    });
};

const asyncFunction2 = async () => {
    try {
        const result = await rejectPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

asyncFunction2();

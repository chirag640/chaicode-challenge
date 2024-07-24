const fetchData = (message, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

fetchData("Fetching user data", 1000)
    .then((message) => {
        console.log(message);
        return fetchData("Fetching posts", 1000);
    })
    .then((message) => {
        console.log(message);
        return fetchData("Fetching comments", 1000);
    })
    .then((message) => {
        console.log(message);
    });

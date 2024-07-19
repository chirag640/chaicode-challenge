let book5 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
for (let key in book5) {
    console.log(`${key}: ${book5[key]}`);
}

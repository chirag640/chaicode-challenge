let book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book2.getDetails());

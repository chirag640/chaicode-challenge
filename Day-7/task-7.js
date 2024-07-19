let book4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} (${this.year})`;
    }
};
console.log(book4.getDetails());

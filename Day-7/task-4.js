let book3 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    updateYear: function(newYear) {
        this.year = newYear;
    }
};
book3.updateYear(1961);
console.log(book3);

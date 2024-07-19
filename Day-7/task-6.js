
let library1 = {
    name: "City Library",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
};
console.log(library1.name);
library1.books.forEach(book => console.log(book.title));

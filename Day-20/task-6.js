// Save object to sessionStorage
let myObject = { name: 'Jane Doe', age: 25 };
sessionStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and parse the object from sessionStorage
let retrievedObject = JSON.parse(sessionStorage.getItem('myObject'));
console.log(retrievedObject); // Output: { name: "Jane Doe", age: 25 }

// Save an object to localStorage
let myObject = { name: 'John', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieve and parse the object from localStorage
let retrievedObject = JSON.parse(localStorage.getItem('myObject'));

// Log the retrieved object
console.log(retrievedObject); // Output: { name: 'John', age: 30 }

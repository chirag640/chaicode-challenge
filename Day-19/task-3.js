let string3 = "Hello world. JavaScript is Fun!";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = string3.match(regex3);
console.log(matches3); // Output: ["Hello", "JavaScript", "Fun"]

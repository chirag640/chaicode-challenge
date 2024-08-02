let string6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = string6.match(regex6);
console.log(matches6); // Output: ["user@example.com", "user", "example.com"]

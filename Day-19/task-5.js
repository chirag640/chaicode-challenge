let string5 = "(123) 456-7890";
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches5 = string5.match(regex5);
console.log(matches5); // Output: ["(123) 456-7890", "123", "456", "7890"]

function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Alice"));
console.log(greet("Bob", 25));

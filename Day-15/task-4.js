function createGreeting(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}

const greetAlice = createGreeting('Alice');
console.log(greetAlice()); 

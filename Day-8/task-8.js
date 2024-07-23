let name = "Bob";
let age = 25;

let person = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(person);
console.log(person.greet());

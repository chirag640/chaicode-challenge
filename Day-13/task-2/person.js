export const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

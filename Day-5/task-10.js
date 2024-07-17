function compose(func1, func2, value) {
    return func2(func1(value));
}

const add5 = (num) => num + 5;
const multiplyBy2 = (num) => num * 2;

console.log(compose(add5, multiplyBy2, 10));
console.log(compose(multiplyBy2, add5, 10));

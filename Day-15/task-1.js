function outerFunction() {
    let outerVariable = 'Hello';

    function innerFunction() {
        return outerVariable + ', World!';
    }

    return innerFunction;
}

const inner = outerFunction();
console.log(inner());

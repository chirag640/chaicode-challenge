function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString('hello')); // Output: 'olleh'
console.log(reverseString('world')); // Output: 'dlrow'

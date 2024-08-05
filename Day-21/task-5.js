function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));     // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]"));     // Output: false
console.log(isValid("([)]"));   // Output: false
console.log(isValid("{[]}"));   // Output: true

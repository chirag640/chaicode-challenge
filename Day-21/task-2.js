function reverseInteger(x) {
    let reversed = 0;
    const isNegative = x < 0;
    x = Math.abs(x);

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    if (reversed > 2**31 - 1) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(123));   // Output: 321
console.log(reverseInteger(-123));  // Output: -321
console.log(reverseInteger(120));   // Output: 21
console.log(reverseInteger(0));     // Output: 0

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720
console.log(factorial(7)); // Output: 5040

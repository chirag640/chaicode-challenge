function fibonacciDP(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

// Example usage
console.log(fibonacciDP(10)); // Output: 55
console.log(fibonacciDP(15)); // Output: 610

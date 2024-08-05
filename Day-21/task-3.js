function isPalindrome(x) {
    if (x < 0) return false;
    let reversed = 0;
    let original = x;

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

// Test cases
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(-121));   // Output: false
console.log(isPalindrome(10));     // Output: false
console.log(isPalindrome(12321));  // Output: true

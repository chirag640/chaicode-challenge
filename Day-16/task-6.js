function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('madam')); // Output: true

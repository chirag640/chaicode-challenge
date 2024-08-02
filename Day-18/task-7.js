function longestUniqueSubstring(str) {
    let maxLength = 0;
    let currentString = "";
    for (let char of str) {
        let index = currentString.indexOf(char);
        if (index !== -1) {
            currentString = currentString.substring(index + 1);
        }
        currentString += char;
        maxLength = Math.max(maxLength, currentString.length);
    }
    return maxLength;
}

// Example usage
let string2 = "abcabcbb";
console.log(longestUniqueSubstring(string2)); // Output: 3 (abc)
let string3 = "bbbbb";
console.log(longestUniqueSubstring(string3)); // Output: 1 (b)
let string4 = "pwwkew";
console.log(longestUniqueSubstring(string4)); // Output: 3 (wke)

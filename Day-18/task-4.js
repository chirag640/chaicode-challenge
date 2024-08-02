function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
let array4 = [2, 3, 4, 10, 40];
console.log(linearSearch(array4, 10)); // Output: 3
console.log(linearSearch(array4, 5)); // Output: -1

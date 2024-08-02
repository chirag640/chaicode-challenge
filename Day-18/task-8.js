function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// Example usage
let array6 = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(array6, 3)); // Output: [5, 6, 7, 1, 2, 3, 4]

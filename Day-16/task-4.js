function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = maxArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(maxArray([1, 2, 3, 4, 5])); // Output: 5
console.log(maxArray([10, 20, 30, 40])); // Output: 40
console.log(maxArray([7, 14, 21, 0])); // Output: 21

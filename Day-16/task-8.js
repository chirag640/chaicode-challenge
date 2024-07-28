function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3
console.log(countOccurrences([10, 20, 30, 40, 10], 10)); // Output: 2
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // Output: 5

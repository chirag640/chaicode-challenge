function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, end);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 40)); // Output: 3
console.log(binarySearch([5, 10, 15, 20, 25], 15)); // Output: 2

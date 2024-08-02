function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}

// Example usage
let array7 = [1, 3, 5, 7];
let array8 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array7, array8)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

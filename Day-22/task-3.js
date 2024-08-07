function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let width = right - left;
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));               // Output: 1
console.log(maxArea([4,3,2,1,4]));         // Output: 16
console.log(maxArea([1,2,1]));             // Output: 2

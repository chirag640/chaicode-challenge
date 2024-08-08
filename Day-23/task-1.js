function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let imin = 0, imax = m;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxOfLeft;
            if (i === 0) { maxOfLeft = nums2[j - 1]; }
            else if (j === 0) { maxOfLeft = nums1[i - 1]; }
            else { maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]); }

            if ((m + n) % 2 === 1) {
                return maxOfLeft;
            }

            let minOfRight;
            if (i === m) { minOfRight = nums2[j]; }
            else if (j === n) { minOfRight = nums1[i]; }
            else { minOfRight = Math.min(nums1[i], nums2[j]); }

            return (maxOfLeft + minOfRight) / 2.0;
        }
    }

    return 0;
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0

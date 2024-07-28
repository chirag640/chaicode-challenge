function calculateDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(calculateDepth(root)); // Output: 3

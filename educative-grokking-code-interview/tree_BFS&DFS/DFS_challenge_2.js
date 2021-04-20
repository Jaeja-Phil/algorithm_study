/**
 * Find the path with the maximum sum in a given binary tree. Write a function
 * that returns the maximum sum. A path can be defined as a sequence of nodes
 * between any two nodes and doesn’t necessarily pass through the root.
 * The path must contain at least one node.
 */

/**
 * ex) tree:
 *                      1
 *                  2       3
 *                4       5   6
 * output: 16
 * [4, 2, 1, 3, 6] has the maximum sum of 16
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  let maxSum = 0;
  const recursion = node => {
    if (node === null) return 0;

    const leftSum = recursion(node.left);
    const rightSum = recursion(node.right);

    maxSum = Math.max(maxSum, leftSum + rightSum + node.val);

    return Math.max(leftSum, rightSum) + node.val;
  };

  recursion(root, 0);
  return maxSum;
}

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(6);
// const result = solution(root);
// result; // 16

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(solution(root)); // 6

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(solution(root)); // 31

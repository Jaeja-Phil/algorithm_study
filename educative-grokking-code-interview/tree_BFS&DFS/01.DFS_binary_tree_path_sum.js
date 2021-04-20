/**
 * Given a binary tree and a number ‘S’, find if the tree has a
 * path from root-to-leaf such that the sum of all the node values
 * of that path equals ‘S’.
 */

/**
 * ex1) Tree:
 *          12
 *       7      1
 *     9     10  5
 *      sum: 23
 * output: true (12 + 1 + 10 === 23)
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(root, sum) {
  if (root === null) return false;

  if (root.value === sum && root.left === null && root.right === null) {
    return true;
  }

  return (
    solution(root.left, sum - root.value) ||
    solution(root.right, sum - root.value)
  );
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

const result1 = solution(root, 23);
result1; // true
const result2 = solution(root, 16);
result2; // false

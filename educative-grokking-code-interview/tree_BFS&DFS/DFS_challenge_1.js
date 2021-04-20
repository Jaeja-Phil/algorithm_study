/**
 * Given a binary tree, find the length of its diameter. The diameter
 *  of a tree is the number of nodes on the longest path between any
 * two leaf nodes. The diameter of a tree may or may not pass through the root.
 */

/**
 * ex) tree:
 *                1
 *            2       3
 *          4       5   6
 * output: 5
 * [4, 2, 1, 3, 6] or [4, 2, 1, 3, 5] gives diameter of 5
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  let maxDiameter = 0;
  const recursion = node => {
    if (node === null) return 0;

    const leftTreeHeight = recursion(node.left);
    const rightTreeHeight = recursion(node.right);

    if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
      const diameter = leftTreeHeight + rightTreeHeight + 1;
      maxDiameter = Math.max(maxDiameter, diameter);
    }

    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
  };
  recursion(root);
  return maxDiameter;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(solution(root)); // 5
root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(solution(root)); // 7

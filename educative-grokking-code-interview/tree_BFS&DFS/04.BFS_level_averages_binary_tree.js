/**
 * Given a binary tree, populate an array to represent the averages of
 * all of its levels.
 */

/**
 * ex) tree:
 *                    1
 *                2       3
 *              4   5   6   7
 * output: [1, 2.5, 5.5]
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    let sum = 0;
    const currLevelLength = queue.length;
    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(sum / currLevelLength);
  }

  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
const result = solution(root);
result; // [1, 2.5, 5.5]

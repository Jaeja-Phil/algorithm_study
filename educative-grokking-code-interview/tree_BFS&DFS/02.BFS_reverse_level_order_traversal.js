/**
 * Given a binary tree, populate an array to represent its level-by-level
 * traversal in reverse order, i.e., the lowest level comes first. You
 * should populate the values of all nodes in each level from left to
 * right in separate sub-arrays.
 */

/**
 * ex) tree:
 *                            12
 *                        7       1
 *                      9       10  5
 * output: [[9, 10, 5], [7, 1], [12]]
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
    const currLevelNodes = [];
    const currLevelLength = queue.length;
    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift();
      currLevelNodes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.unshift(currLevelNodes);
  }

  return result;
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);
const result = solution(root1);
result; // [[9, 10, 5], [7, 1], [12]]

/**
 * Given a binary tree, populate an array to represent its level-by-level
 * traversal. You should populate the values of all nodes of each level
 * from left to right in separate sub-arrays.
 */

/**
 * ex) tree:
 *                      1
 *                  2       3
 *                4   5   6   7
 * output: [[1], [2, 3], [4, 5, 6, 7]]
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
    const currentLevelNodes = [];
    const currentQueueLength = queue.length;
    for (let i = 0; i < currentQueueLength; i++) {
      const node = queue.shift();
      currentLevelNodes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currentLevelNodes);
  }

  return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);
const result1 = solution(root1);
result1; // [[1], [2, 3], [4, 5, 6, 7]]

const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(9);

root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);
const result2 = solution(root2);
result2; // [[12], [7, 1], [9, 10, 5]]

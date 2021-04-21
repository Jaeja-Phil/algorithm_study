/**
 * Find the minimum depth of a binary tree. The minimum depth is
 * the number of nodes along the shortest path from the root node
 * to the nearest leaf node.
 */

/**
 * ex) tree:          1
 *                2       3
 *              4   5
 * output: 2
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length) {
    depth++;
    const currLevelNodes = [];
    const currLevelLength = queue.length;
    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return depth;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = solution(root);
result; // 2

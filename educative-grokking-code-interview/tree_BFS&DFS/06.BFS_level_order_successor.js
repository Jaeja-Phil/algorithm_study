/**
 * Given a binary tree and a node, find the level order successor of
 * the given node in the tree. The level order successor is the node
 * that appears right after the given node in the level order traversal.
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

function solution(root, givenNode) {
  const queue = [root];
  let found = false;

  while (queue.length) {
    const currLevelLength = queue.length;
    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift();
      if (found) {
        return node.val;
      }
      if (node.val === givenNode) {
        found = true;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const result = solution(root, 3);
result; // 4

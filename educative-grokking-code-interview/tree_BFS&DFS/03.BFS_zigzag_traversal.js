/**
 * Given a binary tree, populate an array to represent its zigzag level
 * order traversal. You should populate the values of all nodes of the
 * first level from left to right, then right to left for the next level
 * and keep alternating in the same manner for the following levels.
 */

/**
 * ex) tree:
 *                    1
 *                2       3
 *              4   5   6   7
 * output: [[1], [3, 2], [4, 5, 6, 7]]
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
  let leftToRight = true;
  while (queue.length) {
    const currLevelNodes = [];
    const currQueueLength = queue.length;
    for (let i = 0; i < currQueueLength; i++) {
      const node = queue.shift();
      if (leftToRight) {
        currLevelNodes.push(node.val);
      } else {
        currLevelNodes.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currLevelNodes);
    leftToRight = !leftToRight;
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
result; // [[1], [3, 2], [4, 5, 6, 7]]

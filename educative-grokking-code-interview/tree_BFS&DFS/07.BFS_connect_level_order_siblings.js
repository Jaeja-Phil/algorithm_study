/**
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to a null node.
 */

/**
 * ex) tree:
 *                      1
 *                  2       3
 *                4   5   6   7
 * output: [[1 -> null], [2 - 3 -> null] [4 - 5 - 6 - 7 -> null]]
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solution(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const currLevelLength = queue.length;
    const currLevelNodes = [];
    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift();
      currLevelNodes.push(new LinkedList(node.val));
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    currLevelNodes.forEach((node, idx) => {
      if (idx < currLevelNodes.length - 1) {
        node.next = currLevelNodes[idx + 1];
      }
    });
    result.push(currLevelNodes);
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
result; // [[1 -> null], [2 - 3 -> null] [4 - 5 - 6 - 7 -> null]]

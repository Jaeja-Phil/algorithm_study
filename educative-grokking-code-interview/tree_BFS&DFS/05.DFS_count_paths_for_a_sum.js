/**
 * Given a binary tree and a number ‘S’, find all paths in the tree
 * such that the sum of all the node values of each path equals ‘S’.
 * Please note that the paths can start or end at any node but all
 * paths must follow direction from parent to child (top to bottom).
 */

/**
 * ex) tree:
 *                  1
 *              7       9
 *            6   5   2   3
 *     S: 12
 * output: 3
 *
 * [7 - 5], [1 - 9 - 2], [9 - 3] all make 12
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root, S) {
  return recursion(root, S, []);
}

function recursion(node, S, currPath) {
  if (node === null) return 0;

  currPath.push(node.val);
  let pathCount = 0,
    pathSum = 0;
  for (let i = currPath.length - 1; i >= 0; i--) {
    pathSum += currPath[i];
    if (pathSum === S) {
      pathCount += 1;
    }
  }

  pathCount += recursion(node.left, S, currPath);
  pathCount += recursion(node.right, S, currPath);

  currPath.pop();

  return pathCount;
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(9);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(3);
const result = solution(root, 12);
result; // 3

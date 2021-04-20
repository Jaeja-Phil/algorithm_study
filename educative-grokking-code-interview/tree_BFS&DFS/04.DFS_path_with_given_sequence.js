/**
 * Given a binary tree and a number sequence, find if the sequence
 * is present as a root-to-leaf path in the given tree.
 */

/**
 * ex) tree:          1
 *                7       9
 *                      2   9
 *     sequence: [1, 9, 9]
 * output: true
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root, sequence) {
  const sequenceStr = sequence.join("");

  return recursion(root, sequenceStr, "");
}

function recursion(root, sequenceStr, currPath) {
  if (root === null) return false;
  currPath += root.val;
  if (root.left === null && root.right === null && currPath === sequenceStr) {
    return true;
  }
  return (
    recursion(root.left, sequenceStr, currPath) ||
    recursion(root.right, sequenceStr, currPath)
  );
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(9);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(9);

const result = solution(root, [1, 9, 9]);
result;

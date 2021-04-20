/**
 * Given a binary tree where each node can only have a digit (0-9) value,
 * each root-to-leaf path will represent a number. Find the total sum of
 * all the numbers represented by all paths.
 */

/**
 * ex) tree:
 *                1
 *            7       9
 *                  2   9
 * output: 408
 * sum of all path number = 17 + 192 + 199 = 408
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root) {
  return recursion(root, "");
}

function recursion(node, currSum) {
  if (node === null) return "";
  if (node.left === null && node.right === null) {
    currSum += node.val;
    return currSum;
  }
  return (
    +recursion(node.left, currSum + node.val) +
    +recursion(node.right, currSum + node.val)
  );
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(9);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(9);

const result = solution(root);
result; // 408

const root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(1);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(5);

const result2 = solution(root2);
result2; // 332

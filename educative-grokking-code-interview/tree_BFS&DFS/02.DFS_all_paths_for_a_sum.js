/**
 * Given a binary tree and a number ‘S’, find all paths from root-to-leaf
 * such that the sum of all the node values of each path equals ‘S’.
 */

/**
 * ex1) tree:
 *               1
 *           7       9
 *         4   5   2   7
 *      S: 12
 * output: [[1, 7, 4], [1, 9, 2]]
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function solution(root, sum) {
  const result = [];
  recursion(root, sum, [], result);

  return result;
}

function recursion(currNode, sum, currPath, result) {
  if (currNode === null) return;

  currPath.push(currNode.val);

  if (
    currNode.val === sum &&
    currNode.left === null &&
    currNode.right === null
  ) {
    result.push(currPath);
    return;
  }
  recursion(currNode.left, sum - currNode.val, [...currPath], result);
  recursion(currNode.right, sum - currNode.val, [...currPath], result);
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(7);

const result = solution(root, 12);
result; // [[1, 7, 4], [1, 9, 2]]

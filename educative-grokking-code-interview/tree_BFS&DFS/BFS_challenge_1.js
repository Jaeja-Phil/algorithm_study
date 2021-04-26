/**
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to the first node of the next level.
 */

/**
 * ex)
 *                      1 --|
 *                  |-------|
 *                  v
 *                  2 ----> 3 --|
 *               |--------------|
 *               v
 *               4 --> 5 --> 6 --> 7 --> null
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
  printTree() {
    console.log("traversing the tree with next pointer:");
    let current = this;
    let printTree = "";
    while (current !== null) {
      printTree = printTree + " " + current.val;
      current = current.next;
    }
    console.log(printTree);
  }
}

function solution(root) {
  const queue = [root];
  let currentNode = null,
    previousNode = null;

  while (queue.length) {
    currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result[0];
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const result = solution(root);
result.printTree(); // 1 2 3 4 5 6 7

/**
 * Given the head of a Singly LinkedList, write a method to return
 * the middle node of the LinkedList. If the total number of nodes
 * in the LinkedList is even, return the second middle node.
 */

/**
 * ex1)
 * input: 1 - 2 - 3 - 4 - 5 - null
 * output: 3
 *
 * ex2)
 * input: 1 - 2 - 3 - 4 - 5 - 6 - null
 * output: 4
 *
 * ex3)
 * input: 1 - 2 - 3 - 4 - 5 - 6 - 7 - null
 * output: 4
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(solution(head));

head.next.next.next.next.next = new Node(6);
console.log(solution(head));

head.next.next.next.next.next.next = new Node(7);
console.log(solution(head));

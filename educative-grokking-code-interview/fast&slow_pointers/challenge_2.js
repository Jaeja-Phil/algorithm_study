/**
 * Given the head of a Singly LinkedList, write a method to modify
 * the LinkedList such that the nodes from the second half of the
 * LinkedList are inserted alternately to the nodes from the first
 * half in reverse order.
 *
 * Your algorithm should not use any extra space and the input
 * LinkedList should be modified in-place.
 */

/**
 * ex1)
 * input: 2 - 4 - 6 - 8 - 10 - 12 - null
 * output: 2 - 12 - 4 - 10 - 6 - 8 - null
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
  let secondHalf = reverse(slow);

  while (head !== null && secondHalf !== null) {
    let temp = head.next;
    head.next = secondHalf;
    head = temp;

    temp = secondHalf.next;
    secondHalf.next = head;
    secondHalf = temp;
  }

  if (head !== null) {
    head.next = null;
  }
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
solution(head);
console.log(head);

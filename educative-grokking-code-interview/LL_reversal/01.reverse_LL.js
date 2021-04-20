/**
 * Given the head of a Singly LinkedList, reverse the LinkedList.
 * Write a function to return the new head of the reversed LinkedList.
 */

/**
 * ex1)
 * input: 2 - 4 - 6 - 8 - 10 - null
 * output: 10 - 8 - 6 - 4 - 2 - null
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(head) {
  let prev = null;

  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(head); // 2 - 4 - 6 - 8 - 10 - null
const reversed = solution(head);
console.log(reversed); // 10 - 8 - 6 - 4 - 2 - null

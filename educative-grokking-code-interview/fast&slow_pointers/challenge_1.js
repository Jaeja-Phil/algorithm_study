/**
 * Given the head of a Singly LinkedList, write a method to check
 * if the LinkedList is a palindrome or not.
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
  let copySecondHalf = secondHalf;

  while (head !== null && secondHalf !== null) {
    if (head.value !== secondHalf.value) {
      // not a palindrome
      break;
    }
    head = head.next;
    secondHalf = secondHalf.next;
  }
  reverse(copySecondHalf);

  if (head === null || secondHalf === null) {
    return true;
  }

  return false;
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

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
console.log(solution(head)); // true

head.next.next.next.next.next = new Node(2);
console.log(solution(head)); // false

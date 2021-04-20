/**
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’,
 * reverse the LinkedList from position ‘p’ to ‘q’.
 */

/**
 * ex1)
 * input: p = 2, q = 4, LL = 1 - 2 - 3 - 4 - 5 - null
 * output: 1 - 4 - 3 - 2 - 5 - null
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let temp = this;
    let res = "";
    while (temp !== null) {
      res += `${temp.value} `;
      temp = temp.next;
    }
    return res;
  }
}

function solution(head, p, q) {
  let curr = head,
    prev = null,
    idx = 0;

  while (curr !== null && idx < p - 1) {
    prev = curr;
    curr = curr.next;
    idx += 1;
  }

  const LLpartOne = prev;
  const LLpartTwo = curr;
  let next = null;
  idx = 0;

  while (curr !== null && idx < q - p + 1) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    idx++;
  }

  if (LLpartOne !== null) {
    LLpartOne.next = prev;
  } else {
    head = prev;
  }

  LLpartTwo.next = curr;

  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(head.printList()); // 1 - 2 - 3 - 4 - 5 - null
const result = solution(head, 2, 4);
console.log(result.printList()); // 1 - 4 - 3 - 2 - 5 - null

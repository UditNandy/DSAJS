class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const arrayToLlUsingLoop = (arr) => {
  let head = new Node(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    let node = new Node(arr[i]);
    curr.next = node;
    curr = node;
  }
  return head;
};

const arrayToLlUsingRecursion = (arr, i = 0) => {
  if (i === arr.length - 1) return new Node(arr[i]);

  let node = new Node(arr[i]);
  node.next = arrayToLlUsingRecursion(arr, i + 1);
  return node;
};

const traverse = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
};

const reverseUsingLoop = (head) => {
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

const reverseUsingRecusion = (curr, prev = null) => {
  if (!curr) return prev;

  let next = curr.next;
  let temp = curr;
  curr.next = prev;
  return reverseUsingRecusion(next, temp);
};

let head = arrayToLlUsingRecursion([1, 2, 3, 4, 5]);
let reverseHead = reverseUsingRecusion(head);
traverse(reverseHead);

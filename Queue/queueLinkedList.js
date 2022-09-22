const Node = require("./node");

class queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  enqueue(item) {
    const node = new Node();
    node.data = item;
    if (this.last) {
      this.last.next = node;
      this.last = node;
    } else {
      this.head = node;
      this.last = node;
    }
  }

  peek() {
    return (!this.head) ? "the queue is Empty " : this.head.data;
  }

  dequeue() {
    if (!this.head) {
      console.log("\x1b[34m","queue is EMpty ");
      return;
    }
    let tempNode = this.head
    this.head = this.head.next;
    return tempNode.data
  }
  isEmpty() {
    return this.head === null;
  }

  printqueue() {
    let temp = this.head;
    while (temp) {
      console.log("\x1b[34m",temp.data);
      temp = temp.next;
    }
  }
}

module.exports = queue;

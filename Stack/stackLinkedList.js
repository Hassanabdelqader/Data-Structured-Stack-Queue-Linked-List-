const Node = require("./node");

class stack {
  constructor() {
    this.top = null;
  }

  pushItem(item) {
    const node = new Node();
    node.data = item;
    if (this.top) {
      node.previous = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  peek() {
    return !this.top ? "the stack is Empty " : this.top.data;
  }
  popItem() {
    if (!this.top) {
      console.log("\x1b[36m","Stack is EMpty ");
      return;
    }
    let tempNode = this.top; 
    this.top = this.top.previous;
    return tempNode.data
  }
  isEmpty() {
    return !this.top ? true : false;
  }

  printStack() {
    let temp = this.top;
    while (temp) {
      console.log("\x1b[36m",temp.data);
      temp = temp.previous;
    }
  }
}

module.exports = stack;

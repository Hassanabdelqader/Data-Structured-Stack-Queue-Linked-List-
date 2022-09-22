
const  StackLinkedList = require("./Stack/stackLinkedList");
const  QueueLinkedList = require("./Queue/queueLinkedList");

const stackLinkedList = new StackLinkedList();
let count = 1 ;

const queueLinkedList = new QueueLinkedList()
let count2 = 1;



console.log("\x1b[35m","###Adding Items to Queue###")
queueLinkedList.enqueue(`customer Number # ${count2++} `)
queueLinkedList.enqueue(`customer Number # ${count2++} `)
queueLinkedList.enqueue(`customer Number # ${count2++} `)
queueLinkedList.enqueue(`customer Number # ${count2++} `)
console.log("\x1b[35m","**************Print the Queue **********************")
queueLinkedList.printqueue()

console.log("\x1b[35m","###Serving the first and the second Item on Queue and dequeue###")
queueLinkedList.dequeue()
queueLinkedList.dequeue()

console.log("\x1b[35m","**************Print the Queue again after serving  **********************")
queueLinkedList.printqueue() 

console.log("\x1b[35m","###cusotmer ready to servve  ###")
console.log("\x1b[34m",queueLinkedList.peek());

console.log("\x1b[35m","###is the Queue is Empty ? ###")
console.log("\x1b[35m",queueLinkedList.isEmpty());



console.log("\x1b[31m","**************** Stack ************** ")
console.log("\x1b[31m","############# Stack ############# ")





console.log("\x1b[33m","###Adding Items to Stack###")
stackLinkedList.pushItem(`customer Number # ${count++} `)
stackLinkedList.pushItem(`customer Number # ${count++} `)
stackLinkedList.pushItem(`customer Number # ${count++} `)
stackLinkedList.pushItem(`customer Number # ${count++} `)
console.log("\x1b[33m","**************Print the Stack  **********************")
stackLinkedList.printStack()
stackLinkedList.popItem();
stackLinkedList.popItem();
console.log("*******After removing the top  **********")
stackLinkedList.printStack()

console.log("\x1b[35m","###is the Stack is Empty ? ###")
console.log("\x1b[35m",stackLinkedList.isEmpty());


console.log("\x1b[35m","###item  on the peek  ###")
console.log("\x1b[34m",stackLinkedList.peek());

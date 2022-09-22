const queueLinkedList = require('../Queue/queueLinkedList')

describe("testing the stack " , ()=>{
    it("test add ", ()=>{
        const objqueue = new queueLinkedList()
        objqueue.enqueue(`1`)
        objqueue.enqueue(`2`)
        expect(objqueue.peek()).toBe("1")
    })

    it("test pop ", ()=>{
        const objqueue = new queueLinkedList()
        objqueue.enqueue(`1`)
        objqueue.enqueue(`2`)
        objqueue.enqueue(`3`)

        
        expect(objqueue.dequeue()).toBe("1")
        expect(objqueue.peek()).toBe("2")
        
    })

    it("test isEmpty ", ()=>{
        const objqueue = new queueLinkedList()
        expect(objqueue.isEmpty()).toBeTruthy()
        objqueue.enqueue(`1`)
        objqueue.enqueue(`2`)
        objqueue.enqueue(`3`)
        expect(objqueue.isEmpty()).toBeFalsy()
       
    })



})
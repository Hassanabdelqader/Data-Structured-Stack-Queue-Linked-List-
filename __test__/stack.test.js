const stackLinkedList = require('../Stack/stackLinkedList')

describe("testing the stack " , ()=>{
    it("test add ", ()=>{
        const objStack = new stackLinkedList()
        objStack.pushItem(`1`)
        objStack.pushItem(`2`)
        expect(objStack.peek()).toBe("2")
        
    })

    it("test pop ", ()=>{
        const objStack = new stackLinkedList()
        objStack.pushItem(`1`)
        objStack.pushItem(`2`)
        objStack.pushItem(`3`)

        
        expect(objStack.popItem()).toBe("3")
        expect(objStack.peek()).toBe("2")
        
    })

    it("test isEmpty ", ()=>{
        const objStack = new stackLinkedList()
        expect(objStack.isEmpty()).toBeTruthy()
        objStack.pushItem(`1`)
        objStack.pushItem(`2`)
        objStack.pushItem(`3`)
        expect(objStack.isEmpty()).toBeFalsy()
 
    })



})
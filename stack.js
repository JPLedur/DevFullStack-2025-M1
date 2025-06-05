class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push(value){
        let newNode = Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    poop(){
        if(!this.top) return null
        let poopValue = this.top.value
        this.top = this.top.next
        return poopValue
    }

    EmptyList(){
        return this.top === null
    }

    peek(){
        if(!this.top) return null
        return this.top.value
    }
}
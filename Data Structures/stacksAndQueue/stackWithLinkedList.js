class Node{
    constructor(val){
        this.val = val ;
        this.next = null ;
        
    }
}
class Stack{
    constructor(){
        this.head = null ;
        this.tail = null ;
        this.size = 0 ;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode ;
            this.tail = newNode ;
        }
        else{
            var current = this.head
            this.head = newNode ;
            this.head.next = current ;
        }
        this.size ++ ;
        return this.size ;
    }
    pop(){
        if(!this.head){
            return null ;
        }
        var firstNode = this.head ;
        if(this.size === 1){
            this.head = null ;
            this.tail = null ;
        }else{
            this.head = firstNode.next ;
        }
        this.size -- ;
        return this.size;
    }
}

let stack = new Stack()
stack.push('Roshan')
stack.push('dalami')
stack.push('sunar')
stack.pop()
console.log(stack)
class Node{
    constructor(val){
        this.val = val;
        this.next = null ;
        this.prev = null ;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null ;
        this.tail = null  ;
        this.length = 0 ;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++ ;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let poped = this.tail
        if(this.length === 1){
            this.head = null ;
            this.tail = null;
        }
        else{
           this.tail = poped.prev ;
            this.tail.next = null ;
            poped.prev = null;
        }
        
        this.length -- ;
        return poped;
    }
    shift(){
        if(!this.head ){
            return undefined;
        }
        var oldHead = this.head ;
        if(this.length === 1){
            this.head = null;
            this.tail = null ;
        }
        else{
            this.head = oldHead.next ;
            this.head.prev = null ;
            oldHead.next = null ;
        }
        this.length -- ;
        return oldHead ;
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode ;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length ++ ;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length){
            return null ;
        }
        var midNode = Math.floor(this.length / 2);
        if(index >= midNode){
            var count = 0 ;
        var current = this.head;
        while(count != index){
            current = current.next;
            count ++;
        }
        return current
        }else{
            current = this.tail ;
            count = this.length - 1 ;
            while(count != index){
                current = current.prev ;
                count --;
            }
            return current
        }
    }
    set(val,index){
        var result = this.get(index)
        if(result != null){
                result.val = val
                return true
        }
        else{
            return false
        }

    }
    insert(index , value)
    {
        if(index < 0 || index >= this.length){
            return false ;
        }
        if(index === 0){
           return this.unshift(value)
        }
        if(index === this.length ){
           return this.push(value)
        }
       
         var newNode = new Node(value)
        var prevNode = this.get(index - 1);
        var currentNode = prevNode.next;

        currentNode.prev = newNode;
        newNode.next = currentNode ;
        prevNode.next = newNode ;
        newNode.prev = prevNode ;
        
        
        this.length ++ ;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined ;
        }
        if(index === 0){
            return this.shift()
        }
        if(index === this.length - 1){
             return this.pop()
        }
        var removeNode = this.get(index);
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removeNode.next = null ;
        removeNode.prev = null ;
        this.length -- ;
        return removeNode;
    }
    
}
var list = new DoublyLinkedList()
list.push(100)
list.push(1)
list.push(1000)
list.push(150)
list.unshift(400)

console.log(list.remove())
// console.log(list.get(1))
console.log(list)
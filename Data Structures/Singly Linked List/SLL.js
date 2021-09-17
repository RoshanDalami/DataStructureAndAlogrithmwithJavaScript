//piece of data -val
//reference ot next node -next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null ;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++ ;
        return this;
    }
   /* traverse(){
        var current  = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }*/
    pop(){ //pop
        if(!this.head){ // is no element on the list
            return undefined ;
        }
       var current = this.head //else 
       var newTail = current
       while(current.next){ //if have current.next 
           newTail= current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null
       this.length--;
       if(this.length === 0){
           this.head = null;
           this.tail = null ;
       }
       return current 
    }
    shift(){ //shift remove the item from the beginning
        if(!this.head){
            return undefined
        }
        var current = this.head
        this.head = current.next
        this.length -- ;
        return current
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            this.head = newNode.next //set the newly created node's next property to be the current head property on the list

            this.head = newNode // set the head property on the list to be that newly created node
        }
  
        this.length ++;//increase the length by one
        return list // return the Linkedlist
    }
}
var list = new SinglyLinkedList()

list.push('how')
list.push('you')
list.push("Doin'")
list.unshift('wtf')
console.log(list)
// console.log(list.traverse())

/*var first = new Node('hi');
first.next = new Node('there')
first.next.next = new Node('How')
first.next.next.next = new Node('you')
first.next.next.next.next = new Node('doin')*/
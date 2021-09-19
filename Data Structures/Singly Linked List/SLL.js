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
        return this // return the Linkedlist
    }
    get(index){ //get to get the value of the node
        if(index < 0 || index>= this.length){
            return null
        }
        let counter = 0;
        var current = this.head ;
        while(counter != index){
            current =  current.next ;
            counter ++ ;

        }
        return current
       
    }
    set(index , value){ // set the value at specific index
        let found = this.get(index)
        if(found){
            found.value = value
        }
        else{
            return false

        }

    }
    insert(index,value){
        if(index < 0 || index > this.length){
            return false
        }
        if(index === this.length){
            this.push(value)
            return true
            
        }
        if(index === 0){
           this.unshift(value)
           return true
        }
        else{
            var newNode = new Node(value)
           let node = this.get(index-1);
           var temp = node.next
           node.next = newNode
           newNode.next = temp
           this.length ++;
           return true
        }
    }
    remove(index){
        if(index < 0 || index > this.length){
            return undefined;
        }
        if(index === this.length - 1){
            return this.pop()
        }
        if(index === 0){
            return this.shift()
        }
        else{
            let prevNode = this.get(index-1)
            let currentNode = this.get(index)
            prevNode.next = currentNode.next
            this.length -- ; 
            return currentNode
        }
    }
    reverse(){
        let head = this.head
        let tail = this.tail
        this.head = tail
        this.tail = head
        var next

        let prev ;
        let node = this.head
        for(let i = 0 ; i < this.length ; i++){
         next = node.next
         node.next = prev
         prev = node
         node = next
        }
        return this

    }
    print(){
        var arr=[]
        var current = this.head
        while(current){
            arr.push(current.val);
            current = current.next
        }
        console.log(arr)
    }


}
var list = new SinglyLinkedList()

list.push('how')
list.push('you')
list.push("Doin'")
list.set(1,'yours')
list.reverse()
console.log(list.print())
list.remove(1)
console.log(list.insert(0,'roshan'))
console.log(list.get(0))
console.log(list)
// console.log(list.traverse())

/*var first = new Node('hi');
first.next = new Node('there')
first.next.next = new Node('How')
first.next.next.next = new Node('you')
first.next.next.next.next = new Node('doin')*/
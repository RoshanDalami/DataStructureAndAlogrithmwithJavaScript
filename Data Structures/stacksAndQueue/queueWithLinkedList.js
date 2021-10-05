class Node{
    constructor(val){
        this.val = val ;
        this.next = null ;
    }
}
class Queue{
    constructor() {
        this.first = null ;
        this.last = null ;
        this.size = 0 ;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode ;
            this.last = newNode ;
        }
        else{
            this.last.next = newNode ;
            this.last = newNode ;
            
        }
        this.size ++ ;
        return this.size
    }
    pop(){
        if(!this.first){
            this.first = null ;
            this.last = null ;
        }
        else {
            var currentFirst = this.first ;
            this.first = currentFirst.next ;
            currentFirst.next = null ;
        }
        this.size -- ;
        return this.size
    }
}
var queue = new Queue()
queue.push('roshan')
queue.push('sunar')
queue.push('dalami')
queue.push('hero')

queue.pop()
queue.pop()
queue.pop()
queue.pop()


console.log(queue)
class PriorityQueue {
    constructor(value){
        this.value = [] ;    
    }
    enqueue(val , priority){
        let newNode = new Node(val,priority);
        this.value.push(newNode)
        this.bubbleUp();
        
        
    }
    bubbleUp(){
       let index = this.value.length - 1;
       const element = this.value[index];
       while(index > 0)
       {
           let parentIndex = Math.floor((index-1)/2) ;
           let parent = this.value[parentIndex] ;
           if(element.priority >= parent.priority) break;
           
            this.value[parentIndex] = element ;
            this.value[index] = parent ;
            index = parentIndex
           
       }


    }
    dequeue(){
        const min = this.value[0];
        const end = this.value.pop();
        if(this.value.length >0){
            this.value[0] = end ;

        this.sinkDown()

        }
        
        return min ;
        

    } 
    sinkDown(){
         let index = 0;
         const length = this.value.length ;
         const element = this.value[0];
         while(true){
             let leftChildIndex = 2*index + 1 ;
             let rightChildIndex = 2*index + 2 ;
             let leftChild,rightChild ;
             let swap ;
             if(leftChildIndex < length)
             {
                 leftChild = this.value[leftChildIndex]
                 if(leftChild.priority < element.priority){
                     swap = leftChildIndex
                 }
             }
             if(rightChildIndex < length){
                 rightChild = this.value[rightChildIndex]
                 if((swap === null &&rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)){
                     swap = rightChildIndex
                 }
             }
             if(swap == null ) break ;
             this.value[index] = this.value[swap]
             this.value[swap ] = element
             index = swap ;
         }
    }
}
class Node{
    constructor(val,priority){
        this.val = val ;
        this.priority = priority
    }
}
let ER = new PriorityQueue();
ER.enqueue('common Cold', 1)
ER.enqueue('HighFever',2)
ER.enqueue('Fever',5)
ER.enqueue('HIV',3)
ER.enqueue('HIV-aids',4)
ER.dequeue()
ER.dequeue()
ER.dequeue()
console.log(ER)



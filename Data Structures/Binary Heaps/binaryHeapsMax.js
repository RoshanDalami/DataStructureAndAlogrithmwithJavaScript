class MaxBinaryHeap {
    constructor(value){
        this.value = [] ;    
    }
    insert(element){
        this.value.push(element)
        this.bubbleUp();
        
        
    }
    bubbleUp(){
       let index = this.value.length - 1;
       const element = this.value[index];
       while(index > 0)
       {
           let parentIndex = Math.floor((index-1)/2) ;
           let parent = this.value[parentIndex] ;
           if( element <= parent){
               break ;
           }
            this.value[parentIndex] = element ;
            this.value[index] = parent ;
            index = parentIndex
           
       }


    }
    extractMax(){
        const max = this.value[0];
        const end = this.value.pop();
        if(this.value.length >0){
            this.value[0] = end ;

        this.sinkDown()

        }
        
        return max ;
        

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
                 if(leftChild > element){
                     swap = leftChildIndex
                 }
             }
             if(rightChildIndex < length){
                 rightChild = this.value[rightChildIndex]
                 if((swap === null &&rightChild > element) || (swap !== null && rightChild > leftChild)){
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
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extractMax()
console.log(heap)

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
    remove(){
        

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
heap.remove()
console.log(heap)

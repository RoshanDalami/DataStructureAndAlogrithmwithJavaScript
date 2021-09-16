function binarySearch(arr,value){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((arr.length-1)/2);
   while(arr[mid] !== value && start <= end){
       if(arr[mid] > value){
           end = mid-1
       }
       else if(arr[mid]<value){
           start = mid + 1
       }
       mid = Math.floor((start+end)/2)
   }
   if(arr[mid] === value){
       return mid
   }
   
       return -1
   
   
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(binarySearch(arr,4))
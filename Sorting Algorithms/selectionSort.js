function selectionSort(arr){
    for(let i =0 ; i<arr.length ; i++){
        for(let j = 0 ; j< i-1 ; j++){
            let min = 0 ;
            if(arr[j]>arr[j+1]){
                min = arr[j+1 ]
            }
        }
    }
    
    return arr;
}
let arr = [7,5,6,3,1,9,4,8]
console.log(selectionSort(arr))
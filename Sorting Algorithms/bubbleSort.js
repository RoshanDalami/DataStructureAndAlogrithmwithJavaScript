function bubbleSort(arr){
    let temp = 0;
    for(let i = arr.length ; i>0; i--){
        for(let j = 0 ; j<= i-1 ; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp ;  
            }
        }
    }
    return arr

}
let arr = [7,5,6,3,1,9,4,8]
console.log(bubbleSort(arr))
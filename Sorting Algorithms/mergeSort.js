function divideArr(arr){ // dividing the array into halves
  
    if(arr.length <= 1){
        return arr
    }

  let mid = Math.floor(arr.length / 2);
  let left = divideArr(arr.slice(0,mid))
  let right = divideArr(arr.slice(mid,arr.length))
  return mergeSort(left , right)
}
function mergeSort(arr1,arr2) { //merging and sorting two array
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j]>arr1[i]){
            result.push(arr1[i]);
            i++ ;
        }
        else{
            result.push(arr2[j])
            j++ ;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}
let arr = [9,4,3,8,7,2,48,95,1,62,99]
console.log(divideArr(arr))
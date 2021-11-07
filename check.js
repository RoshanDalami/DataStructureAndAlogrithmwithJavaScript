/*function countZeroes(arr){
    let countZero = 0 ;
    for(let i = 0; i<arr.length ; i++){
        if(arr[i] === 0){
            countZero = countZero + 1;
        }
    }
    return countZero
  // add whatever parameters you deem necessary - good luck!!!
}
let arr = [1,1,1,0,0];
console.log(countZeroes(arr))*/

//prob 2
function sortedFrequency(arr, number){
    let count = 0 ;
    let include= arr.includes(number)
    if(!include){
        return -1 ;
    }
    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i])
    if(arr[i] === number){
        count = count + 1; 
    }
   
    
   
    
    }
    return count;

    
  // add whatever parameters you deem necessary - good luck!
}
let arr = [1,1,2,2,2,2,3]
console.log(sortedFrequency(arr,4))
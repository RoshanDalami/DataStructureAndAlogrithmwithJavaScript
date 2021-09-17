function maxSubarraySum(arr,num){
    let maxSum = 0;
    
    if(num>arr.length){
        return null
    }
    for(var  i = 0 ; i < arr.length -num +1 ; i++){
        let tempSum = 0;
        for(var j = 0 ; j<num ; j++){
            tempSum +=  arr[i+j]

        }
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum
    
}
let arr= [1,2,3,4,10]
console.log(maxSubarraySum(arr,2))
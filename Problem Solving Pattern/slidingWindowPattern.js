function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null
    }
    let max = -Infinity
    for(let i=0 ; i< arr.length -num +1 ; i++){
        temp = 0;
        for(let j = 0 ; j<num ; j++){
            temp += arr[i+j]
            
        }
        if(temp > max){
            max = temp
        }
        
    } return max

}
 let arr = [1,2,3,4,5,6,9,8,7];
 let num = 3
 console.log(maxSubarraySum(arr,num))
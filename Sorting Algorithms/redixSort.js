function getDigit(num,place){
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10;
}
function digitCount(num){
    if(num === 0) return 1

    return Math.floor(Math.log10(Math.abs(num))) + 1 
}
function mostDigit(nums){
    let maxDigit = 0 ;
    for(let i = 0 ; i< nums.length ; i++){
        maxDigit = Math.max(maxDigit,digitCount(nums[i]))
    }
    return maxDigit
}
function radixSort(nums){
    let maxDigitCount = mostDigit(nums);
    for(let k = 0 ; k < maxDigitCount ; k++){
        let digitBuckets = Array.from({length : 10} , () => []);
        for(let i = 0 ; i< nums.length ; i++){
           digitBuckets [getDigit(nums[i],k)].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums

}
console.log(radixSort([100,500,5000,4583,1,20,782,30]))
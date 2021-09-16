function productOfArray(arr){
    if(arr.length === 0){
        return 1
    }
    return arr[0] * productOfArray(arr.splice(1))
}
let arr = [1,2,3]

console.log(productOfArray(arr))
function findMatch(arr1,arr2){
    let alice = 0 ;
    let bob = 0 ;
    if(arr1.length !== arr2.length){
        return -1 ;
    }
    for( let i = 0 ; i<arr1.length ; i++){
        if(arr1[i] > arr2[i]){
            alice += 1
        }
        else if(arr1[i] < arr2[i]){
            bob += 1;
        }
    }
    return [alice , bob]

}
let arr1 = [1,8,9]
let arr2 = [7,2,9]
console.log(findMatch(arr1,arr2))
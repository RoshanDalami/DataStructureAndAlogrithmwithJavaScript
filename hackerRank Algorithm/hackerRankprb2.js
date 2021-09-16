function aVeryBigSum(ar){
    if(ar[0] === ar[null]){
        return 0;
    }
    return (ar[0] + aVeryBigSum(ar.splice(1))) 
}
let ar = [1000000001, 1000000002 ,1000000003 ,1000000004 ,1000000005]
console.log(aVeryBigSum(ar))
function sumDig(arr){
    let principleDig = 0;
    let secondaryDig = 0;
    for(let i = 0; i<arr.length ; i++){
        for(let j = 0 ; j<arr.length ; j++){
            if(i===j){
                principleDig+=arr[i][j]
            }
            if((i+j)===arr.length-1 ){
                secondaryDig += arr[i][j] 

            }
        }
    }
    return (principleDig - secondaryDig)
}
let arr = [[11, 2, 4],
    [4 ,5 ,6],
    [10, 8,-12]]
console.log(sumDig(arr))
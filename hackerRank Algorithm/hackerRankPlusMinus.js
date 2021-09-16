function plusMinus(arr){
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] > 0){
            countPositive +=1 ;
        }
        else if(arr[i]<0){
            countNegative += 1;
        }
        else{
            countZero += 1 ;
        }
    }
    let ratioPositive = (countPositive/ arr.length).toFixed(5) ;
    let ratioNegative = (countNegative/ arr.length).toFixed(5) ;
    let ratioZero = (countZero/ arr.length).toFixed(5) ;

    return [ratioPositive , ratioNegative , ratioZero];
       
        // ratioZero ) ;

}
let arr = [-4, 3 ,-9 ,0, 4 ,1]
console.log(plusMinus(arr))
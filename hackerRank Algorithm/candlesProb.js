function birthdayCandles(candles){
    var count = 0;
    var max = Math.max(...candles)
    for(let val of candles){
        if(val === max){
            count ++ ;
        }
    }
    return count ;

}
var candles = [3,2,1,3]
console.log(birthdayCandles(candles))
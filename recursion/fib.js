function fib(num){
    let fibSeries = []
    if(num === 0){
        return 0
    }
    if(num === 1){
        return 1
    }
     return fib(num-1)+fib(num-2)
}
console.log(fib(10))
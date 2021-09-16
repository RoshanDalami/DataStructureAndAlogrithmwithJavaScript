function uniqueValue(arr){
    let i = 0;
   if(arr[i] === arr[null]){
       return i
   }
    
    for(let j = 1 ; j <arr.length ; j++){
       
         if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i +1


}
let arr = []
arr.sort(function(a,b){
return a-b;
})

console.log(uniqueValue(arr))
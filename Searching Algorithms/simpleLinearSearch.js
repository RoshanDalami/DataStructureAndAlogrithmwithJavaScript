// function linear(arr,value){
//     if(arr.includes(value)){
//         return arr.indexOf(value)
//     }
//     else{
//         return -1;
//     }
// }
function linearSearch(arr,value){
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] === value){
            return i;
        }
    }
}
let arr = [1,2,3,4,5,6,7]
console.log(linearSearch(arr,3))
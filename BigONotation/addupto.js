// function addupto(n){
//     // let total = 0;
//     // for(let i = 1 ; i <=n ; i++){
//     //     total += i
//     // }
//     // return total
//     return (n*(n+1)) / 2 ;
// }
// let time1 = performance.now();
// addupto(10000000)
// let time2 = performance.now();
// console.log(`performance ${(time2-time1)/ 1000} seconds`)

let obj ={
    firstName : 'roshan',
    lastName : 'dalami',
    age : 21,

}
let key = Object.keys(obj)
let value = Object.values(obj)
let entries = Object.entries(obj)

console.log(key)
console.log(value)
console.log(entries)
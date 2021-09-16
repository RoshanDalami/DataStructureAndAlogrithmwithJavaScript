function sumZero(arr){
    let left = 0 ;
    let right = arr.length - 1;
   while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === 0){
            return [arr[left] ,arr[right]]
        }
        else if(sum>0){
            right -- ;
        }
        else{
            left ++;
        }
   }
}


//This solution has O(n)
//niav solution
/*function sumZero(arr){
    for(let i = 0 ; i<arr.length ; i++){
        for( let j = i+1 ; j< arr.length ; j++){
            let sum = arr[i]+arr[j];
            if(sum === 0){
                return [arr[i],arr[j]]
            }
            
            
        }
    }
}*/
let arr = [-10,-9,-8,0,15,1,2,7,8,9,10]
 arr.sort(function(a,b){
     return a-b;
 })

console.log(sumZero(arr))
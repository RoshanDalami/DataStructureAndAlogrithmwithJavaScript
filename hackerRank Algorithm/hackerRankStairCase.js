function stairCase(n){
   let i = n ;
   if(n === 0){
       return -1 ;
   }
   console.log('#\n');
   i-- ;
   return stairCase(i);
   
    
}
console.log(stairCase(6))
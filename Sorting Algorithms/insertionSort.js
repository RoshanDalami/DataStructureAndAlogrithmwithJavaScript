function insertionSort(arr){
    // let j , item ;
    // for(let i = 1; i<arr.length ; i++){
    //   item = arr[i]
    //   j= i-1 ;
    //   while(item <arr[j] && j>=0){
    //       arr[j+1] = arr[j]
    //       j = j-1
    //   }
    //   arr[j+1] = item

        
    // }

    // for(let i = 1 ; i<arr.length ; i++){
    //   console.log('**************\n')
    //   console.log(i)
     
    //   let currentItem = arr[i]; //storing the current value of index i on variable
    // let j= i-1;
    // console.log(j)
    // console.log('**************\n')
    // while(j >= 0 && arr[j] > currentItem){
    //   arr[j+1] = arr[j]
    //   j-- ;

    // }
    // arr[j+1] = currentItem
    // }


    for(var i = 1 ; i< arr.length ; i++){
      let currentItem = arr[i];
      for(var j = i-1 ; j>=0 && arr[j] > currentItem ; j--){
        arr[j+1] = arr[j]
      }
      arr[j+1] = currentItem
    }
return arr
}
let arr = [7,5,3,6,4,1,9,8]
console.log(insertionSort(arr))
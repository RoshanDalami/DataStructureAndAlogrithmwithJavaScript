function frequency(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frequecnyCounter1 = {};
    let frequecnyCounter2 = {};
    for(let val of arr1){
        frequecnyCounter1[val] = (frequecnyCounter1[val] ||0) + 1
    }
    for(let val of arr2){
        frequecnyCounter2[val] = (frequecnyCounter2[val] ||0) + 1
    }
    for(let key in frequecnyCounter1){
        if(!(key**2) in frequecnyCounter2){
            return false
        }
        if(frequecnyCounter1[key]!== frequecnyCounter2[key**2])
        {
            return false
        }
    }
    return true
}
console.log(frequency([1,5,2],[1,4,24]))
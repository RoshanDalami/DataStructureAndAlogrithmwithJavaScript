function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let anagram1 ={}
    let anagram2 ={}
    for(let val of str1)
    {
        anagram1[val]= (anagram1[val] || 0) +1
    }
    for(let val of str2){
        anagram2[val] = (anagram2[val] || 0) +1 
    }
    for(let letter in anagram1){
        if(!(letter in anagram2)){
            return false
        }
        if(anagram1[letter] !== anagram2[letter]){
            return false
        }
    }
    return true
}
console.log(anagram('roshan','nahso'))
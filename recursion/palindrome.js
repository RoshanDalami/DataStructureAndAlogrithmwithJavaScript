function isPalindrome(string)
{
    if(string.length <= 1){
        return string
    }
    let reverse = isPalindrome(string.slice(1)) + string[0]
    if(string === reverse){
        return true
    }
    return false
}
console.log(isPalindrome("tacocat"))
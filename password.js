var keylist ="bdf349"
var temp = ''
function generatepass(plength){
    temp =''
    for(i =0; i< plength; i++)
    {
        if(plength <4)
        {
            temp = "Enter the lenght more than 4!"
        }
        else
        temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return temp
}
generatepass(10)
console.log(generatepass(10))

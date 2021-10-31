//Neive solution

// function hash(key,arrayLen){
//     let total = 0 ;
//     let prime_number = 31
//     for(let char in key){
//         let value = char.charCodeAt(0)
//         total = ((total*prime_number) + value ) % arrayLen;
//     }
//     return total;
// }



//refacotr solution
/*
function hash(key,arrayLen){
    let total = 0;
    let prime_number = 31 ;
    for(let i = 0 ;i< Math.min(key.length,100);i++){
        let char = key[i];
        let value = char.charCodeAt(0)-96;
        total = ((total* prime_number)+value) % arrayLen ;
    }
    return total
}
*/

//Using Class HashTable

class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }
    hash(key){
        let total = 0 ;
        let prime_number = 31 ;
        for(let i = 0 ; i< Math.min(key.length , 100) ; i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96 ;
            total = (total*prime_number+value) % this.keyMap.length ;

        }
        return total
    }
    set(key,value){
        let hashIndex = this.hash(key)
        if(!this.keyMap[hashIndex]){
            this.keyMap[hashIndex]= [] ;

        }
       return this.keyMap[hashIndex].push([key,value])


    }
    get(key){
     let hashIndex = this.hash(key)
     if(this.keyMap[hashIndex]){
         for(let i = 0 ; i < this.keyMap[hashIndex].length ; i++ ){
            if(this.keyMap[hashIndex][i][0] === key){
                return this.keyMap[hashIndex][i]
            }
         }
     }
     return undefined
    }
    values(){
        let valuesArray = [] ;
        for(let i = 0 ; i < this.keyMap.length ; i++){
           if(this.keyMap[i]){
               for(let j = 0 ; j < this.keyMap[i].length ; j++){
                   if(!valuesArray.includes(this.keyMap[i][j][1])){
                    valuesArray.push(this.keyMap[i][j][1])
                   }
             
               }
           }
        }
        return valuesArray
    }
    keys(){
        let keysArray = [];
        for(let i = 0 ; i < this.keyMap.length ; i++){
            if(this.keyMap[i]){
                for(let j = 0 ; j < this.keyMap[i].length ; j++){
                    if(!keysArray.includes(this.keyMap[i][j][0])){
                        keysArray.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArray
    }
}
let hashtable = new HashTable()
hashtable.set('maroon','#0044ff')
hashtable.set('red','#04ff15')
hashtable.set('orange','#0055ff')
hashtable.set('black','#0046ff')
hashtable.set('white','#fffffff')
hashtable.set('orangered','#00ff66')
hashtable.set('creamWhite','#0042ff')
console.log(hashtable.get('red'))
console.log(hashtable.values())
console.log(hashtable.keys())

// console.log(hashtable)

/*function hash(key){
    let total = 0 ;
    let prime_number = 31 ;
    for(let i = 0 ; i< Math.min(key.length , 100) ; i++){
        let char = key[i];
        console.log(char)
        let value = char.charCodeAt(0) - 96 ;
        total = ((total*prime_number)+value) % key.length ;

    }
    return total
}
console.log(hash('hi'))*/

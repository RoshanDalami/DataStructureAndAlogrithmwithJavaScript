class Node {
    constructor(val) {
        this.val = val ;
        this.left = null ;
        this.right = null ;

        
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null ;
    }
    insert(val){
        var newNode = new Node(val);
         
        if(this.root === null){
            this.root = newNode ;
            return this ;
        }
        
        var current = this.root ;
            while(true)
            {
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null ){
                        current.left = newNode ;
                        return this ;
                    }else{
                        current = current.left ;

                    }
                }else {
                    if(current.right === null){
                        current.right = newNode ;
                        return this;
                    }
                        current = current.right ;
                }
            }
    }
    find(val){
        if(!this.root)
        {
            return this ;
        }
       var current = this.root
       var found = false ; // to keep track Of
       while(current && !found){
           if(val < current.val){
               current = current.left
           }else if(val > current.val){
               current = current.right ;
           }else{
               found = true ;
           }
       }
       if(!val){
           console.log(`there is not ${val}`) 
       }
       return current ;

    }
    BFS(){
        var data =[] ,queue = [] ,node = this.root ;
        queue.push(node)
        while(queue.length){
           node = queue.shift();
           data.push(node)
           if(node.left) queue.push(node.left)
           if(node.right)queue.push(node.right)
        }
        return data ;

    }
    DFSPreOrder(){
        var data =[] ;
        var current = this.root ;
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current)


        return data;
    }
    DFSPostOrder(){
        var data = [] ;
        var current = this.root;
        function traverse(node){
            
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.val)

        }
        traverse(current)

        return data ;
    }
    DFSInOrder(){
        var data = []
        var current = this.root ;
        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.val) ;
            if(node.right) traverse(node.right)

        }
        traverse(current)
        return data;
    }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log( tree.BFS())
console.log("PreOrder :" + tree.DFSPreOrder())
console.log('PostOrder:' + tree.DFSPostOrder())
console.log('InOrder:' + tree.DFSInOrder())
console.log(tree)
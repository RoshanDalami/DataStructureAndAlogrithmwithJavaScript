//we are using Adjecency list represenation of graph and using undirected graph

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertexName){
        if(!this.adjacencyList[vertexName])
        this.adjacencyList[vertexName] = [];
    }
    addEdge(vertex1,vertex2){
      
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        
    }
    removeEdge(vertex1,vertex2){
        
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {v!== vertex2})
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) =>{v!== vertex1} )
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
    depthFirst(StartingNode){
        const result = [];
        var visitedVertex = {};
        let adjacencyList = this.adjacencyList
        function helper(vertex){
            if(!vertex){
                return null ;
            }
            visitedVertex[vertex] = true ;
            result.push(vertex)
            adjacencyList[vertex].forEach(neighour => { 
                if(!visitedVertex[neighour]){
                    return helper(neighour)
                }
                
            });
        }
        helper(StartingNode)
        return result
    }
    dfsIterative(startingNode){
        const visited = {}
        const result = []
        const stack = [startingNode]
        let currentVertex ;

        visited[startingNode] = true ;
        while(stack.length){
             currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighour => {
                if(!visited[neighour]){
                    visited[neighour] = true ;
                    stack.push(neighour)
                }
            })
        }
        return result
    }
    bfs(startingNode){
        const queue = [startingNode];
        const visited = {};
        visited[startingNode] = true ;
        const result = [];
        let currentVertex ;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighour =>{
                if(!visited[neighour]){
                    visited[neighour] = true ;
                    queue.push(neighour);
                }
            });
        }
        return result

    }
}
let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','D')
graph.addEdge('C','E')
graph.addEdge('D','E')
graph.addEdge('D','F')
graph.addEdge('E','F')
graph.depthFirst('A')
graph.dfsIterative('A')
graph.bfs('A')
console.log(graph.depthFirst('A'))
console.log(graph.dfsIterative('A'))
console.log(graph.bfs('A'))
console.log(graph)

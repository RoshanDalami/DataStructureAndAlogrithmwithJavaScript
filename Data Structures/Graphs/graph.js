//we are using Adjecency list represenation of graph and using undirected graph

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertexName){
        this.adjacencyList[vertexName] = [];
    }
    addEdge(vertex1,vertex2){
      
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        
    }
    removeEdge(vertex1,vertex2){
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v!== vertex2)
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v!== vertex1)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
}
let graph = new Graph()
graph.addVertex('Roshan')
graph.addVertex('dalami')
graph.addVertex('sunar')
graph.addEdge('Roshan','dalami')
graph.addEdge('dalami','sunar')
graph.removeEdge('roshan','dalami')
console.log(graph)

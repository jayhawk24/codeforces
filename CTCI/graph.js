class AdjacencyList{
    constructor(){
        this.vert = new Array();
        this.edges = [];
        this.numberOfEdges = 0;
    }
    addVertex(vertex){
        this.vert.push(vertex);
        this.edges[vertex] = [];
    }
    removeVertex(vertex){
        const index = this.vertices.indexOf(vertex);
        if(index >= 0){
            this.vertices.splice(index, 1);
        }
        while(this.edges[vertex].length){
            const adjacent = this.edges[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
    }
    addEdge(vertex1, vertex2){
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
    }

    removeEdge(adjacentVertex, vertex){
    }
}

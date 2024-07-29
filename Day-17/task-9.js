class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        let visited = new Set();
        let queue = [];
        queue.push(startingNode);
        visited.add(startingNode);

        while (queue.length) {
            let currentNode = queue.shift();
            console.log(currentNode);

            let neighbors = this.adjacencyList.get(currentNode);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.bfs('A'); // Output: A B C

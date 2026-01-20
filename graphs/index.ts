class Graph<T> {
    private adjacencyList: Map<T, Set<T>>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: T): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
        }
    }

    // if undirect is true, add edges in both directions
    addEdge(vertex1: T, vertex2: T, undirect: boolean = true): void {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
            throw new Error("Both vertices must exist in the graph.");
        }

        this.adjacencyList.get(vertex1)!.add(vertex2);
        if (undirect) {
            this.adjacencyList.get(vertex2)!.add(vertex1);
        }
    }

    /**
     * Breadth-First Search (BFS)
     * Useful for finding the shortest path in unweighted graphs
   */
    bfs(startNode: T): T[] {
        const queue: T[] = [startNode];
        const result: T[] = [];
        const visited: Set<T> = new Set();

        while (queue.length > 0) {
            const currentNode = queue.shift()!;
            result.push(currentNode);

            const neighbors = this.adjacencyList.get(currentNode);
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }

        return result;
    }

    /**
     * Depth-First Search (DFS)
     * Useful for exploring paths and detecting cycles
    */
    dfs(startNode: T, visited = new Set<T>(), result: T[] = []): T[] {
        visited.add(startNode);
        result.push(startNode);

        const neighbors = this.adjacencyList.get(startNode);
        if (neighbors) {
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    this.dfs(neighbor, visited, result);
                }
            }
        }

        return result;
    }

    removeEdge(vertex1: T, vertex2: T): void {
        this.adjacencyList.get(vertex1)?.delete(vertex2);
        this.adjacencyList.get(vertex2)?.delete(vertex1);
    }

    getVertices(): T[] {
        return Array.from(this.adjacencyList.keys());
    }
}

// exemplo de uso
const airportNetwork = new Graph<string>();

airportNetwork.addVertex("JFK");
airportNetwork.addVertex("LHR");
airportNetwork.addVertex("CDG");
airportNetwork.addVertex("GRU");

airportNetwork.addEdge("JFK", "LHR");
airportNetwork.addEdge("LHR", "CDG");
airportNetwork.addEdge("GRU", "JFK");

console.log("BFS Route Explorer:", airportNetwork.bfs("GRU")); 
console.log("DFS Route Explorer:", airportNetwork.dfs("GRU")); 
console.log("Vertices in the graph:", airportNetwork.getVertices());
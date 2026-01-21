import { Queue } from "../queue.ts";

class Graph {
    isDirected: boolean;
    vertices: any[];
    adjList: Map<any, any[]>;

    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertex(v: number | string) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }

    addEdge(v: number | string, w: number | string) {
        if (!this.adjList.get(v)) {
            this.addVertex(v);
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w);
        }
        
        this.adjList.get(v)!.push(w);
        if (!this.isDirected) {
            this.adjList.get(w)!.push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            const vertex = this.vertices[i];
            const neighbors = this.adjList.get(vertex)?.join(' ');
            s += `${vertex} -> ${neighbors}\n`;
        }
        return s;
    }
}

const graph = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (const v of vertices) {
    graph.addVertex(v);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// console.log(graph.toString())

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2,
}

const initializeColor = (vertices: any[]) => {
    const color: Record<string, number> = {};
    for (const v of vertices) {
        color[v] = Colors.WHITE;
    }
    return color;
}

// BFS version 1
const breadthFirstSearch = (graph: Graph, startVertex: string, callback?: (args: any) => void) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue<string>();

    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u)!;
        color[u] = Colors.GREY;
        for (let w of neighbors) {
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
}

const printVertex = (value: string) => console.log(`Visited vertex: ${value}`);
// breadthFirstSearch(graph, vertices[0], printVertex);

const BFS = (graph: Graph, startVertex: string) => {
    const 
        vertices = graph.getVertices(),
        adjList = graph.getAdjList(),
        color = initializeColor(vertices),
        queue = new Queue<string>(),
        distances: Record<string, number> = {},
        predecessors: Record<string, string | null> = {};

    for (const v of vertices) {
        distances[v] = 0;
        predecessors[v] = null;
    }
        
    queue.enqueue(startVertex);
    while(!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u)!;
        color[u] = Colors.GREY;

        for (const w of neighbors) {
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }

    return {
        distances,
        predecessors,
    }
}

const shortestPath = BFS(graph, vertices[0]);
console.log(shortestPath);
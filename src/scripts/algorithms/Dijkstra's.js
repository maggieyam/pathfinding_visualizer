
import PriorityQueue from '../utils/priorityQueue';

const Dijkstra = (p5, vertices, start) => {
    // return null;
    const pqueue = new PriorityQueue();
    let [row, col] = start;
    let startNode = vertices[row][col];
    startNode.cost = 0;
    pqueue.enqueue(startNode);

    while (!pqueue.isEmpty()) {
        let vertex = pqueue.dequeue();
        vertex.color = p5.color(`rgb(102, 0, 204)`);
        vertex.visited = true;

        if (vertex.isEnd) {
            findPath(vertex);
            break
        };
        updateQueue(vertex, vertices, pqueue, p5);
    }


}

const findPath = (vertex) => {
    let node = vertex;
    while (!node.isStart) {
        node.color = 'yellow';
        node = node.prev;
    }
    node.color = 'yellow';
}

const updateQueue = (vertex, vertices, pqueue, p5) => {
    vertex.edges.forEach(edge => {
        let [row, col] = edge.end;          
        let neighbor = vertices[row][col];
        if (neighbor.visted) return; 
   
        let cost = edge.weight + vertex.cost;
        if (cost < neighbor.cost) {
            neighbor.cost = cost;
            neighbor.prev = vertex;
            enqueueNeighbor(neighbor, pqueue);               
            neighbor.color = p5.color('rgb(0, 255, 255)');
        }
    })
}


const enqueueNeighbor = (neighbor, pqueue) => {
    if (pqueue.includes(neighbor)){
        pqueue.remove(neighbor);
    }
    pqueue.enqueue(neighbor);
}

export default Dijkstra;
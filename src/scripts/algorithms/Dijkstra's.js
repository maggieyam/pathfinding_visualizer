// import node from '../graphs/node';
import {Vetex, Edge} from '../graph/node';
import PriorityQueue from '../utils/priorityQueue';
// const ROW = 50;
// const COL = 30;
const POS = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 1]
]

const Dijkstra = (p5, vertices, start, end) => {
    // return null;
    const pqueue = new PriorityQueue;
    let [row, col] = start;
    let startNode = vertices[row, col];
    startNode.cost = 0;
    pqueue.enqueue(startNode);

    while (!pqueue) {
        let vertex = pqueue.dequeue();
        vertex.visted = true;
        if (vertex.isEnd) break;

        POS.forEach(pos => {
            row = pos[0] + vertex.pos[0];
            col = pos[1] + vertex.pos[1];
            let neighbor = vertices[row][col];
            neighbor.cost = 1 + neighbor.cost;
            pqueue.enqueue();
        })

    }

}

export default Dijkstra;
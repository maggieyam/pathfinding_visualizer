
const ROW = 41;
const COL = 90;

import PriorityQueue from '../utils/priorityQueue';

const Weighted = (vertices, start, end, type) => {
    const pqueue = new PriorityQueue();
    let [row, col] = start;
    let startNode = vertices[row][col];
    
    startNode.cost = 0;
    // A*
    if (type === 'Astar') startNode.heuristic = heuristic(startNode, end);
    pqueue.enqueue(startNode);
    
    let considered = [];

    while (!pqueue.isEmpty()) {
        let vertex = pqueue.dequeue();
        vertex.visited = true;
        if (vertex.isEnd) {
            animateNodes(considered);
            setTimeout(() => findPath(vertex), 1000);
            break
        };
        updateQueue(vertex, vertices, pqueue, considered, type);
    }
    
}

const heuristic = (vertex, end) => {

    let dx = Math.abs(end[0] - vertex.pos[0]);
    let dy = Math.abs(end[1] - vertex.pos[1]);
    return dx + dy + (Math.sqrt(2) - 2) * Math.min(dx, dy);
}

const animateNodes = (considered) => {
    for (let count in considered) {
        animation(considered[count], count);
    }
}

const findPath = ( vertex ) => {
    let node = vertex;
    let path = [];
       
    while (!node.isStart) {
        path.unshift(node);
        node = node.prev;
    }
   
    path.map( vertex => {
        setTimeout(() => {           
            vertex.color = 'yellow'; 
        }, 10);
    })
}

const animation = (vertex, count) => {    
    return setTimeout(()=> {
            if (vertex.color === 'white') {
                vertex.color = 'rgb(74, 20, 140)';
                
            } else if (vertex.color === 'rgb(74, 20, 140)') {
                vertex.color = 'rgb(94, 53, 177)';

            } else if (vertex.color === 'rgb(94, 53, 177)') {
                vertex.color = 'rgb(21, 101, 192)';

            } else if (vertex.color === 'rgb(21, 101, 192)'){
                vertex.color = 'rgb(83, 109, 254)';
            
            } else if (vertex.visited === true) {
                vertex.color = "rgb(77, 208, 225)";
                // vertex.color = "rgb(255, 233, 182)";
            } 
                 
    }, 100); 
}

const updateQueue = (vertex, vertices, pqueue, considered, end, type) => {
    // 
    vertex.edges.forEach(edge => {
        let [row, col] = edge.end; 
        if ((col < 0 || row < 0 || col > COL - 1 || row > ROW - 1) ) return null;       
        let neighbor;
        if(vertices[row][col]) neighbor = vertices[row][col];
        if (neighbor.visted) return; 
        considered.push(neighbor);
        
        let cost = edge.weight + vertex.cost;
        if (cost < neighbor.cost) {
            neighbor.cost = cost;
            neighbor.prev = vertex;
            if(type === 'Astar') {
                neighbor.heuristic = heuristic(neighbor, end);
            }
            return enqueueNeighbor(neighbor, pqueue);     
        }
    })
}

const enqueueNeighbor = (neighbor, pqueue ) => {
    if (pqueue.includes(neighbor)){
        pqueue.remove(neighbor);
    }
    pqueue.enqueue(neighbor); 
}

export default Weighted;
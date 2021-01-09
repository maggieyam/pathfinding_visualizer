


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
            findPath(vertex, considered.length);
            break
        };
        updateQueue(vertex, vertices, pqueue, considered, end, type);
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

const findPath = ( vertex, count ) => {
    let node = vertex;
    let path = [];
       
    while (!node.isStart) {
        path.unshift(node);
        node = node.prev;
    }
   
    path.map( vertex => {
        setTimeout(() => {           
            vertex.color = 'yellow'; 
        }, 1 * count);
    })
}

const animation = (vertex, count) => {    
    return setTimeout(()=> {
            if (vertex.color === 'white') {
                // vertex.color = 'rgb(74, 20, 140)';
                
            // } else if (vertex.color === 'rgb(74, 20, 140)') {
                // vertex.color = 'rgb(94, 53, 177)';

            // } else if (vertex.color === 'rgb(94, 53, 177)') {
                // vertex.color = 'rgb(21, 101, 192)';

            // } else if (vertex.color === 'rgb(21, 101, 192)'){
                vertex.color = 'rgb(83, 109, 254)';
            
            } else if (vertex.visited) {
                vertex.color = "rgb(77, 208, 225)";
                // vertex.color = "rgb(255, 233, 182)";
            } 
                 
    }, 1 * count); 
}

const updateQueue = (vertex, vertices, pqueue, considered, end, type) => { 
    for(let edge of vertex.edges) {
        let [row, col] = edge.end;  
        let neighbor = vertices[row][col];
        // if(neighbor.visited) continue;

        if (neighbor.visted || pqueue.includes(neighbor)) continue; 
        considered.push(neighbor);
        let cost = edge.weight + vertex.cost;
        if (cost < neighbor.cost) {
            neighbor.cost = cost;
            neighbor.prev = vertex;
            if(type === 'Astar') {
                neighbor.heuristic = heuristic(neighbor, end);
            }
            pqueue.enqueue(neighbor);     
        }
    }
}


export default Weighted;
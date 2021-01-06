

import PriorityQueue from '../utils/priorityQueue';
// export  const visited = setTimeout(()=> vertex.color = 'hsl(180, 100%, 50%)';
const Dijkstra = (vertices, start) => {
    const pqueue = new PriorityQueue();
    let [row, col] = start;
    let startNode = vertices[row][col];
    startNode.cost = 0;
    pqueue.enqueue(startNode);
    

    while (!pqueue.isEmpty()) {
        let vertex = pqueue.dequeue();
        vertex.visited = true;
        
        setTimeout(()=> vertex.color = 'hsl(180, 100%, 50%)', 0);

        if (vertex.isEnd) {
            findPath(vertex);
            break
        };
        updateQueue(vertex, vertices, pqueue);
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
        setTimeout(() =>
        vertex.color = 'yellow', 1000); 
    })

}

const updateQueue = (vertex, vertices, pqueue,considered) => {
    vertex.edges.forEach(edge => {
        let [row, col] = edge.end; 
        //          
        let neighbor = vertices[row][col];
        if (neighbor.visted) return; 
   
        let cost = edge.weight + vertex.cost;
        if (cost < neighbor.cost) {
            neighbor.cost = cost;
            neighbor.prev = vertex;
            return enqueueNeighbor(neighbor, pqueue, considered);     
        }
    })
}

const enqueueNeighbor = (neighbor, pqueue) => {
    if (pqueue.includes(neighbor)){
        pqueue.remove(neighbor);
    }
    pqueue.enqueue(neighbor);
    setTimeout(() => neighbor.color = 'rgb(102, 0, 204)', 0);
    
}

export default Dijkstra;
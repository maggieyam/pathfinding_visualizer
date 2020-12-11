const BFS = (p5, vertices, start, end) => {
    const queue = [];
    let [row, col] = start;
    let startNode = vertices[row][col];
    startNode.cost = 0;
    queue.push(startNode);

    while (queue.length) {
        let vertex = queue.shift();
        vertex.color = p5.color(`rgb(102, 0, 204)`);
        
        vertex.visited = true; 
        let destination = findNeighbors(vertex, vertices, queue, p5);      
        if(destination){
            findPath(destination);
            break;
        };
    }
}

const findPath = (vertex) => {
    
    let node = vertex;
    while (!node.isStart) {
        
        node.color = 'yellow';
        node = node.prev;
        if(!node.prev) break;       
    }
    node.color = 'yellow';
}

const findNeighbors = (vertex, vertices, queue, p5) => {
    const edges = vertex.edges;
    for (let i = 0; i < edges.length; i++) { 
        let [row, col] = edges[i].end;    
        let neighbor = vertices[row][col];
        if (neighbor.isEnd) {
            neighbor.prev = vertex;      
            return neighbor;            
        };
        if (neighbor.visited || queue.includes(neighbor)) continue;          
        
        queue.push(neighbor);         
        neighbor.prev = vertex;
        neighbor.color = p5.color('rgb(0, 255, 255)');        
    }      
    return null;
}


export default BFS;
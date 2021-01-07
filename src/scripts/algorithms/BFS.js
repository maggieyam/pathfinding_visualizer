
const BFS = (vertices, start) => {
    const queue = [];
    let considered = [];
    let [row, col] = start;
    let startNode = vertices[row][col];
    startNode.cost = 0;
    queue.push(startNode);

    while (queue.length) {
        let vertex = queue.shift();   
        vertex.visited = true; 
       
        let destination = findNeighbors(vertex, vertices, queue, considered);      
        if(destination){
            for (let vertex of considered) {
                setTimeout(() => vertex.color = "rgb(77, 208, 225)", 500);
            }
            setTimeout(() => findPath(destination), 600);
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

}

const findNeighbors = (vertex, vertices, queue, considered) => {
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
        // setTimeout(() => vertex.color = 'rgb(21, 101, 192)', 100);
        considered.push(neighbor);         
        neighbor.prev = vertex;
        // neighbor.color = 'rgb(0, 255, 255)';        
    }      
    return null;
}


export default BFS;
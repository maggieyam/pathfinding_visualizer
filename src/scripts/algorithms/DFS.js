const DFS = (p5, vertices, start, end) => {
    let [row, col] = start;
    let startNode = vertices[row][col];
    if (row === end[0] && col === end[1]) {
        startNode.color = 'yellow';
        return true;
    }

    startNode.visted = true;
    setTimeout(() => startNode.color = `rgb(102, 0, 204)`, 200);

    for (const edge of startNode.edges) {
        let [row, col] = edge.end;    
        let neighbor = vertices[row][col];
        if (!neighbor.visted) {
            neighbor.prev = startNode;
            neighbor.color = p5.color('rgb(0, 255, 255)');
            if (DFS(p5, vertices, neighbor.pos, end)){
                startNode.color = 'yellow';
                
                return true;
            };
        }
    }
    return false; 
}
export default DFS;
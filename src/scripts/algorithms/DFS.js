const ROW = 41;
const COL = 90;
let considered = [];
let visited = [];
export const DFS = (vertices, start, end) => {
    let [row, col] = start;
    let startNode = vertices[row][col];
    if (row === end[0] && col === end[1]) {
        // setTimeout(() => startNode.color = 'yellow', 1000);

        return true;
    }

    startNode.visted = true;
    // startNode.color = `rgb(102, 0, 204)`;

    for (const edge of startNode.edges) {
        let [row, col] = edge.end;  
        if (!vertices[row][col]) continue;
        let neighbor = vertices[row][col];
        considered.push(neighbor)
        if (!neighbor.visted) {
            neighbor.prev = startNode;
            neighbor.color = 'rgb(0, 255, 255)';
            if (DFS(vertices, neighbor.pos, end)){
                // setTimeout(() => startNode.color = 'yellow', 1000);
                return true;
            };
        }
    }
    return false; 
}
// export default DFS;

export const animation = () => {
    for(let i in considered){
        setTimeout(() => considered[i].color = `rgb(83, 109, 254)`, 5 * i)
    }
}
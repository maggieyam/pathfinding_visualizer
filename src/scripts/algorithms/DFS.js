import { Vertex } from "../graph/node";

const ROW = 41;
const COL = 90;
let considered = [];
let visited = [];

export const DFS = (vertices, start, end) => {
    let [row, col] = start;
    // let considered = [];
    let startNode = vertices[row][col];
    considered.push(startNode);
    while (considered.length > 0) {
        let vertex = considered.pop();
        if (!vertex.visited) {
            vertex.visited = true;
            
        }

        for(let i = vertex.edges.length - 1; i >= 0; i--) {
            let edge = vertex.edges[i];
            let [row, col] = edge.end;  
            let neighbor = vertices[row][col];
            if (!neighbor.visited) considered.push(neighbor);
            setTimeout(() => vertex.color = 'yellow', 7 * (vertex.edges.length - i));
            if(neighbor.isEnd) {
                considered = [];
                break;
            }
        }
    }  
}

// Recursive:

    // if (startNode.isEnd) {
    //     startNode.color = 'yellow';
    //     return true;
    // }

    // startNode.visted = true;
    // startNode.color = 'yellow';
    // for (const edge of startNode.edges) {
    //     let [row, col] = edge.end;  
    //     let neighbor = vertices[row][col];
    //     considered.push(neighbor)
    //     if (!neighbor.visted) {
    //         neighbor.prev = startNode;
    //         if (DFS(vertices, neighbor.pos, end)){
    //             neighbor.color = 'yellow';
    //             return true;
    //         };
    //     }
    // }
    // return false; 
// }
export default DFS;

// export const animation = () => {
//     for(let i in considered){
//         setTimeout(() => considered[i].color = `yellow`, 5 * i)
//     }
// }
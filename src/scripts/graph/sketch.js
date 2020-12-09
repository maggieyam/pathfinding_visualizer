import p5 from 'p5';
import { Vertex } from './node';
import  Dijkstra  from "../algorithms/Dijkstra's"; 
const ROW = 30;
const COL = 51;
const WIDTH = 30;
const HEIGHT = 30;
let vertices = [];
let vertex;
let start = [];
let end = [];
let sel;

const createVertex = (p5) => {
    for (let i = 0; i < ROW; i++){
        const arr = [];
        for (let j = 0; j < COL; j++) {
            vertex = new Vertex([i, j], p5);
            arr.push(vertex);
        }
        vertices.push(arr);
    }
}

const algorithmSel = (p5) => {
    p5.textAlign(p5.CENTER);
    p5.background(200);
    sel = p5.createSelect();
    sel.position(10, 10);
    sel.option('Dijkstra\'s algorithm');
    sel.option('A*');
    sel.option('BFS');
    sel.option('DFS');
}

const sketch = (p5) => { 
    p5.setup = () => {    
        // let location = document.querySelector('.location');
        p5.createCanvas(1500, 900);
        p5.background(225);
        algorithmSel(p5);
        createVertex(p5);
        // canvas.dragOver();
    }

    
    p5.mySelectEvent = () => {
        let algorithm = sel.value();
        background(200);
        switch (algorithm) {
            case 'Dijkstra\'s algorithm':
                return Dijkstra(p5, vertices, start, end);
            // case 'A*':
            //     return A*(p5, vertices);
            // case 'BFS':
            //     return BFS(p5, vertices);
            // case 'DFS':
            //     return DFS(p5, vertices);
            default:
                break;
        }
    }

    p5.draw = () => {
        for (let i = 0; i < ROW; i++){
            for (let j = 0; j < COL; j++) {
                vertices[i][j].display(i, j);
            }
        }
    }

    p5.mousePressed = () => {
        const col = Math.floor(p5.mouseX / WIDTH);
        const row = Math.floor(p5.mouseY / HEIGHT);
        const cost = p5.get(p5.mouseX, p5.mouseY);
        if ((col < 0 || row < 0) || col ===  COL - 1) return null;
        removeEnd();
        vertices[row][col].click(start, cost);
        update(row, col);   
    }

}


const update = (row, col) => {
    if (!start.length) {
        start = [row, col];
    } else if (start[0] === row && start[1] === col) {
        end = [];
    } else {       
        end = [row, col];
    }
}


const removeEnd = () => {
    if (end.length) {
        const [row, col] = end;
        vertices[row][col].color = 'white';
    }
}

const newSketch = new p5(sketch);



import p5 from 'p5';
import { Vertex } from './node';
import  Dijkstra  from "../algorithms/Dijkstra's";
import Astar from "../algorithms/Astar"; 
import BFS from '../algorithms/BFS';
import DFS from '../algorithms/DFS';

const ROW = 45;
const COL = 90;
const WIDTH = 20;
const HEIGHT = 20;
// const ROW = 30;
// const COL = 51;
// const WIDTH = 30;
// const HEIGHT = 30;
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

const mapSel = (p5) => {
    const mapSel = p5.createSelect();
    mapSel.option('manhattan');
    mapSel.option('Los Angeles');
    mapSel.option('maze');
    mapSel.changed(p5.mySelectEvent);
    const nav = p5.select('.select');
    sel.parent(nav);
    // const nav = p5.select('.select');
    // sel.parent(nav);

}

const algorithmSel = (p5) => {
    sel = p5.createSelect();
    sel.option('Dijkstra\'s algorithm');
    sel.option('A*');
    sel.option('BFS');
    sel.option('DFS');
    sel.changed(p5.mySelectEvent);
    const nav = p5.select('.select');
    sel.parent(nav);
    
}

const resetButton = (p5) => {
    const reset = p5.select('.reset');
        // reset.position(19,29);
        reset.mousePressed(reload);
}

const sketch = (p5) => { 
    p5.setup = () => {    
        p5.createCanvas(1780, 900);
        p5.background(225);
        algorithmSel(p5);
        mapSel(p5);
        createVertex(p5);
        resetButton(p5);
        // canvas.dragOver();
    }

    p5.mySelectEvent = () => {
        resetGrid();
        const startPoint = start;
        const endPoint = end;
        start = startPoint;
        end = endPoint;
        if (start.length && end.length) algorithmType(p5);
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
        // debugger;
        if ((col < 0 || row < 0) || col ===  COL - 1) return null;  
        const action = update(row, col); 
        if (action) vertices[row][col].click(action, algorithmType);
    }

}
const newSketch = new p5(sketch);


const reload = () => {
    location.reload();
}
const algorithmType = (p5) => {
    let algorithm = sel.value();
        switch (algorithm) {
            case 'Dijkstra\'s algorithm':
                Dijkstra(p5, vertices, start, end);
                break;
            case 'A*':
                Astar(p5, vertices, start, end);
                break
            case 'BFS':
                BFS(p5, vertices, start, end);
                break
            case 'DFS':
                DFS(p5, vertices, start, end);
                break;
            default:
                break;
        }
}

const update = (row, col) => {
    if (!start.length) {
        start = [row, col];
        return 'start';
    } else if (vertices[row][col].isStart) {
        const prevStart = vertices[row][col];
        prevStart.isStart = false;
        prevStart.color = 'white';
        start = [];
    } else {     
        if (end.length) {
            const prevEnd = vertices[end[0]][end[1]];
            prevEnd.isEnd = false;
            prevEnd.color = 'white';
            resetGrid();
        }
        end = [row, col];
        return 'end';
    }
   
}

const resetGrid = () => {
    if (!vertices.length) return null;
    for (let i = 0; i < ROW; i++){
        for (let j = 0; j < COL; j++) {
            vertices[i][j].reset();
        }
    }
}






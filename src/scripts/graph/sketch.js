import { Vertex } from './node';
import  Weighted  from "../algorithms/wighted";
// import Astar from "../algorithms/Astar"; 
import BFS from '../algorithms/BFS';
import DFS from '../algorithms/DFS';
import p5 from 'p5';


const ROW = 41;
const COL = 90;
const WIDTH = 20;
const HEIGHT = 20;
let vertices = [];
let vertex;
let start = [];
let end = [];
let sel;
let location;

const createVertex = (p5) => {
    for (let i = 0; i < ROW; i++){
        const arr = [];
        for (let j = 0; j < COL; j++) {
            let container = p5.createDiv('');
            container.addClass(i);
            vertex = new Vertex([i, j], p5);
            arr.push(vertex);
        }
        vertices.push(arr);
    }
}

// const mapSel = (p5) => {
//     const mapSel = p5.createSelect();
//     mapSel.option('manhattan');
//     mapSel.option('Los Angeles');
//     mapSel.option('maze');
//     mapSel.changed(p5.mySelectEvent);
//     const nav = p5.select('.select');
//     sel.parent(nav);
//     // const nav = p5.select('.select');
//     // sel.parent(nav);

// }

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
    reset.mousePressed(() => {
        resetGrid(p5);
        vertices[start[0]][start[1]].isStart = false;
        vertices[end[0]][end[1]].isEnd = false;
        start = [];
        end = [];
        p5.redraw();
    });
}


const sketch = (p5) => { 
    p5.setup = () => {    
        p5.createCanvas(1780, 820);
        p5.background(225);
        algorithmSel(p5);
        // mapSel(p5);
        createVertex(p5);
        resetButton(p5);     

    }

    p5.preload = () => {
        location = p5.loadImage("/src/asset/location.png");
    }

    p5.mySelectEvent = () => {
        const startPoint = start;
        const endPoint = end;
        start = startPoint;
        end = endPoint;
        if (start.length && end.length) algorithmType(p5);
    }

    p5.draw = () => {
        for (let i = 0; i < ROW; i++){
            for (let j = 0; j < COL; j++) {
                const vertex = vertices[i][j];
                if (vertex.isStart){
                    p5.fill(vertex.color);
                    p5.rect(WIDTH * j, HEIGHT * i, WIDTH, HEIGHT); 
                    p5.fill('rgb(255, 61, 0)');
                    p5.circle(WIDTH * j + WIDTH / 2, HEIGHT * i + HEIGHT / 2, WIDTH ); 
                    p5.fill('rgb(192, 0, 0)');
                    p5.circle(WIDTH * j + WIDTH / 2, HEIGHT * i + HEIGHT / 2, WIDTH * 0.5); 

                } else if (vertex.isEnd){
                    
                    // p5.fill(vertex.color);
                    // p5.circle(WIDTH * j + WIDTH / 2, HEIGHT * i + HEIGHT / 2, WIDTH ); 
                    p5.image(location, WIDTH * j - 6, HEIGHT * i - 12, 30, 34)
                    
                    // p5.rect(WIDTH * j, HEIGHT * i, WIDTH, HEIGHT); 
                } else if (vertex.color === 'white') {
                    p5.fill(vertex.color);
                    p5.rect(WIDTH * j, HEIGHT * i, WIDTH, HEIGHT);             
                    p5.stroke(`rgb(179, 229, 252)`);
                } else if (vertex.color === 'rgb(74, 20, 140)') {
                    p5.fill(vertex.color);
                    p5.circle(WIDTH * j + WIDTH / 2, HEIGHT * i + HEIGHT / 2, WIDTH / 4);
                    // p5.stroke(0);
                } else if (vertex.color === 'rgb(94, 53, 177)'){
                    p5.fill(vertex.color);
                    p5.circle(WIDTH * j + WIDTH / 2, HEIGHT * i + HEIGHT / 2, WIDTH / 1.75);
                    p5.stroke(244, 247,250);
                } else if (vertex.color === 'rgb(21, 101, 192)'){
                    p5.fill(vertex.color);
                    p5.circle(WIDTH * j + WIDTH / 2, HEIGHT * i + HEIGHT / 2, WIDTH / 1.25);
                    p5.stroke(244, 247,250);
                } else if (vertex.color === 'rgb(83, 109, 254)' 
                    // || vertex.color === "rgb(255, 128, 178)"
                    || vertex.color === "rgb(77, 208, 225)"
                    || vertex.color === "yellow") {
                    p5.fill(vertex.color);
                    p5.rect(WIDTH * j, HEIGHT * i, WIDTH, HEIGHT);
                    p5.stroke(244, 247,250);
                } 
            }
        }
    }



    p5.mousePressed = () => {
        const col = Math.floor(p5.mouseX / WIDTH);
        const row = Math.floor(p5.mouseY / HEIGHT);

        // ;
        if ((col < 0 || row < 0 || col > COL - 1 || row > ROW - 1) ) return null;  
        update(row, col, p5); 
        // if (action) vertices[row][col].click(action, algorithmType);
    }

}
const newSketch = new p5(sketch);




const algorithmType = (p5) => {
    let algorithm = sel.value();
    resetGrid(p5);
    p5.redraw();
        switch (algorithm) {
            case 'Dijkstra\'s algorithm':
                Weighted(vertices, start, end, 'Dijkstra');
                break;
            case 'A*':
                Weighted(vertices, start, end, 'Astar');
                break
            case 'BFS':
                BFS(vertices, start);
                break
            case 'DFS':
                DFS(vertices, start, end);
                break;
            default:
                break;
        }
}

const update = (row, col, p5) => {
    const vertex = vertices[row][col];
    if (!start.length) {
        start = [row, col];
        vertex.isStart = true;

    } else if (vertex.isStart) {
        const prevStart = vertex;
        prevStart.isStart = false;
        prevStart.color = 'white';
        start = [];

    } else {     
        if (end.length) {
            const prevEnd = vertices[end[0]][end[1]];
            prevEnd.isEnd = false;
            prevEnd.color = 'white';
            
        }
        end = [row, col];
        vertex.isEnd = true;
        
        setTimeout(()=> algorithmType(p5), 100);
    }
   
}

const resetGrid = (p5) => {
    if (!vertices.length) return null;
    for (let i = 0; i < ROW; i++){
        for (let j = 0; j < COL; j++) {
            vertices[i][j].reset();
            // p5.redraw();
        }
    }
}






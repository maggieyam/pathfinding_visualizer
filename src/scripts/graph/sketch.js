import p5 from 'p5';
import { Vertex } from './node';
const row = 30;
const col = 51;
const width = 30;
const height = 30;
let vertices = [];
let vertex;
let start = false;
let end = [];

const sketch = (p5) => { 
    p5.setup = () => {    
        p5.createCanvas(1500, 900);
        p5.background(225);
        for (let i = 0; i < row; i++){
            for (let j = 0; j < col; j++) {
                vertex = new Vertex([i, j], p5);
                vertices.push(vertex);
            }
        }
}

    p5.draw = () => {
        vertices.forEach(vertex => {
            const [row, col] = vertex.pos;
            vertex.display(row, col);
        })
    }

    p5.mousePressed = () => {
        const currCol = Math.floor(p5.mouseX / width);
        const currRow = Math.floor(p5.mouseY / height);
        const idx = currRow  * col + currCol;
        if (idx % col !== col - 1){
            deleteEnd();
            vertices[idx].click(start);
            update(currRow, currCol);
        }
    }
}


const update = (row, col) => {
    if (!start) {
        start = [row, col];
    } else {
        end = [row, col];
    }
}


const deleteEnd = () => {
    if (end.length) {
        const idx = end[0]  * col + end[1];
        vertices[idx].color = 'white';
    }
}

const newSketch = new p5(sketch);



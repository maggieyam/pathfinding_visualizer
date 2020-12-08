// import p5 from 'p5';

export class Vertex {
    constructor(pos){
        this.pos = pos
        this.isStart = false;
        this.isEnd = false;
        this.prev = [];
        this.cost = Infinity;
    }
}

export class Edge {
    constructor(start, end){
        this.start = start;
        this.end = end;
        this.weight = 1;
    }
}

// Node.prototype.draw = () => {
//     rect(this.row * 30, this.col * 30, 30, 30, 10);
//     fill(255);
//     stroke (0);
// }

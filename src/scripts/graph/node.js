const width = 30;
const height = 30;

export class Vertex {
    constructor(pos, ctx) {
        this.pos = pos;
        this.color = 'white';
        this.isStart = false;
        this.isEnd = false;
        this.prev = [];
        this.cost = Infinity;
        this.brightness = 0;
        this.ctx = ctx;
    }

    display(row, col){    
        this.ctx.rect(width * (col - 1), height * row, width, height, 10);
        this.ctx.fill(this.color);
        this.ctx.stroke (0);
    }

    click(start){   
        this.color = 'red';
        if (!start && !this.end) {
            this.start = true;
        } 
        this.color = 'red';       
    }
}

export class Edge {
    constructor(start, end){
        this.start = start;
        this.end = end;
        this.weight = 1;
    }
}


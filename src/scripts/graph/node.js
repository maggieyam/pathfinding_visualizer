const width = 30;
const height = 30;

export class Vertex {
    constructor(pos, ctx) {
        this.pos = pos;
        this.color = 'white';
        this.isStart = false;
        this.isEnd = false;
        this.visited = false;
        this.prev = [];
        this.cost = Infinity;
        this.ctx = ctx;
    }

    display(ROW, col){    
        this.ctx.rect(width * (col - 1), height * ROW, width, height, 10);
        this.ctx.fill(this.color);
        this.ctx.stroke (0);
    }

    click(start, cost){   
        this.color = 'blue';
        if (!start.length && !this.end) {
            this.isStart = true;
        } else {
            this.isEnd = true;
        }
        this.color = 'blue';  
        this.cost = cost[0] / 25;
        console.log(this.cost);     
    }
}

export class Edge {
    constructor(start, end){
        this.start = start;
        this.end = end;
        this.weight = 1;
    }
}


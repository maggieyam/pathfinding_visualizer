import { map1, map2 } from '../utils/mapUtil';
const ROW = 45;
const COL = 90;
const POS = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 1]
]

export class Vertex {
    constructor(pos) {
        this.pos = pos;
        this.color = 'white';
        this.isStart = false;
        this.isEnd = false;
        this.visited = false;
        this.prev;
        this.cost = Infinity;
        this.edges = [];
        this.heuristic = 0;
        this.setEdges();       
    }

    setEdges() {
        POS.forEach(pos => {
            let px = this.pos[0] + pos[0];
            let py = this.pos[1] + pos[1];
            const inBound = px >= 0 && px < ROW &&  py >= 0 && py < COL;
            if (inBound ) {
                let edge = new Edge(this.pos, [px, py]);
                this.edges.push(edge);
                // this.color = this.ctx.color(102, 0, 255);
                let g = edge.weight * 20;
                // this.setMap('map1',g);
            }
        })
    }

    // setMap(map, g) {
    //     this.color = this.ctx.color(`rgb(255, ${g}, ${g})`);
    //     const [row, col] = this.pos;
    //     map1(row, col, this, g);
    // }

    reset() {
        this.color = 'white';
        this.visited = false;
        this.prev;
        this.cost = Infinity;
        this.edges = [];
        this.heuristic = 0;
        this.setEdges();   
    }

    click(action, algorithmType){   ;
        
        if (action === 'start') {
            this.isStart = true;
            this.color = 'green';
        } else if (action = 'end') {
            this.isEnd = true;
            this.color = 'blue';
            // end = this.pos;  
            algorithmType(this.ctx);
        }    
    }


}

export class Edge {
    constructor(start, end){
        this.start = start;
        this.end = end;
        this.weight = Math.floor(Math.random() * 15 );
    }
}



import Node from './node';


class Grid {
    constructor(row, col){
        this.row = row;
        this.col = col;

        let grid = new Array;
        for (let i = 0; i < this.row; i++){
          let arr = new Array(this.col);
          for (let j = 0; j < this.col; j++) {
            let node = new Node(i, j);    
            node.draw();
            arr[j] = node; 
          }
          grid.push(arr);
        }
    };
}

export default Grid;



function setup(){    
    createCanvas(1550, 950);

}


function draw() {
  background(225);
  for (let i = 0; i < 50; i++){
      for (let j = 0; j < 30; j++) {
        rect(i * 30, j * 30, 30, 30, 10);
        fill(255);
        stroke (0);
    }
  }
//   console.log(grid);
}
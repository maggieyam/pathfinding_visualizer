export const map1 = (row, col, vertex, g) =>  {
    if ( col < 10 || row < 5 || col > 78 || row > 35 ) {vertex.weight = 'white';}
    else if(col < 15 ||  row < 10 || col > 73 || row > 30 ){vertex.weight = 'pink'}
    else if((col > 34 || row > 20 || col < 38 || row < 15 ) && col % 5 === 0) {vertex.weight = `rgb(255, ${g}, ${g})`}
    // else {vertex.color = 'red'}
}

export const map2 = (row, col, vertex) => {

}
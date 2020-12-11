export const map1 = (row, col, vertex, g) =>  {
    if ( col < 10 || row < 5 || col > 78 || row > 40 ) {vertex.color = 'white';}
    else if(col < 15 ||  row < 10 || col > 73 || row > 35 ){vertex.color = 'pink'}
    else if(col <15 || row > 20 || col > 38 || row < 15) {vertex.color = vertex.ctx.color(`rgb(255, ${g}, ${g})`)}
    else {vertex.color = 'red'}
}

export const map2 = (row, col, vertex) => {

}
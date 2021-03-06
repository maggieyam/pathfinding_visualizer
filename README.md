# pathfinding_visualizer

### Description
* Pathfinding is closely related to the shortest path problem, within graph theory, which examines how to identify the path that best meets some criteria (shortest, cheapest, fastest, etc) between two points in a large network.
* This project visualize how each algorithm searches for the shortest path.


### Architecture and Technologies
This project will be implemented with the following technologies:
* `JavaScript` for main logic,
* `p5.js` with `HTML5` for effect rendering,

In addition to the entry file, there will be a few scripts involved in this project:

`sketch.js`: this script will handle the logic for rendering elements on DOM.
`Dijkstra.js`: this script will handle the logic of Dijkstra's algorithm.
`A*.js`: this script will handle the logic of A* algorithm.
`BFS.js`: this script will handle the logic of Breath First Search algorithm.
`DFS.js`: this script will handle the logic of Depth First Search algorithm.


### Weighted searching algorithm

* Dijkstra's Algorithm
  * Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks

* A* 
  *  A* (pronounced "A-star") is a graph traversal and path search algorithm, which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency.
  
![](visualizer.gif)
 
 
##### Both Dijsktra's algorithm and A* used weighted graphs. In each game, I have randomly distributed cost to each vertex. Starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.)

* To do that, I have build my own `Priority Queue` abstract data type. 
  * To optimize the complexity of this algorithm, I will implememnt minheap to build the `Priority Queue`.

```
enqueue(vertex) {
    if (this.queue.includes(vertex)) return false;
    let isEnqueued = false;
    for (let i = 0; i < this.queue.length; i++) {
        const {cost, heuristic} = this.queue[i];
        if(cost + heuristic >= vertex.cost + vertex.heuristic) {
            this.queue.splice(i, 0, vertex);
            isEnqueued = true;
            break;
        }
    }
    if(!isEnqueued) this.queue.push(vertex);
    return true;
}

dequeue() {
    if (this.queue.length === 0) return null;
    return this.queue.shift();
}
```
* For A*, I have added `heuristic cost` that calculates the distance (as a cost) from the destination.
```
const heuristic = (vertex, end) => {
    let dx = Math.abs(end[0] - vertex.pos[0]);
    let dy = Math.abs(end[1] - vertex.pos[1]);
    return dx + dy + (Math.sqrt(2) - 2) * Math.min(dx, dy);
}
```

 

# pathfinding_visualizer

### Functionality & MVP
* Select start point and end point
* Choose different pathfinding algorithm
* Choose different colors 
* Set barriers

In addition, this project will include:
* An about page describing each of the searching method
* A production README

### Wireframes 

This app will consist of a single screen with a grid board, drop-down button, and nav links to my Github and LinkedIn. 
The drop-down allows users to select different pathfinding algorithm (eg. A*, Dijkstra, etc). On the right, several different 
color theme (3-5), a start button. A multi-search (bubble search, merge search, etc) visualzor will be a bonum feature.

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
 
### Both Dijsktra's algorithm and A* used weighted graphs. In each game, I have randomly distributed cost to each vertex. Starting from a specific starting node of a graph, it aims to find a path to the given goal node having the smallest cost (least distance travelled, shortest time, etc.)

![](visualizer.png)
 

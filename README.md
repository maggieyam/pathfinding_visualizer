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
* `Browserify` to bundle js files.

In addition to the entry file, there will be a few scripts involved in this project:

`board.js`: this script will handle the logic for rendering elements on DOM.
`Dijkstra.js`: this script will handle the logic of Dijkstra's algorithm.
`A*.js`: this script will handle the logic of A* algorithm.
`BFS.js`: this script will handle the logic of Breath First Search algorithm.
`DFS.js`: this script will handle the logic of Depth First Search algorithm.

### Implementation Timeline
 **Day1**: Setup `P5.js` and `Browserify`. Write basic entry file and the bare bones of `board.js` and `Dijkstra.js`.
  * Draw the grid on canvas and learn more about `P5.js`.
  
 **Day2**: Start to build Diajsktra's algorithm and render it on `HTML5`. 
  * Complete `Dijkstra.js` module
  * Make each square clickable and be able to set start and end points.
  
 **Day3**: Style my page and add colors to my visualizer. For any node is visited, should change their colors for visualization.
 
 **Day 4**: Add more Algorithms.
 * Study more about A* 
 
 **Day 5**: Add BFS and DFS
 
 ### Bonus
 * Add animation
 * Add sorting algorithm 
 

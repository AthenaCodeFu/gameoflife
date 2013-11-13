Game Of Life
============
The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It’s a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input - you create an initial configuration and watch how it evolves. Some initial patterns give rise to complex and beautiful ever-changing sce- narios, others eventually stabilize into a fixed configuration.

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbours dies, as if caused by under-population.
* Any live cell with two or three live neighbours lives on to the next generation.
* Anylivecellwithmorethanthreeliveneighboursdies, as if by overcrowding.
* Any dead cell with exactly three live neighbours be- comes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultane- ously to every cell in the seed — births and deaths occur si- multaneously, and the discrete moment at which this happensis sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

![Gosper Glider Gun (image from wikipedia)](http://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

This aim of this Kata is to write some code that calculates the following generations, given a starting “seed” position. For example, you could start with the “glider gun”, above, and see it generate a stream of gliders in subsequent turns. It’s also pretty cool if you can manage to write code to visualize the cells as the position changes after each new generation.

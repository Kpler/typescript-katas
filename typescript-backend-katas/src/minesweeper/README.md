# Minesweeper Kata

Have you ever played Minesweeper? The aim of the game is to find all the mines within an MxN minefield. When you "sweep" a square, if the square contains a mine, the game is over; otherwise the game displays a number telling you you how many mines there are adjacent to that square. The game is won if all non-mine squares have been revealed.

## Setup

```sh
# Install project dependencies
npm ci

# Run tests
npm test
```

## Iteration 1: generate a new game with mines

Write a program that accepts a number of rows, number of columns, and a difficulty, and generates a new minefield ready to play, with `.` representing clear squares, and `*` representing mines.

Example output for input of 4 rows, 4 columns, and 'easy' difficulty:
```
*...
....
.*..
....
```

## Iteration 2: display the number of mines adjacent to each square

Build on the first iteration to output the adjacent mine count for each square
Example output of game with all numbers:
```
*100
2210
1*10
1110
```

## Iteration 3: play the game

Add a function to _play_ the game. When a new game is generated, it should display a blank minefield:
```
....
....
....
....
```
When a square is swept, it should either end the game, or display the number of mines adjacent to the square:
```
// Sweep row 1 col 1: game over
*...
....
....
....

// Sweep row 1 col 2: number is displayed; game is still in progress
.1..
....
....
....
```

---

_This kata is loosely based on https://codingdojo.org/kata/Minesweeper_
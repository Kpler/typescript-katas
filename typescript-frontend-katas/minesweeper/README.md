# Minesweeper

This kata takes the work prepared in the[Typescript Backend Minesweeper kata](https://github.com/Kpler/typescript-katas/tree/main/typescript-backend-katas/src/minesweeper), and uses it to create a playable Minesweeper game with an interactive user interface.

## Setup

```sh
# Install project dependencies
npm ci

# Run app
npm run serve
```

## Instructions

Modify the `MinesweeperProgram.vue` component to initialize the Minesweeper grid, 

Play minesweeper game. display grid, and click a grid and display the number count. If a mine is clicked, display a 'game over' message. If the player wins the game, display ...

- Make a component for Cell and use props/events
- Some XP-style classes are available in `App.vue` if you don't want to write your own box shadows

## Bonus

- Display all mines once the game is lost
- Style minefield
- Generate mines randomly
  - Make sure the first click can't be on a mine
- Make a 'restart' button
- Color numbers like minesweeper
- Add hover effect


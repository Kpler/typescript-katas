# Minesweeper

This kata takes the work prepared in
the[Typescript Backend Minesweeper kata](https://github.com/Kpler/typescript-katas/tree/main/typescript-backend-katas/src/minesweeper)
, and uses it to create a playable Minesweeper game with an interactive user interface.

## Setup

```sh
# Install project dependencies
npm ci

# Run app
npm run serve
```

## Instructions

Modify the `MinesweeperProgram.vue` component so an end user can play Minesweeper in the browser. 
The UI should interact
with the `Minesweeper` class, 
and call the class' `play` method when a cell is clicked to win/lose the game, or reveal
the number of adjacent mines.

Make a `MinesweeperCell` component for each cell, with props and events.

## Bonus features

Finished implementing the game? Here are some suggestions for bonus features, in no particular order:

- Display all the mines in the field when the game is lose
- Generate mines randomly so the game can be played multiple times
- Add a 'restart' feature to regenerate a minefield once a game is over
- Color the mine counts the same way Windows XP colors them
- Have fun with the visual styles of the minefield!

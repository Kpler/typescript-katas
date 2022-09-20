enum MineStatus {
  MINE = "*",
  CLEAR = ".",
}

type Cell = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "*" | ".";

export class Minesweeper {
  #grid: Cell[][];
  #mask: Boolean[][];

  constructor(rows: number, columns: number, mines: [number, number][]) {
    const gridWithMines = this.#generateMinefield(rows, columns, mines);
    this.#grid = this.#addCountsToMinefield(gridWithMines, mines);
    this.
  }

  #generateMinefield(
    rows: number,
    columns: number,
    mines: [number, number][]
  ): MineStatus[][] {
    const grid: MineStatus[][] = [];

    for (let i = 0; i < rows; i++) {
      const rowArr = [];
      for (let j = 0; j < columns; j++) {
        rowArr.push(MineStatus.CLEAR);
      }
      grid.push(rowArr);
    }

    mines.forEach((mine) => {
      const [mineX, mineY] = mine;
      grid[mineX][mineY] = MineStatus.MINE;
    });

    return grid;
  }

  #addCountsToMinefield(grid: MineStatus[][], mines: [number, number][]): Cell[][] {
    return grid.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        if (cell === MineStatus.MINE) {
          return "*";
        }

        const adjacentMines = mines.filter(([x, y]) => {
          return (
            [rowIndex - 1, rowIndex, rowIndex + 1].includes(x) &&
            [cellIndex - 1, cellIndex, cellIndex + 1].includes(y)
          );
        });
        return adjacentMines.length.toString() as Cell;
      })
    );
  }

  play(row: number, column: number): string {
    /* 
    .*.
    ...
    ...

    Play(0, 2)

           ..1
    str =  ...
           ...

           false false true
    mask = false false false
           false false false

    moves = [[0,1], [2, 1]]
    
    

     1. Retrieve the current grid.
     2. 
    */

    

  }

  toString(): string {
    return this.#grid
      .map(row => row.join(""))
      .join("\n");
  }
}
